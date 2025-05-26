import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Agent } from '../../packages/core-agent/dist/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  try {
    // Read the legacy code
    const legacyCode = readFileSync(
      resolve(__dirname, 'inputs/legacy.ts'),
      'utf-8'
    );

    // Initialize the agent
    const agent = new Agent({
      temperature: 0.2, // Lower temperature for more consistent refactoring
      maxTokens: 4000
    });

    // System prompt for code refactoring
    const systemPrompt = `You are an expert code refactoring assistant. Your task is to:
1. Analyze the provided code for issues and anti-patterns
2. Suggest and implement refactoring improvements
3. Apply TypeScript best practices
4. Improve code organization and maintainability
5. Add proper error handling and validation

Provide your refactoring in a clear, structured format with:
1. A list of identified issues
2. The refactored code
3. A detailed explanation of changes
4. Before/after comparisons`;

    // User prompt with the code to refactor
    const userPrompt = `Please refactor the following TypeScript code:

\`\`\`typescript
${legacyCode}
\`\`\`

Focus on:
1. Adding proper TypeScript types
2. Implementing better error handling
3. Using modern JavaScript/TypeScript features
4. Improving code organization
5. Adding input validation
6. Making the code more maintainable

Provide the refactored code and a detailed explanation of the changes.`;

    // Run the refactoring
    console.log('🔍 Analyzing code for refactoring...\n');
    const response = await agent.run(systemPrompt, userPrompt);
    
    // Output the results
    console.log('📊 Refactoring Results:\n');
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