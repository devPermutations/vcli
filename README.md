# vcli - Agent Ecosystem for Software Development

A structured agent-based workflow system for software development projects. This system coordinates specialized agents through planning and development phases to ensure consistent, high-quality software delivery.

## How It Works

The system implements a structured agent-based workflow as documented in [@agent-description.md](.agents/agent-description.md). The process divides software development into two coordinated phases:

### Phase 1: Project Setup & Documentation
1. **Project Manager (PM)** - Establishes project vision and captures business requirements
2. **Architect** - Creates technical design, architecture diagrams, and implementation patterns
3. **Spike Agent** - Researches technical unknowns and produces supporting documentation
4. **Engineering Manager (EM)** - Develops implementation plans and creates epic breakdowns
5. **Release Manager** - Defines deployment strategy and environment topology

### Phase 2: Development Lifecycle
1. **Git Handler** - Manages version control, branching, and deployment operations
2. **Developer (Dev)** - Implements features following established architectural patterns
3. **Code Reviewer** - Ensures code quality, architectural compliance, and maintains function maps
4. **QA Agent** - Validates functionality through comprehensive testing

Agents collaborate through documented artifacts and clear handoffs, with built-in iteration cycles to maintain quality standards.

## Installation

### Prerequisites
- Git
- GitHub CLI (optional, for PR management)
- Cursor IDE (for @ agent references)

### Setup
```bash
# Clone the repository
git clone https://github.com/devPermutations/vcli.git
cd vcli

# Restart Cursor to enable @ agent references
# The MCP configuration will automatically load agent references
```

### Cursor Integration
The system integrates with Cursor IDE for agent references using @ symbols:

1. Restart Cursor after setup to load the MCP configuration
2. Type `@` followed by agent name for references:
   - `@pm` - Project Manager
   - `@architect` - Architect
   - `@git-handler` - Git Handler
   - `@code-reviewer` - Code Reviewer
   - `@qa` - QA Agent

## Usage

### Basic Workflow
1. Start with project planning using PM and Architect agents
2. Create implementation plan with EM agent
3. Use Git Handler to manage branches and commits
4. Implement features with Dev agent
5. Review code with Code Reviewer agent
6. Test functionality with QA agent
7. Deploy using Git Handler

### Agent Communication
Agents communicate through documented handoffs and shared artifacts:
- Planning agents produce documentation in `/docs/`
- Development agents consume these artifacts
- Progress tracking maintained in epic-specific files

## Project Structure

```
vcli/
├── .agents/                    # Agent definitions
│   ├── planning/              # Planning phase agents
│   ├── development/           # Development phase agents
│   ├── agent-description.md   # Workflow documentation
│   └── prompt-engineer.md     # Meta-agent for prompts
├── .cursor/                   # Cursor IDE integration
│   ├── agents.json           # Agent definitions for @ references
│   ├── mcp.json             # MCP server configuration
│   └── agent-discovery.js   # Agent configuration script
├── docs/                      # Project documentation
├── artifact-map.md           # Artifact mapping
└── README.md                 # This file
```

## Key Features

- **Structured Workflow**: Two-phase approach with clear agent responsibilities
- **Quality Assurance**: Built-in review and testing cycles
- **Version Control Integration**: Git Handler manages branching and deployment
- **Cursor IDE Support**: @ symbol references for agent communication
- **Artifact Tracking**: Comprehensive documentation of all outputs
- **Iterative Development**: Quality gates ensure standards are maintained

## Agent Categories

### Planning Phase Agents
- **PM**: Project vision and requirements
- **Architect**: Technical design and patterns
- **Spike**: Technical research
- **EM**: Implementation planning
- **Release Manager**: Deployment strategy

### Development Phase Agents
- **Git Handler**: Version control and deployment
- **Dev**: Feature implementation
- **Code Reviewer**: Quality assurance
- **QA**: Functional testing

### Meta-Agents
- **Prompt Engineer**: Creates and maintains agent prompts

## Contributing

1. Follow the established agent workflow
2. Use Git Handler for version control operations
3. Ensure changes align with architectural patterns
4. Update documentation as needed
5. Test changes through QA agent validation

## License

This project is part of the agent ecosystem for software development workflow management.
