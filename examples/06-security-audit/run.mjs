import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Agent } from '../../src/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  // Read the code files to audit
  const authCode = readFileSync(
    resolve(__dirname, 'inputs/auth.ts'),
    'utf-8'
  );
  const apiCode = readFileSync(
    resolve(__dirname, 'inputs/api.ts'),
    'utf-8'
  );
  const dbCode = readFileSync(
    resolve(__dirname, 'inputs/database.ts'),
    'utf-8'
  );

  // Initialize the agent
  const agent = new Agent({
    temperature: 0.3,
    maxTokens: 4000,
  });

  // Create the system prompt
  const systemPrompt = `You are an expert security auditor. Your task is to:
1. Analyze the provided code for security vulnerabilities
2. Identify OWASP Top 10 risks
3. Assess severity of each vulnerability
4. Suggest remediation steps
5. Follow security best practices
6. Consider Node.js specific security concerns
7. Provide detailed explanations
8. Structure findings logically`;

  // Create the user prompt
  const userPrompt = `Please perform a security audit on the following codebase:

Authentication Service (auth.ts):
\`\`\`typescript
${authCode}
\`\`\`

API Endpoints (api.ts):
\`\`\`typescript
${apiCode}
\`\`\`

Database Service (database.ts):
\`\`\`typescript
${dbCode}
\`\`\`

Please provide a comprehensive security audit report that includes:
1. List of identified vulnerabilities
2. Severity assessment for each issue
3. Potential impact
4. Remediation steps
5. Best practice recommendations
6. Code examples for fixes
7. OWASP Top 10 mapping
8. Node.js specific security considerations

Format the report in markdown with clear sections and code examples.`;

  // Run the security audit
  console.log('Performing security audit...');
  const result = await agent.run({
    systemPrompt,
    userPrompt,
  });

  // Log the results
  console.log('\nSecurity Audit Report:');
  console.log(result.content);
  console.log('\nUsage:');
  console.log(`Prompt tokens: ${result.usage.promptTokens}`);
  console.log(`Completion tokens: ${result.usage.completionTokens}`);
  console.log(`Total tokens: ${result.usage.totalTokens}`);
}

main().catch(console.error); 