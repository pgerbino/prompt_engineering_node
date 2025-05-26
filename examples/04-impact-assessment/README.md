# Impact Assessment Example

This example demonstrates how to use AI agents to assess the impact of proposed code changes. The agent will help you:
- Analyze potential changes and their effects
- Identify affected components and dependencies
- Assess risks and mitigation strategies
- Generate impact reports

## Prerequisites

- Node.js 18+
- pnpm 8+
- OpenAI API key

## Setup

1. Ensure you have set up your `.env` file with your OpenAI API key:
```bash
OPENAI_API_KEY=your-api-key-here
```

2. Install dependencies:
```bash
pnpm install
```

## Running the Example

```bash
pnpm example 04
```

## Example Structure

```
04-impact-assessment/
├── inputs/           # Code and proposed changes
│   ├── current.ts   # Current codebase
│   └── changes.md   # Proposed changes
├── expected/        # Expected impact analysis
│   └── impact.md
└── run.mjs         # Example runner
```

## What You'll Learn

- How to structure prompts for impact analysis
- Best practices for change assessment
- Techniques for risk evaluation
- How to generate comprehensive impact reports

## Customizing the Example

You can modify the input files to assess your own changes. The agent will:
1. Analyze the current codebase
2. Evaluate proposed changes
3. Identify affected components
4. Generate impact report

## Expected Output

The agent will generate:
1. Impact analysis report
2. Affected components list
3. Risk assessment
4. Mitigation strategies
5. Implementation recommendations

## Next Steps

After completing this example, you can:
1. Try assessing different types of changes
2. Customize the analysis parameters
3. Move on to the test generation example (05) 