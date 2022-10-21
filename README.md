## Blog Site (PERN stack)

This is a blog site built with the PERN stack (PostgreSQL, Express, React, Node.js). It is a full-stack application that allows users to create, read, update, and delete blog posts. It allows users to create account and login to post blog posts. It uses JWT for authentication and authorization.

## Preview

![Preview]()

## Installation

1. Clone the repository

```bash
git clone
```

2. Install dependencies

```bash

cd client
npm install
cd ..
npm install
```

3. Create a .env file in the root directory and add the following environment variables

    ```bash
    PORT=5000
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    DB_HOST=your_db_host
    DB_PORT=your_db_port
    JWT_SECRET=your_jwt_secret
    ```

4. Run the application

    ```bash
    nodemon server.js
    cd client
    npm start
    ```

## Usage

1. Create a new user account
2. Login to the application
3. Create a new blog post
4. Update or delete a blog post

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Project status

This project is currently in development. Users can create, read, update, and delete blog posts. Users can create an account and login to the application. Users can only update and delete their own blog posts. Users can only view blog posts that are published.

## License

[MIT](https://choosealicense.com/licenses/mit/)




````
