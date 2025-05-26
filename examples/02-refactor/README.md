# Code Refactoring Example

This example demonstrates how to use AI agents to refactor and improve existing code. The agent will help you:
- Identify code smells and anti-patterns
- Suggest and implement refactoring improvements
- Maintain code quality and readability
- Apply best practices and design patterns

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
pnpm example 02
```

## Example Structure

```
02-refactor/
├── inputs/           # Code to refactor
│   └── legacy.ts    # Legacy code with issues
├── expected/        # Expected refactored output
│   └── refactored.ts
└── run.mjs         # Example runner
```

## What You'll Learn

- How to structure prompts for code refactoring
- Best practices for automated code improvement
- Techniques for maintaining code quality
- How to apply design patterns effectively

## Customizing the Example

You can modify the `inputs/legacy.ts` file to refactor your own code. The agent will:
1. Analyze the code for issues
2. Suggest refactoring improvements
3. Generate refactored code
4. Explain the changes made

## Expected Output

The agent will generate:
1. A refactoring plan
2. The refactored code
3. A detailed explanation of changes
4. Before/after comparisons

## Next Steps

After completing this example, you can:
1. Try refactoring different types of code
2. Customize the refactoring parameters
3. Move on to the requirements-to-code example (03) 