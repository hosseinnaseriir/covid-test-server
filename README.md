<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Overview

This repository contains the source code for the back-end of the COVID-19 Test Set app, a web application that provides a list of COVID-19 examinations and allows users to create accounts, register, log in, and view data.

This project utilizes a variety of technologies to ensure a robust, scalable, and maintainable NestJS application. Below is an overview of the technology choices, prioritized based on their impact on development, deployment, and maintenance.

## Technology Choices

### 1. NestJS

**Why NestJS?**  
NestJS is the main technology used for building the application. It provides a powerful framework for developing scalable and maintainable server-side applications with TypeScript. Leveraging decorators and a modular architecture, NestJS facilitates the development of clean and structured code. It integrates seamlessly with various databases and supports a wide range of features including dependency injection, middleware, and exception handling.

### 2. PostgreSQL with Supabase

**Why PostgreSQL?**  
PostgreSQL is chosen as the primary database due to its robustness, scalability, and support for advanced data types. It is a powerful open-source relational database that handles complex queries and transactions efficiently.

**Why Supabase?**  
Supabase provides a managed PostgreSQL service, offering real-time capabilities and built-in authentication. It simplifies database management, reduces infrastructure overhead, and integrates well with modern development workflows.

### 3. Docker

**Why Docker?**  
Docker is used for containerization to ensure consistent development, testing, and production environments. By packaging the application and its dependencies into containers, Docker simplifies deployment, scaling, and environment management.

### 4. Vercel

**Why Vercel?**  
Vercel is chosen as the deployment platform due to its ease of use, seamless integration with Git, and support for automatic deployments. It provides a robust environment for deploying and scaling server-side applications with minimal configuration.

### 5. TypeORM

**Why TypeORM?**  
TypeORM is used as the Object-Relational Mapping (ORM) tool for interacting with the PostgreSQL database. It provides a high-level abstraction for database operations, leveraging TypeScript decorators to map database entities and relations.

### 6. Passport and JWT

**Why Passport and JWT?**  
Passport is used for authentication, providing a wide range of strategies for integrating various authentication mechanisms. JSON Web Tokens (JWT) are used for secure stateless authentication, allowing the application to manage user sessions and authorization efficiently.

### 7. Class Validator

**Why Class Validator?**  
Class Validator is used for validating data transfer objects (DTOs) and entities. It integrates with TypeScript decorators to provide a clean and declarative way to enforce validation rules, ensuring data integrity and consistency.

### 8. ESLint

**Why ESLint?**  
ESLint is used for maintaining code quality and enforcing coding standards. It helps in identifying and fixing problematic patterns and potential errors, ensuring a consistent codebase and adherence to best practices.

### 9. Commitlint and Husky

**Why Commitlint?**  
Commitlint is used to enforce conventional commit messages, improving the readability and organization of commit history. It ensures that commit messages follow a standardized format, facilitating automated changelog generation and semantic versioning.

**Why Husky?**  
Husky is used to manage Git hooks and ensure code quality before commits and pushes. It integrates with Commitlint to enforce commit message conventions and runs linting checks to prevent bad code from being committed.

### 10. Environment Variables

**Why Environment Variables?**  
Environment variables are used for managing configuration settings and sensitive information such as database credentials and API keys. This approach separates configuration from code, enhancing security and flexibility across different environments.

### 11. Release It

**Why Release It?**  
Release It is used for automating the release process, including versioning and changelog generation. It streamlines the release workflow, reducing manual steps and ensuring that releases are consistent and well-documented.

## Conclusion

The chosen technologies are selected based on their ability to provide a robust, scalable, and maintainable architecture for the NestJS application. Each technology plays a crucial role in ensuring the quality, security, and efficiency of the development and deployment processes.

For more information on each technology, refer to their respective documentation and resources.


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install -g pnpm
$ pnpm install
```

Add env varioables
```bash
NI_DB_HOST=EXAMPLE_VALUE
NI_DB_PORT=EXAMPLE_VALUE
NI_DB_USERNAME=EXAMPLE_VALUE
NI_DB_PASS=EXAMPLE_VALUE
NI_DB_NAME=EXAMPLE_VALUE
JWT_SECRET=EXAMPLE_VALUE
JWT_EXPIRES_IN=EXAMPLE_VALUE

```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
