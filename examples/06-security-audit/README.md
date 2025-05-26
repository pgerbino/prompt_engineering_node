# Security Audit Example

This example demonstrates how to use GitHub Copilot to perform security audits on your code. You'll learn how to:
- Write effective prompts for security analysis
- Get comprehensive security assessments from Copilot
- Identify vulnerabilities and security risks
- Generate security recommendations
- Follow security best practices

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
npm run example 06
```

This will:
1. Load the code to audit
2. Generate a structured prompt for Copilot
3. Provide instructions for using the prompt with Copilot

## Example Structure

```
06-security-audit/
├── inputs/           # Input files
│   └── code.ts      # Code to audit
└── run.mjs         # Example runner
```

## How to Use

1. Run the example to get the security audit prompt
2. Open a new markdown file in VS Code with GitHub Copilot enabled
3. Copy the generated prompt
4. Paste it into the file
5. Let Copilot generate the security audit
6. Review and refine the audit report

## What You'll Learn

- How to structure prompts for security audits
- Best practices for security analysis
- Techniques for identifying vulnerabilities
- Methods for generating security recommendations
- How to create comprehensive security reports

## Customizing the Example

You can modify the input file to audit your own code:
1. Update `code.ts` with your implementation
2. Run the example to get a new security audit
3. Review and adapt the generated recommendations

## Expected Output

Copilot will generate:
1. Vulnerability assessment
2. Security risk analysis
3. Best practice recommendations
4. Remediation steps
5. Security improvement plan

## Next Steps

After completing this example, you can:
1. Try auditing different types of code
2. Customize the security audit prompt
3. Move on to the performance profiling example (07) 