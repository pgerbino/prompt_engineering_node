# Security Audit Example

This example demonstrates how to use AI agents to perform security audits on your codebase. The agent will help you:
- Identify common security vulnerabilities
- Analyze code for OWASP Top 10 risks
- Suggest security improvements
- Generate security audit reports

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
pnpm example 06
```

## Example Structure

```
06-security-audit/
├── inputs/           # Code to audit
│   ├── auth.ts      # Authentication implementation
│   ├── api.ts       # API endpoints
│   └── database.ts  # Database operations
├── expected/        # Expected audit output
│   └── audit-report.md
└── run.mjs         # Example runner
```

## What You'll Learn

- How to structure prompts for security analysis
- Common security vulnerabilities in Node.js applications
- Best practices for secure coding
- How to generate comprehensive security reports

## Customizing the Example

You can modify the files in the `inputs/` directory to audit your own code. The agent will:
1. Analyze the code for security issues
2. Identify potential vulnerabilities
3. Suggest security improvements
4. Generate a detailed audit report

## Expected Output

The agent will generate:
1. Security vulnerability report
2. Severity rankings
3. Remediation suggestions
4. Best practice recommendations
5. Code improvement examples

## Next Steps

After completing this example, you can:
1. Try auditing different types of applications
2. Customize the security audit parameters
3. Move on to the performance profiling example (07) 