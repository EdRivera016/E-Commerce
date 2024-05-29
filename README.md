# E-Commerce Backend

## Table Of Contents
- [E-Commerce Backend](#e-commerce-backend)
  - [Table Of Contents](#table-of-contents)
  - [Description](#description)
  - [The Challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Link To Github](#link-to-github)
  - [Screen Recording](#screen-recording)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Features](#features)
  - [License](#license)
  - [Questions](#questions)
## Description
This project is an E-Commerce backend built using Node.js, Express.js, and Sequelize. It provides a RESTful API for managing products, categories, tags, and their associations in a PostgreSQL database.

## The Challenge

The challenge was to build a robust backend for an E-Commerce application that allows for easy management of product information, categories, and tags. The application needed to support CRUD operations and handle associations between different entities efficiently.

## User Story
- AS A manager at an internet retail company
- I WANT a back end for my e-commerce website that uses the latest technologies
- SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria
- GIVEN a functional Express.js API
- WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the PostgreSQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

## Link To Github
`https://github.com/EdRivera016/E-Commerce`

## Screen Recording

## Technologies Used
- Node.js
- Express.js
- Sequelize
- PostgreSQL

## Installation
To install and run the application locally, follow these steps:
1. Clone the repository:
- `git clone https://github.com/yourusername/e-commerce-backend.git`
- `cd e-commerce-backend`
2. Install dependencies:
- `npm install`
3. Set up your environment variables:
- Create a .env file in the root directory and add the following variables:
- `DB_NAME='ecommerce_db'`
- `DB_USER='ecommerce_role'`
- `DB_PASSWORD='ecommercelimited'`
- `DB_HOST='localhost'`
- `DB_PORT='5432'`
4. Create the database and run the migrations:
- `npx sequelize-cli db:create`
- `npx sequelize-cli db:migrate`
5. Seed the database:
- `npm run seed`
6. Start the server:
- `npm start`

## Features
- CRUD Operations for Categories: Create, read, update, and delete categories in the database.
- CRUD Operations for Products: Create, read, update, and delete products, including managing product details such as price, stock, and category associations.
- CRUD Operations for Tags: Create, read, update, and delete tags, including managing associations between tags and products.
- Product-Category Association: Associate products with categories and manage these relationships.
- Product-Tag Association: Associate products with tags and manage these relationships.
- Database Integration: Utilize PostgreSQL for robust and scalable data storage.
- Sequelize ORM: Use Sequelize to handle database interactions, ensuring smooth and efficient data management.
- Environment Configuration: Securely manage configuration using environment variables.
- Error Handling: Implement comprehensive error handling to provide meaningful error messages and improve debugging.
- RESTful API: Expose a well-structured RESTful API for easy interaction with the data.

## License 
This project is licensed under the MIT License.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Questions
Please send any quesons you may have [here](mailto:edwinrivera016@outlook.com?subject=[Github]%20Dev%20Connect) or visit [github/EdRivera016](https://github.comEdRivera016).
