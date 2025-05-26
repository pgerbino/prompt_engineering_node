# Security Audit Example

This example demonstrates how to use GitHub Copilot to perform security audits on your code. The example includes a sample implementation with intentional security issues that you can use to practice security auditing with Copilot.

## Example Code

The `code.ts` file contains a sample e-commerce system implementation with various security vulnerabilities. The code includes:
- User authentication
- Payment processing
- Data validation
- API endpoints
- Database operations

## How to Use with GitHub Copilot

1. Open `code.ts` in VS Code with GitHub Copilot enabled
2. Create a new markdown file for your security audit
3. Use the following prompt structure with Copilot:

```markdown
# Security Audit

Please perform a comprehensive security audit of the following TypeScript code. Focus on:

1. Authentication & Authorization
   - Session management
   - Access control
   - Password handling
   - Token security

2. Data Security
   - Input validation
   - Data sanitization
   - Encryption usage
   - Secure storage

3. API Security
   - Endpoint protection
   - Rate limiting
   - CORS configuration
   - Request validation

4. Common Vulnerabilities
   - SQL injection
   - XSS attacks
   - CSRF protection
   - Dependency risks

Here's the code to audit:

[Paste the contents of code.ts here]
```

4. Let Copilot generate the security audit
5. Review and refine the generated audit

## What You'll Learn

- How to structure prompts for security audits
- Best practices for security analysis
- Techniques for identifying vulnerabilities
- Methods for generating security recommendations
- How to create comprehensive security reports

## Next Steps

After completing this example, you can:
1. Try auditing different parts of the codebase
2. Customize the security audit prompt
3. Move on to the performance profiling example (07) 