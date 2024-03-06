# Local Environment Setup

## Prerequisites

- Windows 10 or Windows 11
- Emerson Azure DevOps user

## Instructions

### Install Applications

- Install Terminal.

  ``` shell
  winget install -e --id Microsoft.WindowsTerminal
  ```

- Install Postman

  ``` shell
  winget install -e --id Postman.Postman
  ```

### Install Window Subsystem for Linux (WSL)

> ✋ Skip this section when you are using just the Windows Terminal.

1. Install Windows Subsystem for Linux

   ``` shell
   winget install "Windows Subsystem for Linux"
   ```

2. Open **Terminal** and run:

   ``` shell
   $ wsl --install
   ```

3. Wait 5 minutes. Restart computer.

4. Open **Ubuntu Terminal** and install **NVM**.

   ``` shell
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```

### Configure Git

``` shell
# (e.g. Josh Gossett)
git config --global user.name "{FULL_NAME}"

# (e.g. josh.gossett@emerson.com)
git config --global user.email "{EMAIL_ADDRESS}"
```

### Setup Source Control

1. Clone repository.

   ``` shell
   git clone https://EmersonAutomationSolutions@dev.azure.com/EmersonAutomationSolutions/AS-MSOL-Digital%20Experience%20Tools/_git/EMR-ENT-MSOL-PA-PLATFORM-CLIENT
   ```

2. Change branch to `develop` branch.

   ``` shell
   git checkout develop
   ```

3. Install **Node**.

   ```shell
   nvm install 16.20.2
   ```

4. Authenticate into Azure DevOps NPM Registry.

   ``` shell
   npm install -g vsts-npm-auth
   vsts-npm-auth -config .npmrc
   ```

5. Install project dependencies.

   ``` shell
   npm install
   ```

### Start Application 

1. Run application.

   ``` shell
   npm run start
   ```

2. Verify application is run on http://localhost:3000.

### Troubleshooting

TBD
