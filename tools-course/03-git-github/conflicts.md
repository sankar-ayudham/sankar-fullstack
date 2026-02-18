# Handling Merge Conflicts

Merge conflicts occur when Git cannot automatically combine changes from different branches.

## When Conflicts Happen

- Two branches modify the same line in a file
- A file is deleted in one branch and modified in another
- Large changes are made without frequent merges

## How I Resolve Conflicts

1. Run `git status` to identify conflicted files
2. Open the conflicted file and locate conflict markers:
   <<<<<<<, =======, >>>>>>>
3. Decide which changes to keep or how to combine them
4. Remove conflict markers after resolving
5. Stage the resolved file using `git add <file>`
6. Complete the merge with `git commit`

## Best Practices to Avoid Conflicts

- Keep commits small and focused
- Pull and merge frequently
- Communicate changes when working in teams

Conflicts are normal in collaborative work and should be handled carefully, not avoided.

