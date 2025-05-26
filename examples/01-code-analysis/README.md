# Code Analysis Example

This example demonstrates how to use GitHub Copilot to analyze and understand complex codebases. You'll learn how to:
- Write effective prompts for code analysis
- Get comprehensive code reviews from Copilot
- Identify potential issues and improvements
- Generate documentation suggestions
- Get refactoring recommendations

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
pnpm example 01
```

This will:
1. Load the sample code
2. Generate a structured prompt for Copilot
3. Provide instructions for using the prompt with Copilot

## Example Structure

```
01-code-analysis/
├── inputs/           # Sample code to analyze
│   └── sample.ts    # Example code for analysis
└── run.mjs         # Example runner
```

## How to Use

1. Run the example to get the analysis prompt
2. Open the sample code in VS Code with GitHub Copilot enabled
3. Copy the generated prompt
4. Paste it into a new file or comment
5. Let Copilot generate the analysis
6. Review and refine the generated analysis

## What You'll Learn

- How to structure prompts for effective code analysis
- Best practices for code review automation
- Techniques for extracting meaningful insights from code
- How to handle different types of code analysis tasks

## Customizing the Example

You can modify the `inputs/sample.ts` file to analyze your own code. The prompt will help you:
1. Get a comprehensive code review
2. Identify potential issues
3. Receive improvement suggestions
4. Get documentation recommendations

## Expected Output

Copilot will generate a markdown report containing:
- Code structure overview
- Key components and their relationships
- Potential issues and improvements
- Documentation suggestions
- Refactoring recommendations

## Next Steps

After completing this example, you can:
1. Try analyzing different types of code
2. Customize the analysis prompt
3. Move on to the refactoring example (02) 