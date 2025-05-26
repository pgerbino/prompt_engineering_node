import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Agent } from '../../packages/core-agent/dist/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  try {
    // Read the requirements
    const requirements = readFileSync(
      resolve(__dirname, 'inputs/requirements.md'),
      'utf-8'
    );

    // Initialize the agent
    const agent = new Agent({
      temperature: 0.3, // Balanced temperature for creative but consistent output
      maxTokens: 4000
    });

    // System prompt for requirements to code conversion
    const systemPrompt = `You are an expert software architect and developer. Your task is to:
1. Analyze the provided requirements
2. Design a TypeScript implementation
3. Generate production-ready code
4. Include proper error handling and validation
5. Follow best practices and design patterns

Provide your implementation in a clear, structured format with:
1. A high-level design document
2. TypeScript interfaces and types
3. Implementation code
4. Usage examples
5. Test cases`;

    // User prompt with the requirements
    const userPrompt = `Please implement a TypeScript solution for the following requirements:

\`\`\`markdown
${requirements}
\`\`\`

Focus on:
1. Clean, maintainable code
2. TypeScript best practices
3. Proper error handling
4. Input validation
5. Design patterns
6. Documentation

Provide a complete implementation with examples.`;

    // Run the implementation
    console.log('🔍 Analyzing requirements...\n');
    const response = await agent.run(systemPrompt, userPrompt);
    
    // Output the results
    console.log('📊 Implementation Results:\n');
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