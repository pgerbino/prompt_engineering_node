# Test Generation Example

This example demonstrates how to use GitHub Copilot to generate comprehensive test suites for your code. You'll learn how to:
- Write effective prompts for test generation
- Get complete test suites from Copilot
- Create test cases for edge cases
- Set up test fixtures and mocks
- Follow testing best practices

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
npm run example 05
```

This will:
1. Load the code to be tested
2. Generate a structured prompt for Copilot
3. Provide instructions for using the prompt with Copilot

## Example Structure

```
05-test-generation/
├── inputs/           # Input files
│   └── code.ts      # Code to test
└── run.mjs         # Example runner
```

## How to Use

1. Run the example to get the test generation prompt
2. Open a new test file in VS Code with GitHub Copilot enabled
3. Copy the generated prompt
4. Paste it into the file
5. Let Copilot generate the test suite
6. Review and refine the generated tests

## What You'll Learn

- How to structure prompts for test generation
- Best practices for writing tests
- Techniques for testing edge cases
- Methods for creating test fixtures
- How to generate comprehensive test coverage

## Customizing the Example

You can modify the input file to generate tests for your own code:
1. Update `code.ts` with your implementation
2. Run the example to get a new test suite
3. Review and adapt the generated tests

## Expected Output

Copilot will generate:
1. Test suite structure
2. Unit test cases
3. Edge case tests
4. Mock implementations
5. Test fixtures

## Next Steps

After completing this example, you can:
1. Try generating tests for different types of code
2. Customize the test generation prompt
3. Move on to the security audit example (06) 