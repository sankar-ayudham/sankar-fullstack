# Computing Basics — Notes

This document summarizes what I learned in the Computing Basics module, focusing on how programs actually run on a system and how to debug common issues.

---

## Users and Environment

- A user represents the identity under which commands and programs run.
- The `whoami` command shows the current user.
- The `$HOME` environment variable points to the user’s home directory.
- Permissions and access control depend on which user is running a process.

---

## Processes

- A process is a running instance of a program.
- Each process has a unique Process ID (PID).
- The `ps` command shows running processes.
- `ps aux` lists all processes across all users.
- Processes can run in the background or without an attached terminal.

---

## Permissions

- File permissions determine who can read, write, or execute a file.
- Permissions are represented as `rwx` for owner, group, and others.
- The `ls -l` command displays permission details.
- A script must have execute (`x`) permission to be run.
- Permissions can be modified using `chmod`.

Example:
- `chmod +x file.sh` makes a script executable.

---

## Servers and Ports

- A server is a process that listens on a specific port.
- A port is a numbered endpoint used for network communication.
- Only one process can bind to a port at a time.
- Port conflicts occur when another process is already using the port.

---

## Identifying and Stopping Processes

- Running servers can be identified using `ps` combined with `grep`.
- The PID is used to manage or stop a process.
- The `kill` command sends a signal to terminate a process.
- If a process stops normally, attempting to kill it again results in “No such process”.

---

## Sudo and Privileges

- `sudo` allows commands to run with root privileges.
- Using `sudo` unnecessarily can damage the system or cause permission issues.
- Commands should be run as a normal user unless elevated privileges are clearly required.

---

## Key Takeaways

- Understanding users, processes, permissions, and ports is essential for debugging.
- Most real-world issues involve system state, not code bugs.
- Knowing how to inspect and control processes prevents panic during failures.
- These concepts directly apply to Node.js servers, databases, Docker, and cloud VMs.
