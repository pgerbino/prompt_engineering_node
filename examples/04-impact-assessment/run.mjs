import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Agent } from '../../packages/core-agent/dist/index.js';

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

    // Initialize the agent
    const agent = new Agent({
      temperature: 0.3, // Balanced temperature for analysis
      maxTokens: 4000
    });

    // System prompt for impact assessment
    const systemPrompt = `You are an expert software architect and change management specialist. Your task is to:
1. Analyze the current codebase
2. Evaluate proposed changes
3. Identify affected components
4. Assess risks and dependencies
5. Suggest mitigation strategies

Provide your assessment in a clear, structured format with:
1. Impact analysis
2. Affected components
3. Risk assessment
4. Migration strategy
5. Implementation recommendations`;

    // User prompt with the code and changes
    const userPrompt = `Please assess the impact of the following proposed changes on the current codebase:

Current Codebase:
\`\`\`typescript
${currentCode}
\`\`\`

Proposed Changes:
\`\`\`markdown
${proposedChanges}
\`\`\`

Focus on:
1. Technical impact
2. Data model changes
3. Service layer modifications
4. API updates
5. Migration considerations
6. Risk assessment

Provide a comprehensive impact assessment report.`;

    // Run the assessment
    console.log('🔍 Analyzing impact of proposed changes...\n');
    const response = await agent.run(systemPrompt, userPrompt);
    
    // Output the results
    console.log('📊 Impact Assessment Results:\n');
    console.log(response.content);
    
    // Output usage statistics
    if (response.usage) {
      console.log('\n📈 Usage Statistics:');
      console.log(`- Prompt tokens: ${response.usage.prompt_tokens}`);
      console.log(`- Completion tokens: ${response.usage.completion_tokens}`);
      console.log(`- Total tokens: ${response.usage.total_tokens}`);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main(); 