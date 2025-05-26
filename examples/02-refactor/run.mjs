import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  try {
    // Read the legacy code
    const legacyCode = readFileSync(
      resolve(__dirname, 'inputs/legacy.ts'),
      'utf-8'
    );

    // Create the refactoring prompt
    const refactoringPrompt = `Please refactor the following TypeScript code to improve its quality, maintainability, and adherence to best practices:

\`\`\`typescript
${legacyCode}
\`\`\`

Please provide your refactoring in the following structure:

1. Issues Identified
   - List of code smells and anti-patterns
   - Type safety concerns
   - Error handling issues
   - Performance considerations
   - Maintainability problems

2. Refactoring Plan
   - High-level approach
   - Key improvements
   - Design patterns to apply
   - Type safety enhancements
   - Error handling strategy

3. Refactored Code
   - Complete refactored implementation
   - TypeScript interfaces and types
   - Error handling improvements
   - Input validation
   - Documentation

4. Explanation of Changes
   - Detailed explanation of each change
   - Benefits of the improvements
   - Trade-offs considered
   - Alternative approaches

5. Testing Recommendations
   - Unit test suggestions
   - Edge cases to consider
   - Test coverage recommendations

Format your response in markdown with clear sections and code examples. Include both the original and refactored code for comparison.`;

    // Output the prompt for Copilot
    console.log('🔍 Refactoring Prompt:\n');
    console.log(refactoringPrompt);
    console.log('\n📝 Instructions:');
    console.log('1. Copy the prompt above');
    console.log('2. Open the code in VS Code with GitHub Copilot');
    console.log('3. Paste the prompt and let Copilot generate the refactoring');
    console.log('4. Review and refine the generated refactoring as needed');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main().catch(console.error); 