## Get the Code

Project Template is available at `https://emersonautomationsolutions.visualstudio.com/AS-PMO-GoldStandard-SIDT/_git/AS-PMO-ReactJS-Template`

To create a project for your application follow these steps:

- Run 'git clone https://EmersonAutomationSolutions@dev.azure.com/EmersonAutomationSolutions/AS-PMO-GoldStandard-SIDT/\_git/AS-PMO-ReactJS-Template <<project name>>'
  Replace Project Name with your application/project name.

Versions requeried:
Node:
NPM:

- Above steps will clone the ReactJS template for your application.
- To run the application, install the dependencies using 'npm install'
- Start the application with 'npm start'

Navigate to http://localhost:3000 in your browser.

If you see a home page that prompts you to login, then things are working! Clicking the **Log in** button will redirect you to the Okta hosted sign-in page.
In order to enable OKTA, Configure your applicaton in OKTA and get the 'Client ID' and 'Issuer' URL. Create a .okta.env file with below 2 variables:

- ISSUER
- CLIENT_ID

You can sign in with username and password from your Okta Directory.

# Install emerson-dynamic components

To install the dynamic components dependecy into the app, please follow the below steps:

- Open the URL (https://dev.azure.com/EmersonAutomationSolutions/AS-PMO-Custom-Development-Services/_artifacts/feed/EmersonDynamicUIComponents)

- Select the package (@emerson/dynamic-ui)
- Create a .npmrc file in your local project folder.
- Run 'npm install -g vsts-npm-auth'.
- Run 'vsts-npm-auth -config .npmrc'.
- To install dynamic-ui components package, RUN 'npm install @emerson/dynamic-ui'.

The user should be able to run the application locally (without any errors) with the command 'npm start'.
(The okta login is applicable here).
