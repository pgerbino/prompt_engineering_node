# Test Generation Example

This example demonstrates how to use AI agents to automatically generate comprehensive test suites for your code. The agent will help you:
- Generate unit tests with proper assertions
- Create test cases for edge cases
- Set up test fixtures and mocks
- Follow testing best practices

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
pnpm example 05
```

## Example Structure

```
05-test-generation/
├── inputs/           # Code to test
│   └── calculator.ts # Sample calculator implementation
├── expected/        # Expected test output
│   └── calculator.test.ts
└── run.mjs         # Example runner
```

## What You'll Learn

- How to structure prompts for test generation
- Best practices for test case design
- Techniques for testing edge cases
- How to set up test fixtures and mocks

## Customizing the Example

You can modify the `inputs/calculator.ts` file to generate tests for your own code. The agent will:
1. Analyze the code to test
2. Identify test scenarios
3. Generate test cases
4. Add necessary mocks and fixtures

## Expected Output

The agent will generate:
1. Test suite structure
2. Unit test cases
3. Edge case tests
4. Mock implementations
5. Test fixtures

## Next Steps

After completing this example, you can:
1. Try generating tests for different types of code
2. Customize the test generation parameters
3. Move on to the security audit example (06) 