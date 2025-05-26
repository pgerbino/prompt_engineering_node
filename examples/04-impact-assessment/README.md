# Impact Assessment Example

This example demonstrates how to use GitHub Copilot to assess the impact of proposed changes on your codebase. You'll learn how to:
- Write effective prompts for impact assessment
- Get comprehensive analysis from Copilot
- Identify affected components
- Assess risks and dependencies
- Generate migration strategies

## Prerequisites

- Node.js 18+
- npm 9+
- GitHub Copilot subscription
- VS Code with GitHub Copilot extension

## Setup

1. Install dependencies:
```bash
npm install
```

## Running the Example

```bash
npm run example 04
```

This will:
1. Load the current codebase and proposed changes
2. Generate a structured prompt for Copilot
3. Provide instructions for using the prompt with Copilot

## Example Structure

```
04-impact-assessment/
├── inputs/           # Input files
│   ├── current.ts    # Current codebase
│   └── changes.md    # Proposed changes
└── run.mjs         # Example runner
```

## How to Use

1. Run the example to get the assessment prompt
2. Open a new markdown file in VS Code with GitHub Copilot enabled
3. Copy the generated prompt
4. Paste it into the file
5. Let Copilot generate the impact assessment
6. Review and refine the assessment

## What You'll Learn

- How to structure prompts for impact assessment
- Techniques for analyzing code changes
- Methods for identifying risks and dependencies
- Best practices for migration planning
- How to generate comprehensive documentation

## Customizing the Example

You can modify the input files to assess different changes:
1. Update `current.ts` with your codebase
2. Modify `changes.md` with your proposed changes
3. Run the example to get a new assessment

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