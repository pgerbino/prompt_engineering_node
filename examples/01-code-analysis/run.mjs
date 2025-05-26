import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Agent } from '../../packages/core-agent/dist/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  try {
    // Read the sample code
    const sampleCode = readFileSync(
      resolve(__dirname, 'inputs/sample.ts'),
      'utf-8'
    );

    // Initialize the agent
    const agent = new Agent({
      temperature: 0.3, // Lower temperature for more focused analysis
      maxTokens: 4000
    });

    // System prompt for code analysis
    const systemPrompt = `You are an expert code analyst. Your task is to:
1. Analyze the provided code
2. Identify its structure and architecture
3. Find potential issues and improvements
4. Suggest documentation improvements
5. Recommend refactoring opportunities

Provide your analysis in a clear, structured markdown format.`;

    // User prompt with the code to analyze
    const userPrompt = `Please analyze the following TypeScript code:

\`\`\`typescript
${sampleCode}
\`\`\`

Provide a comprehensive analysis following the structure:
1. Overview
2. Architecture
3. Key Components
4. Issues & Improvements
5. Documentation Suggestions
6. Refactoring Recommendations`;

    // Run the analysis
    console.log('🔍 Analyzing code...\n');
    const response = await agent.run(systemPrompt, userPrompt);
    
    // Output the results
    console.log('📊 Analysis Results:\n');
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