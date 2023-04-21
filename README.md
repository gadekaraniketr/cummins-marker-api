# Cummins Marker Web API
Source code of we api server based on node.js

## Setup

Download and install VS Code & NodeJs & OpenSSL
- [VS Code](https://code.visualstudio.com/download)
- [NodeJs](https://nodejs.org/en/download)
- [OpenSSL x64](https://slproweb.com/products/Win32OpenSSL.html)

Open current folder with VS code & Verify npm version in terminal
```bash
npm -v
```

## Run

Open this folder with vs code

```bash
  git clone https://github.com/gadekaraniketr/cummins-marker-api.git
```

Go to the project directory

```bash
  cd cummins-marker-api
```

Install dependencies

```bash
  npm install express body-parser mysql2
```

Start the server

```bash
  node server.js
```

# Folder Structure

cummins-marker-api/
|-- \certs
|   |-- server-cert.pem
|   |-- server-key.pem
|-- server.js
|-- package.jason


# Deployment

Clone repository in
```bash
  C:\ProgramData\
```
1. Open the "Task Scheduler" application by typing "Task Scheduler" in the Start menu search box and selecting the "Task Scheduler" app.
2. In the Task Scheduler, click "Create Task" in the Actions pane on the right.
3. In the "General" tab of the "Create Task" window, give your task a name and description.
4. Select the "Triggers" tab and click "New" to create a new trigger. Choose "At Startup" as the trigger type.
5. Select the "Actions" tab and click "New" to create a new action. Choose "Start a program" as the action type, and enter the path to your batch file (cd C:\ProgramData\cummins-marker-api\start-cummins-marker-api-service.bat) in the "Program/script" field.
6. Click "OK" to save the task.
7. Your Node.js web service should now start automatically when you boot up your Windows machine.
