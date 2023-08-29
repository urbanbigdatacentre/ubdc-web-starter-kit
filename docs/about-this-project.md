---
title: About this Project
author: andrew.c.clarke@glasgow.ac.uk
category: readme
tags: [template, web, starter kit, UBDC]
---

<div>

[//]: # (<img style="padding: 10px; width: 20%; border-radius: 10px; background-color: white;" width=100% src="https://www.gla.ac.uk/media/Media_709271_smxx.jpg">)
<h2 align="left">UBDC Web App Starter Kit</h2>
</div>

![TypeScript](https://img.shields.io/badge/Typescript-5.0.4-red.svg)
![Next.JS](https://img.shields.io/badge/Next.js-13.3.1-yellow.svg)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-green.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Basic Overview
This is a starter kit for bootstrapping a full stack application.

> 🤔 _Why use me?_ Designed to quickstart new frontend projects in need of **common backend services** like Authentication, DB & Admin, Instant GraphQL API & Mail Services.

## Templated Services
- [x] Next.js (Typescript) - _Frontend client_
- [x] Apollo Client - _GraphQL client (caching)_
- [x] Material UI - _UI components_
- [x] Yarn - _Package manager_
- [x] Docker - _Containerisation_
- [x] Nhost - _Dockerised backend as a service_
    -  PostgreSQL - _Database_
    - Hasura - _GraphQL API (Generated Schema)_
    - Auth - _Authentication_
    - Mailhog - _Email testing_

## Getting Started
Clone this repo and install the dependencies:

```bash
git clone https://github.com/urbanbigdatacentre/ubdc-web-starter-kit.git

cd ubdc-web-starter-kit
```

## Running the application locally
> ### 📚 Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [Node.js](https://nodejs.org/en/download/)
- [Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli)

> ### 🕋 Backend Setup

_To setup the backend, we'll be locally hosting a set of docker containers that contain the Nhost services described above._

These are already connected and configured to work together, so we just need to start them up.
This works by pulling the images from external docker registries and running them locally.

To do this we need to run the docker compose file in the `nhost` directory of this project.

```bash
cd nhost
docker-compose up -d
```
If you have docker desktop installed, you should see the containers running in the docker dashboard.

Otherwise, check this using the cmd `docker ps` in the terminal.

The following endpoints are now exposed:

- `http://localhost:1337/v1/graphql`: Hasura GraphQL endpoint
- `http://localhost:1337/v1/auth`: Hasura Auth
- `http://localhost:1337/v1/storage`: Hasura Storage
- `http://localhost:1337/v1/functions`: Functions
- `http://localhost:3030`: Nhost Dashboard
- `http://localhost:1337`: Hasura Console
- `http://localhost:8025`: Mailhog SMTP testing dashboard
- `http://localhost:9090`: Traefik dashboard

> ### 🚨 ... Don't Forget

In order to use the Nhost dashboard, (from the `/nhost` directory) you need to run the [Hasura console locally from the Hasura CLI](https://hasura.io/docs/latest/hasura-cli/commands/hasura_console/):

```sh

hasura console
```


> ### 🖥 Next.js Setup
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



