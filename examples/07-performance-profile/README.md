# Performance Profiling Example

This example demonstrates how to use GitHub Copilot to analyze and optimize code performance. The example includes a sample implementation with performance issues that you can use to practice performance profiling with Copilot.

## Example Code

The `code.ts` file contains a sample e-commerce system implementation with various performance bottlenecks. The code includes:
- Product search functionality
- Order processing
- Data aggregation
- Caching mechanisms
- Database operations

## How to Use with GitHub Copilot

1. Open `code.ts` in VS Code with GitHub Copilot enabled
2. Create a new markdown file for your performance analysis
3. Use the following prompt structure with Copilot:

```markdown
# Performance Analysis

Please analyze the performance of the following TypeScript code and provide optimization recommendations. Focus on:

1. Algorithm Efficiency
   - Time complexity
   - Space complexity
   - Resource usage
   - Scalability

2. Data Operations
   - Database queries
   - Data structures
   - Memory usage
   - I/O operations

3. Caching Strategy
   - Cache implementation
   - Cache invalidation
   - Memory management
   - Performance trade-offs

4. Optimization Opportunities
   - Bottleneck identification
   - Code improvements
   - Architecture changes
   - Best practices

Here's the code to analyze:

[Paste the contents of code.ts here]
```

4. Let Copilot generate the performance analysis
5. Review and refine the generated analysis

## What You'll Learn

- How to structure prompts for performance analysis
- Best practices for performance optimization
- Techniques for identifying bottlenecks
- Methods for generating optimization recommendations
- How to create comprehensive performance reports

## Next Steps

After completing this example, you can:
1. Try analyzing different parts of the codebase
2. Customize the performance analysis prompt
3. Move on to the release notes example (08) 