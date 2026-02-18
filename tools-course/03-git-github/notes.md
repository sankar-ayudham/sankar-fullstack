---

# 4️⃣ `notes.md`

### Purpose
This is the **summary of the entire Git & GitHub module**.

```md
# Git and GitHub Module Notes

## Repository Structure

The repository is structured as a single Git repository with multiple modules:

fullstack/
  tools-course/
    03-git-github/

Git is initialized at the repository root to avoid nested repositories.

## Git Configuration

- Git username and email were configured globally
- SSH keys were generated using ed25519
- GitHub SSH authentication was verified using `ssh -T`

## Core Git Concepts Learned

- Working directory: files on disk
- Staging area: selected changes for commit
- Commit: permanent snapshot of the project
- Branch: movable pointer to commits
- Tag: fixed pointer to a specific commit
- Remote: connection to GitHub

## .gitignore Usage

The `.gitignore` file is used to prevent tracking:
- node_modules
- environment variables
- log files
- build artifacts

This keeps the repository clean and secure.

## Binary Files Policy

Binary files such as images, zip archives, compiled binaries, and data dumps
should not be committed because:
- Git cannot diff them meaningfully
- They increase repository size
- They slow down cloning and history operations

## Release Created

A release `v0.1.0` was created to mark completion of the Git & GitHub foundation.

