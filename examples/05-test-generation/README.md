# Test Generation Example

This example demonstrates how to use GitHub Copilot to generate comprehensive test suites for your code. The example includes a sample implementation that you can use to practice test generation with Copilot.

## Example Code

The `code.ts` file contains a sample e-commerce system implementation that needs testing. The code includes:
- Product management functionality
- Shopping cart operations
- Price calculations
- Inventory management
- Error handling

## How to Use with GitHub Copilot

1. Open `code.ts` in VS Code with GitHub Copilot enabled
2. Create a new test file (e.g., `code.test.ts`)
3. Use the following prompt structure with Copilot:

```markdown
# Test Generation

Please generate a comprehensive test suite for the following TypeScript code. Focus on:

1. Unit Tests
   - Test all public methods
   - Cover success and error cases
   - Verify business logic
   - Test edge cases

2. Test Organization
   - Group related tests
   - Use descriptive test names
   - Follow testing best practices
   - Include test setup and teardown

3. Test Coverage
   - Test all code paths
   - Include boundary tests
   - Test error conditions
   - Verify data transformations

4. Mocking Strategy
   - Identify dependencies to mock
   - Create mock implementations
   - Set up test fixtures
   - Handle async operations

Here's the code to test:

[Paste the contents of code.ts here]
```

4. Let Copilot generate the test suite
5. Review and refine the generated tests

## What You'll Learn

- How to structure prompts for test generation
- Best practices for writing tests
- Techniques for testing edge cases
- Methods for creating test fixtures
- How to generate comprehensive test coverage

## Next Steps

After completing this example, you can:
1. Try generating tests for different parts of the codebase
2. Customize the test generation prompt
3. Move on to the security audit example (06) 