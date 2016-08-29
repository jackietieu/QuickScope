# Database Schema Information

## users

 - has many `reviews`
 - BONUS: has many `friends`

column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
username          | string    | not null, indexed, unique
email             | string    | not null, indexed, unique
password_digest   | string    | not null
session_token     | string    | not null, indexed, unique
profile_image_url | string    | not null

## businesses

  - has many `reviews`
  - has many `ratings` through `reviews`
  - has many `tags` through `taggings`

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
description     | string    | not null, indexed, unique
lat             | float     | not null
lng             | float     | not null

## reviews

 - has one `user`
 - has one `business`

 column name     | data type | details
 ----------------|-----------|-----------------------
 id              | integer   | not null, primary key
 content         | text      | not null
 rating          | integer   | not null

## tags

 - tags for filters
 - has_many `businesses` through `taggings`

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
business_id | integer   | not null, foreign key (references businesses), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
