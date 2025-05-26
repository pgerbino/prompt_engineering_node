# Requirements to Code Example

This example demonstrates how to use GitHub Copilot to convert requirements into working TypeScript code. You'll learn how to:
- Write effective prompts for code generation
- Get comprehensive implementations from Copilot
- Apply TypeScript best practices
- Generate proper documentation and tests
- Create maintainable and scalable code

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
pnpm example 03
```

This will:
1. Load the requirements
2. Generate a structured prompt for Copilot
3. Provide instructions for using the prompt with Copilot

## Example Structure

```
03-requirements-to-code/
├── inputs/           # Requirements to implement
│   └── requirements.md  # Feature requirements
└── run.mjs         # Example runner
```

## How to Use

1. Run the example to get the implementation prompt
2. Open a new TypeScript file in VS Code with GitHub Copilot enabled
3. Copy the generated prompt
4. Paste it into the file
5. Let Copilot generate the implementation
6. Review and refine the generated code

## What You'll Learn

- How to structure prompts for code generation
- Best practices for TypeScript implementation
- Techniques for requirements analysis
- How to generate comprehensive documentation
- Methods for creating testable code

## Customizing the Example

You can modify the `inputs/requirements.md` file to implement your own features. The prompt will help you:
1. Get a complete TypeScript implementation
2. Generate proper interfaces and types
3. Create error handling and validation
4. Produce documentation and tests

## Expected Output

Copilot will generate:
1. A high-level design document
2. TypeScript interfaces and types
3. Complete implementation code
4. Usage examples
5. Testing strategy

## Next Steps

After completing this example, you can:
1. Try implementing different types of features
2. Customize the implementation prompt
3. Move on to the impact assessment example (04) 