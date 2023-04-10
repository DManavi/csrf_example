# CSRF example

## Requirements

- NodeJS > 14
- Linux/Mac/Windows OS

## Installation

Please run the commands below to install required tools.

```sh

npm i

# start the application
npm start
```

## Scenario

Open up a browser tab and navigate to http://localhost:3000 which is the vulnerable application.

> You can login using any account as long as the username and password are identical.

Now open another tab and navigate to http://localhost:3001 which is the attacker application. In most cases, a link to the malicious application is sent via text/email or other communication channels.

By clicking on any 'View' button on the page, a transfer form is submitted to the vulnerable app using your session (identity) resulting in transferring money to the attacker's account.

Clicking on any 'Edit' button submits a change password form to the vulnerable app using your session (identity) resulting in changing your account's password.
