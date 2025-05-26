import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  try {
    // Read the sample code
    const sampleCode = readFileSync(
      resolve(__dirname, 'inputs/sample.ts'),
      'utf-8'
    );

    // Create the analysis prompt
    const analysisPrompt = `Please analyze the following TypeScript code and provide a comprehensive analysis:

\`\`\`typescript
${sampleCode}
\`\`\`

Please provide your analysis in the following structure:

1. Overview
   - Brief description of the code's purpose
   - Main components and their relationships
   - Key design patterns used

2. Architecture
   - Code organization
   - Module dependencies
   - Data flow

3. Key Components
   - Classes and interfaces
   - Functions and methods
   - Data structures

4. Issues & Improvements
   - Potential bugs or issues
   - Performance concerns
   - Security considerations
   - Code quality suggestions

5. Documentation Suggestions
   - Missing documentation
   - API documentation needs
   - Code comments recommendations

6. Refactoring Recommendations
   - Code smells
   - Anti-patterns
   - Suggested improvements

Format your response in markdown with clear sections and code examples where appropriate.`;

    // Output the prompt for Copilot
    console.log('🔍 Code Analysis Prompt:\n');
    console.log(analysisPrompt);
    console.log('\n📝 Instructions:');
    console.log('1. Copy the prompt above');
    console.log('2. Open the code in VS Code with GitHub Copilot');
    console.log('3. Paste the prompt and let Copilot generate the analysis');
    console.log('4. Review and refine the generated analysis as needed');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main().catch(console.error); 