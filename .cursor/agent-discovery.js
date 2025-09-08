#!/usr/bin/env node

/**
 * Agent Discovery Script for Cursor Integration
 * This script helps Cursor discover and reference agents from the .agents folder
 */

const fs = require('fs');
const path = require('path');

const AGENTS_DIR = path.join(__dirname, '..', 'vcli', '.agents');
const OUTPUT_FILE = path.join(__dirname, 'agents.json');

function discoverAgents() {
  const agents = {};

  // Helper function to read agent file and extract metadata
  function readAgentFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');

      // Extract agent name from first heading
      const nameMatch = content.match(/^# (.+) Agent/);
      const name = nameMatch ? nameMatch[1].toLowerCase().replace(/\s+/g, '-') : path.basename(filePath, '.md');

      // Extract description from first paragraph after heading
      let description = '';
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line && !line.startsWith('#') && !line.startsWith('<!--')) {
          description = line;
          break;
        }
      }

      return {
        name: name,
        file: path.relative(path.join(__dirname, '..'), filePath),
        description: description || `Agent for ${name} functionality`
      };
    } catch (error) {
      console.warn(`Warning: Could not read ${filePath}:`, error.message);
      return null;
    }
  }

  // Scan planning agents
  const planningDir = path.join(AGENTS_DIR, 'planning');
  if (fs.existsSync(planningDir)) {
    const planningFiles = fs.readdirSync(planningDir).filter(f => f.endsWith('.md'));
    planningFiles.forEach(file => {
      const agent = readAgentFile(path.join(planningDir, file));
      if (agent) agents[agent.name] = agent;
    });
  }

  // Scan development agents
  const devDir = path.join(AGENTS_DIR, 'development');
  if (fs.existsSync(devDir)) {
    const devFiles = fs.readdirSync(devDir).filter(f => f.endsWith('.md'));
    devFiles.forEach(file => {
      const agent = readAgentFile(path.join(devDir, file));
      if (agent) agents[agent.name] = agent;
    });
  }

  // Add root-level agents (like prompt-engineer)
  const rootFiles = fs.readdirSync(AGENTS_DIR).filter(f => f.endsWith('.md'));
  rootFiles.forEach(file => {
    const agent = readAgentFile(path.join(AGENTS_DIR, file));
    if (agent) agents[agent.name] = agent;
  });

  return agents;
}

// Generate the agents configuration
const agents = discoverAgents();

// Write to JSON file for Cursor to consume
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(agents, null, 2));

console.log(`✅ Discovered ${Object.keys(agents).length} agents:`);
Object.entries(agents).forEach(([key, agent]) => {
  console.log(`  @${key} - ${agent.description}`);
});

console.log(`\n📄 Agent configuration saved to: ${OUTPUT_FILE}`);
console.log('🔄 Restart Cursor to pick up the new agent references');
