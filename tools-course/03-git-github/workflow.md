# Git Workflow

This file documents my standard Git workflow followed throughout the bootcamp.

## Daily Workflow

1. Check the current repository state using `git status`
2. Make small, focused changes to files
3. Stage changes using `git add <file>` or `git add .`
4. Commit changes with a clear, descriptive message
5. Push commits to the remote repository using `git push`

## Branching Workflow

- I do not work directly on the `main` branch
- For changes, I create a feature branch:
  `feature/<short-description>`
- After completing work, I merge the feature branch back into `main`

## Git History and Diffs

- `git log` is used to view commit history
- `git log --oneline` is used for a compact view
- `git diff` is used to review changes before committing
- `git show <commit>` is used to inspect a specific commit

This workflow helps prevent mistakes, keeps history clean, and matches professional team practices.

