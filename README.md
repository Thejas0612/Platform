# Msol Product Advisor - Frontend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=for-the-badge)
![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)

This system helps customers or clients make informed decisions about products on https://emerson.com.

## Setup
See [Setup Local Environment](docs\setup-local-environment.md) 

## Usage  

| Command            | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `npm run start`    | Runs the frontend on http://localhost:3000.                  |
| `npm run build`    | Builds the production frontend application into `~/dist` folder. |
| `npm run test`     | Runs the unit tests.                                         |
| `npm run test:ci`  | Runs the unit test and creates a JUnit report at `~/junit.xml`. |
| `npm run lint`     | Runs the ESLint static code analyzer and generates a finding report on the console. |
| `npm run lint:fix` | Runs the ESLint static code analyzer and automatically fixes findings. |
| `npm run preview`  | Run the frontend a production build on http://localhost:3000/ |

## Environment Variables

| Name                             | Description                                                                                 |
|----------------------------------|---------------------------------------------------------------------------------------------|
| `VITE_HIGHLIGHT_MSOL_COMPONENTS` | `false` (default) - do nothing. <br />`true` - shows all MSOL component with yellow border. |
| `VITE_API_URL` | The backend API URL. Defaults to backend development environment. (e.g. `https://webapp-z-autosol-msolst-ui-n-001.azurewebsites.net`) |

## Folder Structure

```text
.
├── dist                    # The compiled files (alternatively `build`)
├── docs                    # The documentation files (alternatively `doc`)
├── src                     # The source files (alternatively `lib` or `app`)
├── src/**/__test__         # The unit test files.
├── unit.xml                # The unit test results.
├── azure-pipeline-ui.yml   # The development environment CI and CD pipeline .
└── README.md
```