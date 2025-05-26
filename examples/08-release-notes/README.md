# Release Notes Example

This example demonstrates how to use GitHub Copilot to generate comprehensive release notes from your Git commit history. The example includes a sample commit history that you can use to practice generating release notes with Copilot.

## Example Data

The `commits.json` file contains a sample Git commit history with various types of changes. The commits include:
- Feature additions
- Bug fixes
- Performance improvements
- Security updates
- Documentation changes

## How to Use with GitHub Copilot

1. Open `commits.json` in VS Code with GitHub Copilot enabled
2. Create a new markdown file for your release notes
3. Use the following prompt structure with Copilot:

```markdown
# Release Notes Generation

Please generate comprehensive release notes from the following Git commit history. Focus on:

1. Change Categorization
   - New features
   - Bug fixes
   - Breaking changes
   - Performance improvements
   - Security updates

2. Release Summary
   - Version number
   - Release date
   - Major highlights
   - Key improvements

3. Detailed Changes
   - Feature descriptions
   - Bug fix details
   - Breaking change impacts
   - Migration notes

4. Contributors
   - Author credits
   - Reviewers
   - Special thanks

Here's the commit history:

[Paste the contents of commits.json here]
```

4. Let Copilot generate the release notes
5. Review and refine the generated notes

## What You'll Learn

- How to structure prompts for release notes
- Best practices for change categorization
- Techniques for writing clear release notes
- Methods for generating migration guides
- How to create comprehensive release documentation

## Next Steps

After completing this example, you can:
1. Try generating notes for different commit histories
2. Customize the release notes prompt
3. Explore other examples in the repository 