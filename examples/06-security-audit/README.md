# Security Audit Example

This example demonstrates how to use GitHub Copilot to perform security audits on your code. The example includes a sample web application and shows how to identify and address security vulnerabilities.

## Example Code

The example includes a simple web application in `app.ts` with common security-sensitive features:
- User authentication
- Data validation
- File uploads
- API endpoints
- Database operations

## How to Use with GitHub Copilot

1. Open `app.ts` in VS Code with GitHub Copilot enabled
2. Create a new markdown file for your security audit
3. Use the following prompt structure with Copilot:

```markdown
# Security Audit

Please perform a comprehensive security audit of the web application in the workspace. Focus on:

1. Authentication & Authorization
   - Session management
   - Password handling
   - Access control
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
   - Error handling

4. Infrastructure Security
   - Dependency versions
   - Configuration security
   - Environment variables
   - Logging practices
```

4. Let Copilot generate the security audit
5. Review and refine the generated assessment

## What You'll Learn

- How to structure prompts for security audits
- Techniques for identifying vulnerabilities
- Methods for assessing security risks
- Best practices for secure coding
- How to generate security recommendations

## Next Steps

After completing this example, you can:
1. Try auditing different types of applications
2. Customize the security audit prompt
3. Move on to the performance profiling example (07) 