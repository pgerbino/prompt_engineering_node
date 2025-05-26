import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Agent } from '../../src/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  // Read the commit history
  const commitHistory = JSON.parse(
    readFileSync(
      resolve(__dirname, 'inputs/commits.json'),
      'utf-8'
    )
  );

  // Initialize the agent
  const agent = new Agent({
    temperature: 0.3,
    maxTokens: 4000,
  });

  // Create the system prompt
  const systemPrompt = `You are an expert release manager. Your task is to:
1. Analyze commit messages
2. Categorize changes
3. Determine semantic versioning
4. Generate release notes
5. Follow best practices
6. Consider breaking changes
7. Provide detailed explanations
8. Structure notes logically`;

  // Create the user prompt
  const userPrompt = `Please generate release notes for the following commit history:

Last Release: ${commitHistory.lastRelease.version} (${commitHistory.lastRelease.date})

Commits:
${commitHistory.commits.map(commit => `
Hash: ${commit.hash}
Author: ${commit.author}
Date: ${commit.date}
Message: ${commit.message}
Files: ${commit.files.join(', ')}
`).join('\n')}

Please provide a comprehensive release notes document that includes:
1. Recommended version number
2. Summary of changes
3. Breaking changes (if any)
4. New features
5. Bug fixes
6. Other improvements
7. Migration guide (if needed)
8. Contributors list

Format the release notes in markdown with clear sections and proper formatting.`;

  // Run the release notes generation
  console.log('Generating release notes...');
  const result = await agent.run({
    systemPrompt,
    userPrompt,
  });

  // Log the results
  console.log('\nGenerated Release Notes:');
  console.log(result.content);
  console.log('\nUsage:');
  console.log(`Prompt tokens: ${result.usage.promptTokens}`);
  console.log(`Completion tokens: ${result.usage.completionTokens}`);
  console.log(`Total tokens: ${result.usage.totalTokens}`);
}

main().catch(console.error); 