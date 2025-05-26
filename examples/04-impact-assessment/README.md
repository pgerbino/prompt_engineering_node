# Impact Assessment Example

This example demonstrates how to use GitHub Copilot to assess the impact of proposed code changes. You'll learn how to:
- Write effective prompts for impact analysis
- Get comprehensive change assessments from Copilot
- Identify affected components and risks
- Generate migration strategies
- Create implementation recommendations

## Prerequisites

- Node.js 18+
- pnpm 8+
- GitHub Copilot subscription
- VS Code with GitHub Copilot extension

## Setup

1. Install dependencies:
```bash
pnpm install
```

## Running the Example

```bash
pnpm example 04
```

This will:
1. Load the current code and proposed changes
2. Generate a structured prompt for Copilot
3. Provide instructions for using the prompt with Copilot

## Example Structure

```
04-impact-assessment/
├── inputs/           # Code and changes to analyze
│   ├── current.ts   # Current codebase
│   └── changes.md   # Proposed changes
└── run.mjs         # Example runner
```

## How to Use

1. Run the example to get the impact assessment prompt
2. Open a new markdown file in VS Code with GitHub Copilot enabled
3. Copy the generated prompt
4. Paste it into the file
5. Let Copilot generate the assessment
6. Review and refine the generated assessment

## What You'll Learn

- How to structure prompts for impact analysis
- Best practices for change assessment
- Techniques for risk evaluation
- How to generate comprehensive impact reports
- Methods for creating migration plans

## Customizing the Example

You can modify the files in the `inputs/` directory to assess your own changes. The prompt will help you:
1. Analyze the current codebase
2. Evaluate proposed changes
3. Identify affected components
4. Generate impact report
5. Create migration strategy

## Expected Output

Copilot will generate:
1. Technical impact analysis
2. Risk assessment
3. Migration strategy
4. Implementation recommendations
5. Cost analysis

## Next Steps

After completing this example, you can:
1. Try assessing different types of changes
2. Customize the assessment prompt
3. Move on to the test generation example (05) 