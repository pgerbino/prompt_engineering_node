import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Agent } from '../../src/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  // Read the code files to analyze
  const apiCode = readFileSync(
    resolve(__dirname, 'inputs/api.ts'),
    'utf-8'
  );
  const dbCode = readFileSync(
    resolve(__dirname, 'inputs/database.ts'),
    'utf-8'
  );
  const cacheCode = readFileSync(
    resolve(__dirname, 'inputs/cache.ts'),
    'utf-8'
  );

  // Initialize the agent
  const agent = new Agent({
    temperature: 0.3,
    maxTokens: 4000,
  });

  // Create the system prompt
  const systemPrompt = `You are an expert performance analyst. Your task is to:
1. Analyze the provided code for performance issues
2. Identify bottlenecks and inefficiencies
3. Suggest optimizations
4. Consider memory usage
5. Analyze database operations
6. Evaluate caching strategies
7. Provide detailed explanations
8. Structure findings logically`;

  // Create the user prompt
  const userPrompt = `Please perform a performance analysis on the following codebase:

API Endpoints (api.ts):
\`\`\`typescript
${apiCode}
\`\`\`

Database Service (database.ts):
\`\`\`typescript
${dbCode}
\`\`\`

Cache Service (cache.ts):
\`\`\`typescript
${cacheCode}
\`\`\`

Please provide a comprehensive performance analysis report that includes:
1. List of identified performance issues
2. Bottleneck analysis
3. Memory usage concerns
4. Database optimization suggestions
5. Caching strategy improvements
6. Code optimization examples
7. API response time improvements
8. Node.js specific performance considerations

Format the report in markdown with clear sections and code examples.`;

  // Run the performance analysis
  console.log('Performing performance analysis...');
  const result = await agent.run({
    systemPrompt,
    userPrompt,
  });

  // Log the results
  console.log('\nPerformance Analysis Report:');
  console.log(result.content);
  console.log('\nUsage:');
  console.log(`Prompt tokens: ${result.usage.promptTokens}`);
  console.log(`Completion tokens: ${result.usage.completionTokens}`);
  console.log(`Total tokens: ${result.usage.totalTokens}`);
}

main().catch(console.error); 