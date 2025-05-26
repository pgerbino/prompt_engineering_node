# Impact Assessment Example

This example demonstrates how to use GitHub Copilot to assess the impact of proposed changes on your codebase. The example includes a sample codebase and proposed changes that you can use to practice impact assessment with Copilot.

## Example Files

The example includes two files:
- `current.ts`: A sample e-commerce system implementation
- `changes.md`: Proposed changes to the system, including:
  - New discount system
  - Enhanced product management
  - Improved inventory tracking
  - Cart enhancements
  - User experience improvements

## How to Use with GitHub Copilot

1. Open both `current.ts` and `changes.md` in VS Code with GitHub Copilot enabled
2. Create a new markdown file for your impact assessment
3. Use the following prompt structure with Copilot:

```markdown
# Impact Assessment

Please analyze the impact of the proposed changes in the workspace on the current codebase. Focus on:

1. Technical Impact
   - Affected components and modules
   - Required code changes
   - New dependencies or services
   - API modifications

2. Risk Assessment
   - Potential breaking changes
   - Performance implications
   - Security considerations
   - Data migration needs

3. Migration Strategy
   - Implementation approach
   - Phased rollout plan
   - Testing requirements
   - Rollback procedures

4. Cost Analysis
   - Development effort
   - Testing effort
   - Deployment complexity
   - Maintenance impact
```

4. Let Copilot generate the impact assessment
5. Review and refine the generated assessment

## What You'll Learn

- How to structure prompts for impact assessment
- Techniques for analyzing code changes
- Methods for identifying risks and dependencies
- Best practices for migration planning
- How to generate comprehensive documentation

## Next Steps

After completing this example, you can:
1. Try assessing different types of changes
2. Customize the assessment prompt
3. Move on to the test generation example (05) 