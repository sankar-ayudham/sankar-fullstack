# Server Process Investigation

## Objective
To understand how servers run as processes, how ports are used, and how to identify and stop running services.

## Steps Performed

1. Started a local HTTP server using:
   python3 -m http.server 5000

2. Verified the server was running by visiting:
   http://localhost:5000

3. Identified the running process using:
   ps aux | grep http.server

   - Observed the process ID (PID)
   - Confirmed the command and owning user

4. Stopped the server using:
   kill <pid>

5. Verified the port was free by refreshing the browser.

6. Restarted the server on a different port:
   python3 -m http.server 7000

7. Confirmed the server worked on the new port:
   http://localhost:7000

## Learnings

- A server runs as a process identified by a PID.
- Only one process can bind to a port at a time.
- Port conflicts occur when another process already owns the port.
- Processes can be safely stopped using kill.
- Understanding processes and ports is essential for debugging real applications.
