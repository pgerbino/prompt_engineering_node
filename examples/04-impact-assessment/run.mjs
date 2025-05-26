import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  try {
    // Read the current code and proposed changes
    const currentCode = readFileSync(
      resolve(__dirname, 'inputs/current.ts'),
      'utf-8'
    );
    const proposedChanges = readFileSync(
      resolve(__dirname, 'inputs/changes.md'),
      'utf-8'
    );

    // Create the impact assessment prompt
    const assessmentPrompt = `Please assess the impact of the following proposed changes on the current codebase:

Current Codebase:
\`\`\`typescript
${currentCode}
\`\`\`

Proposed Changes:
\`\`\`markdown
${proposedChanges}
\`\`\`

Please provide your impact assessment in the following structure:

1. Technical Impact
   - Affected components
   - Dependencies
   - API changes
   - Data model changes
   - Performance implications

2. Risk Assessment
   - Potential issues
   - Breaking changes
   - Security concerns
   - Performance risks
   - Integration challenges

3. Migration Strategy
   - Step-by-step migration plan
   - Required changes
   - Testing requirements
   - Rollback plan
   - Timeline considerations

4. Implementation Recommendations
   - Best practices
   - Code organization
   - Testing strategy
   - Documentation needs
   - Monitoring requirements

5. Cost Analysis
   - Development effort
   - Testing effort
   - Deployment complexity
   - Maintenance impact
   - Resource requirements

Format your response in markdown with clear sections and code examples where appropriate. Include both the current and proposed changes for comparison.`;

    // Output the prompt for Copilot
    console.log('🔍 Impact Assessment Prompt:\n');
    console.log(assessmentPrompt);
    console.log('\n📝 Instructions:');
    console.log('1. Copy the prompt above');
    console.log('2. Open a new markdown file in VS Code with GitHub Copilot');
    console.log('3. Paste the prompt and let Copilot generate the assessment');
    console.log('4. Review and refine the generated assessment as needed');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main().catch(console.error); 