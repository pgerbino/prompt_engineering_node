# Code Refactoring Example

This example demonstrates how to use GitHub Copilot to refactor and improve existing code. You'll learn how to:
- Write effective prompts for code refactoring
- Get comprehensive refactoring suggestions from Copilot
- Apply TypeScript best practices
- Improve code organization and maintainability
- Add proper error handling and validation

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
pnpm example 02
```

This will:
1. Load the legacy code
2. Generate a structured prompt for Copilot
3. Provide instructions for using the prompt with Copilot

## Example Structure

```
02-refactor/
├── inputs/           # Code to refactor
│   └── legacy.ts    # Legacy code with issues
└── run.mjs         # Example runner
```

## How to Use

1. Run the example to get the refactoring prompt
2. Open the legacy code in VS Code with GitHub Copilot enabled
3. Copy the generated prompt
4. Paste it into a new file or comment
5. Let Copilot generate the refactoring suggestions
6. Review and refine the generated refactoring

## What You'll Learn

- How to structure prompts for code refactoring
- Best practices for automated code improvement
- Techniques for maintaining code quality
- How to apply design patterns effectively

## Customizing the Example

You can modify the `inputs/legacy.ts` file to refactor your own code. The prompt will help you:
1. Identify code smells and anti-patterns
2. Get refactoring suggestions
3. Apply TypeScript best practices
4. Improve error handling and validation

## Expected Output

Copilot will generate:
1. A list of identified issues
2. A refactoring plan
3. The refactored code
4. A detailed explanation of changes
5. Testing recommendations

## Next Steps

After completing this example, you can:
1. Try refactoring different types of code
2. Customize the refactoring prompt
3. Move on to the requirements-to-code example (03) 