# Cursor Agent Integration

This directory contains the configuration for referencing agents in Cursor using the @ symbol.

## Setup

1. **Restart Cursor** after initial setup to pick up agent references
2. **Type @** followed by the agent name to reference them
3. **Agent files** are located in `vcli/.agents/` directory

## Available Agents

### Planning Phase Agents
- **@pm** - Project Manager: Creates project vision and requirements
- **@architect** - Architect: Designs technical solutions and architecture
- **@spike** - Spike Agent: Researches technical unknowns
- **@em** - Engineering Manager: Plans implementation and epics
- **@release-manager** - Release Manager: Manages deployment strategy

### Development Phase Agents
- **@git-handler** - Git Handler: Manages version control and deployments
- **@dev** - Developer: Implements features and code
- **@code-reviewer** - Code Reviewer: Ensures code quality and compliance
- **@qa** - QA Agent: Validates functionality through testing

### Meta-Agents
- **@prompt-engineer** - Prompt Engineer: Creates and maintains agent prompts

## Usage Examples

```
Hey @git-handler, can you create a branch for my changes?
@code-reviewer, please review this PR
@architect, what do you think about this design approach?
```

## Configuration Files

- `agents.json` - Agent definitions and metadata
- `mcp.json` - MCP server configuration
- `agent-discovery.js` - Script to regenerate agent configuration

## Troubleshooting

1. **Agents not showing up**: Restart Cursor
2. **Wrong agent referenced**: Check spelling and available agents above
3. **Configuration issues**: Run `node agent-discovery.js` to regenerate

## Agent Categories

- **Planning Phase**: Used for project setup and design
- **Development Phase**: Used for implementation and quality assurance
- **Meta-Agents**: Infrastructure tools for agent management

Each agent has specific competencies and working protocols defined in their respective markdown files.
