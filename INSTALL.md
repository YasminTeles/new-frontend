# Install this project

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purpose.

### Prerequisites

- [Node.js](https://nodejs.org) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [nvm](https://github.com/nvm-sh/nvm) - Node Version Manager.

Make sure to use the node version configured in the project. See the node version in `.nvmrc`.
I recommend using the [nvm](https://github.com/nvm-sh/nvm) tool to manage node versions.
To configure the node version of the project, try `nvm use`.

### Installation

1. Clone this repository and access the folder project;

2. Run the following commands:

    ```bash
    make setup
    make dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running tests

```bash
make test
```

## Docker Image

This project can run inside a docker container. Run the following commands to run the container on your local machine:

1. Install [Docker](https://docs.docker.com/get-docker/) on your machine;

2. Clone this repository and access the folder project;

3. Run the following commands:

    ```bash
    make docker-build
    make docker-run
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Helper

If you do not know what the make command is doing, you can use the following command to show a short description:

```bash
make help
```

## Contact me

I'm always up for a chat. If you have a question or suggestion, You'll try to contact me through [my site](https://yasminteles.com).
