# Code Analysis Example

This example demonstrates how to use AI agents to analyze and understand complex codebases. The agent will help you:
- Understand code structure and architecture
- Identify potential issues and improvements
- Generate documentation
- Suggest refactoring opportunities

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
pnpm example 01
```

## Example Structure

```
01-code-analysis/
├── inputs/           # Sample code to analyze
│   └── sample.ts
├── expected.md      # Expected output
└── run.mjs         # Example runner
```

## What You'll Learn

- How to structure prompts for code analysis
- Best practices for code review automation
- Techniques for extracting meaningful insights from code
- How to handle different types of code analysis tasks

## Customizing the Example

You can modify the `inputs/sample.ts` file to analyze your own code. The agent will:
1. Read and understand the code
2. Generate a comprehensive analysis
3. Provide actionable recommendations

## Expected Output

The agent will generate a markdown report containing:
- Code structure overview
- Key components and their relationships
- Potential issues and improvements
- Documentation suggestions
- Refactoring recommendations

## Next Steps

After completing this example, you can:
1. Try analyzing different types of code
2. Customize the analysis parameters
3. Move on to the refactoring example (02) 