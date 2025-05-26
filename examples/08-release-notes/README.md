# Release Notes Example

This example demonstrates how to use GitHub Copilot to generate comprehensive release notes from your Git commit history. You'll learn how to:
- Write effective prompts for release note generation
- Get structured release notes from Copilot
- Categorize changes and features
- Generate migration guides
- Follow release note best practices

## Prerequisites

- Node.js 18+
- npm 9+
- GitHub Copilot subscription
- VS Code with GitHub Copilot extension

## Setup

1. Install dependencies:
```bash
npm install
```

## Running the Example

```bash
npm run example 08
```

This will:
1. Load the commit history
2. Generate a structured prompt for Copilot
3. Provide instructions for using the prompt with Copilot

## Example Structure

```
08-release-notes/
├── inputs/           # Input files
│   └── commits.json  # Commit history
└── run.mjs         # Example runner
```

## How to Use

1. Run the example to get the release notes prompt
2. Open a new markdown file in VS Code with GitHub Copilot enabled
3. Copy the generated prompt
4. Paste it into the file
5. Let Copilot generate the release notes
6. Review and refine the generated notes

## What You'll Learn

- How to structure prompts for release notes
- Best practices for change categorization
- Techniques for writing clear release notes
- Methods for generating migration guides
- How to create comprehensive release documentation

## Customizing the Example

You can modify the input file to generate notes for your own commits:
1. Update `commits.json` with your commit history
2. Run the example to get new release notes
3. Review and adapt the generated notes

## Expected Output

Copilot will generate:
1. Release summary
2. Feature highlights
3. Breaking changes
4. Bug fixes
5. Migration guide

## Next Steps

After completing this example, you can:
1. Try generating notes for different types of releases
2. Customize the release notes prompt
3. Explore other examples in the repository 