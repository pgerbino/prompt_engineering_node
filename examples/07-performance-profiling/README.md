# Performance Profiling Example

This example demonstrates how to use AI agents to analyze and optimize performance in your Node.js applications. The agent will help you:
- Identify performance bottlenecks
- Analyze memory usage
- Optimize database queries
- Improve API response times
- Generate performance reports

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
pnpm example 07
```

## Example Structure

```
07-performance-profiling/
├── inputs/           # Code to analyze
│   ├── api.ts       # Express API endpoints
│   ├── database.ts  # Database operations
│   └── cache.ts     # Caching implementation
├── expected/        # Expected profiling output
│   └── profile-report.md
└── run.mjs         # Example runner
```

## What You'll Learn

- How to structure prompts for performance analysis
- Common performance bottlenecks in Node.js applications
- Best practices for performance optimization
- How to generate comprehensive performance reports

## Customizing the Example

You can modify the files in the `inputs/` directory to analyze your own code. The agent will:
1. Analyze the code for performance issues
2. Identify bottlenecks
3. Suggest optimizations
4. Generate a detailed performance report

## Expected Output

The agent will generate:
1. Performance bottleneck report
2. Memory usage analysis
3. Database query optimization suggestions
4. API response time improvements
5. Code optimization examples

## Next Steps

After completing this example, you can:
1. Try profiling different types of applications
2. Customize the performance analysis parameters
3. Move on to the release notes example (08) 