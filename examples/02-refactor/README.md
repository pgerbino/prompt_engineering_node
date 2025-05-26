# Code Refactoring Example

This example demonstrates how to use GitHub Copilot to refactor and improve existing code. The example includes a sample codebase with common issues that you can use to practice refactoring with Copilot.

## Example Code

The `legacy.ts` file contains a sample e-commerce system implementation with various code smells and anti-patterns. The code includes:
- Monolithic class structure
- Poor error handling
- Inconsistent naming
- Missing type safety
- Lack of documentation

## How to Use with GitHub Copilot

1. Open `legacy.ts` in VS Code with GitHub Copilot enabled
2. Create a new TypeScript file for your refactored code
3. Use the following prompt structure with Copilot:

```markdown
# Code Refactoring

Please refactor the TypeScript code in the workspace to improve its quality and maintainability. Focus on:

1. Code Structure
   - Apply TypeScript best practices
   - Improve code organization
   - Enhance type safety
   - Implement proper error handling

2. Design Patterns
   - Identify and apply appropriate design patterns
   - Improve code reusability
   - Enhance maintainability
   - Follow SOLID principles

3. Code Quality
   - Remove code smells
   - Fix anti-patterns
   - Improve naming conventions
   - Add proper documentation

4. Error Handling
   - Implement proper error types
   - Add input validation
   - Improve error messages
   - Handle edge cases
```

4. Let Copilot generate the refactored code
5. Review and refine the generated code

## What You'll Learn

- How to structure prompts for code refactoring
- Best practices for automated code improvement
- Techniques for maintaining code quality
- How to apply design patterns effectively

## Next Steps

After completing this example, you can:
1. Try refactoring different parts of the codebase
2. Customize the refactoring prompt
3. Move on to the requirements-to-code example (03) 