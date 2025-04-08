# Node.js TypeScript GraphQL Local POC

## Project Overview
This repository is a proof of concept (POC) for setting up a GraphQL server using Node.js and TypeScript. The goal is to demonstrate how to build and run a local GraphQL API with basic functionalities.

## Features
- **GraphQL API**: Create and query data using GraphQL.
- **Node.js**: Server-side JavaScript runtime.
- **TypeScript**: Typed superset of JavaScript.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.

## Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/node-ts-graphql-local-poc.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd node-ts-graphql-local-poc
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```

## Usage
1. **Start the server**:
    ```bash
    npm start
    ```
2. **Access the GraphQL API**:
    Open your browser and navigate to `http://localhost:4000/graphql`.

## Example Queries
- **Fetch all items**:
    ```graphql
    query {
      items {
        id
        name
        description
      }
    }
    ```
- **Create a new item**:
    ```graphql
    mutation {
      createItem(input: { name: "New Item", description: "This is a new item." }) {
        id
        name
        description
      }
    }
    ```

## Contributing
Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the GNU Affero General Public License.