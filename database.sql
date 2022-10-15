CREATE DATABASE blog;

-- Postgres user

create table users (
    id bigserial primary key,
    user_name varchar(255) not null,
    user_password varchar(255) not null,
    user_email varchar(255) not null,
    image varchar(255),
    user_id varchar(255) not null
);


CREATE TABLE posts (
    id bigserial primary key,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);