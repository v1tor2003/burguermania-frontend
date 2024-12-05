# BurguerMania FrontEnd

**Description**: This project was proposed as part of the FullStack track in the ResTic36 program, serving as the final project. It is a web application for managing a burger shop that includes a simulated backend API using json-server and a dynamic frontend built with Angular. The project allows users to view burger categories, browse available burgers, and place orders through a fully interactive interface.

The application includes a mock API to simulate real-world backend functionality and utilizes Angular's reactive forms for handling user input. This project showcases the integration of both frontend and backend technologies in a full-stack application, providing a complete workflow from data handling to user interaction.
## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)
- [Angular CLI](https://angular.io/cli) (if you want to interact with the Angular app)

## Installation

Follow these steps to get the project up and running:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/v1tor2003/burguermania-frontend
   cd burguermania-frontend
   ```

2. **Install dependencies**:
   The project uses `json-server` as a development dependency to simulate a backend API.
   Install all required dependencies, including `json-server`:
   ```bash
   npm install
   ```

3. **Use the mock API**:
   For easy run, you can follow the command to start the mock API using `json-server`:
   You gotta set hamburguer.service.ts and order.service.ts have the url set to use the mock API:
   ```javascript
   private readonly API_URL: string = 'http://localhost:3000/api';
   ```
   Then you can start the mock server:
   ```bash
   npm run start:mock
   ```
5. **Use the .NET API**:
   This project supports calls to a dedicated .NET backend for retrienving data. `.NET ASP.NET Core`:
   You should clone the API project and run so it can serve the data.
   Go to this repo: `https://github.com/v1tor2003/burguermania-backend`
   Clone it and follow all the necessary steps.
   Make sure the hamburguer.service.ts and order.service.ts have set the api url to use the .NET project:
   ```javascript
   private readonly API_URL: string = 'http://localhost:5038/api';
   ```
7. **Start the Angular development server**:
   In a new terminal window, start the Angular development server:
   ```bash
   ng serve
   ```

8. Open your browser and navigate to `http://localhost:4200/` to see the project in action.

## `json-server` Setup

During development, the mock API is served by `json-server`. It listens on `http://localhost:3000` and can be configured via the `db.json` file in the project root.

### Available API Endpoints

- **GET** `/categories` - Get all categories
- **GET** `/hamburgers` - Get all hamburgers
- **GET** `/hamburgers/{id}` - Get a hamburger by its `id`

Refer to `db.json` for the database structure and available mock data.

### Using `json-server` for mock API

The mock API is powered by `json-server`. You can customize the mock data by editing `db.json`.

To start the mock server independently (without Angular frontend), run:
```bash
npx json-server --watch db.json --port 3000
```

## Scripts

### `npm run start:mock`

Starts `json-server` to serve the mock API. The mock data is located in `db.json`, and the server will run on `http://localhost:3000`.

### `ng serve`

Starts the Angular development server and serves the frontend application. By default, the application will be available at `http://localhost:4200`.

### `npm run build`

Builds the Angular project for production and places the output in the `dist/` directory.

### `npm test`

Runs unit tests for the Angular project using Karma and Jasmine.

### `npm run lint`

Checks the Angular project for linting issues using TSLint.

### `npm run e2e`

Runs end-to-end tests for the Angular project using Protractor.

## Directory Structure

- `src/` – Contains the source code for the Angular frontend.
- `src/app/` – Contains components, services, and other Angular application logic.
- `db.json` – Mock data file used by `json-server` for simulating a backend API.
- `angular.json` – Angular CLI configuration file.
- `package.json` – Contains dependencies and scripts for the project.

## Troubleshooting

### Error: `json-server` not found

Ensure that `json-server` is installed correctly. If the issue persists, try running:
```bash
npm install json-server --save-dev
```

