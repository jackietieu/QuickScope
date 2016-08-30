# Database Schema Information

## users

 - has many `reviews`
 - Bonus Feature: has many `friends`

column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
username          | string    | not null, indexed, unique
password_digest   | string    | not null
session_token     | string    | not null, indexed, unique
profile_image_url | string    | 

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
address         | string    | not null

## reviews

 - belongs_to `user`
 - belongs_to `business`
 - Bonus Feature: can either be useful, funny, or cool; each represents an integer

 column name     | data type | details
 ----------------|-----------|-----------------------
 id              | integer   | not null, primary key
 business_id     | integer   | not null, foreign_key
 user_id         | integer   | not null, foreign_key
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

 - belongs_to `tag`
 - belongs_to `business`

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
business_id | integer   | not null, foreign key (references businesses), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
