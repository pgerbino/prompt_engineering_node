# Test Generation Example

This example demonstrates how to use GitHub Copilot to generate comprehensive test suites for your code. The example includes a sample implementation and shows how to generate unit tests, integration tests, and test documentation.

## Example Code

The example includes a simple calculator implementation in `calculator.ts` with basic arithmetic operations:
- Addition
- Subtraction
- Multiplication
- Division
- Error handling for division by zero

## How to Use with GitHub Copilot

1. Open `calculator.ts` in VS Code with GitHub Copilot enabled
2. Create a new test file (e.g., `calculator.test.ts`)
3. Use the following prompt structure with Copilot:

```markdown
# Test Suite Generation

Please generate a comprehensive test suite for the calculator implementation in the workspace. Include:

1. Unit Tests
   - Test cases for each operation
   - Edge cases and error conditions
   - Input validation
   - Expected outputs

2. Integration Tests
   - Operation combinations
   - State management
   - Error propagation
   - Performance considerations

3. Test Documentation
   - Test descriptions
   - Setup requirements
   - Test data
   - Expected results
```

4. Let Copilot generate the test suite
5. Review and refine the generated tests

## What You'll Learn

- How to structure prompts for test generation
- Techniques for writing comprehensive test suites
- Methods for testing edge cases
- Best practices for test documentation
- How to generate different types of tests

## Next Steps

After completing this example, you can:
1. Try generating tests for different implementations
2. Customize the test generation prompt
3. Move on to the security audit example (06) 