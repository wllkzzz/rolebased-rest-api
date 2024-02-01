### Express Sequelize Authentication and Authorization

This repository contains a simple Express.js application with Sequelize for database interactions, implementing user registration, login, and basic role-based authorization. The application provides API endpoints for user and admin functionalities, demonstrating how to use middleware for authentication.


### API Endpoints

User Authentication
| Method | Path  | Description |
|:-------|:------|:-------------|
| POST | /user/registration | User registration |
| POST | /user/login | User login |
| GET | /livez  | Liveness status used by Kubernetes liveness probe |

Admin Operations (Requires Authentication)
| Method | Path  | Description |
|:-------|:------|:-------------|
| GET | /admin/users | Get all users |
| GET | /admin/users/:id | Get user by ID |
| DELETE | /admin/users/:id | Delete user by ID |

### Dependencies

Express.js: Web application framework.

Sequelize: ORM for interacting with databases.

Bcrypt: Password hashing for user security.

Jsonwebtoken: Token-based authentication.

Dotenv: Environment variable management.
