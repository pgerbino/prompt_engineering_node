import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Agent } from '../../src/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  // Read the calculator implementation
  const calculatorCode = readFileSync(
    resolve(__dirname, 'inputs/calculator.ts'),
    'utf-8'
  );

  // Initialize the agent
  const agent = new Agent({
    temperature: 0.3,
    maxTokens: 4000,
  });

  // Create the system prompt
  const systemPrompt = `You are an expert software tester. Your task is to:
1. Analyze the provided code
2. Generate comprehensive test cases
3. Include unit tests for all methods
4. Test edge cases and error conditions
5. Follow testing best practices
6. Use Jest testing framework
7. Include test descriptions and assertions
8. Structure tests logically`;

  // Create the user prompt
  const userPrompt = `Please generate a comprehensive test suite for the following calculator implementation:

\`\`\`typescript
${calculatorCode}
\`\`\`

The test suite should:
1. Test all public methods
2. Include edge cases and error conditions
3. Test memory operations
4. Verify error handling
5. Include descriptive test names
6. Follow Jest best practices
7. Use appropriate assertions
8. Include test setup and teardown if needed

Please provide the complete test suite in TypeScript using Jest.`;

  // Run the test generation
  console.log('Generating test suite...');
  const result = await agent.run({
    systemPrompt,
    userPrompt,
  });

  // Log the results
  console.log('\nGenerated Test Suite:');
  console.log(result.content);
  console.log('\nUsage:');
  console.log(`Prompt tokens: ${result.usage.promptTokens}`);
  console.log(`Completion tokens: ${result.usage.completionTokens}`);
  console.log(`Total tokens: ${result.usage.totalTokens}`);
}

main().catch(console.error); 