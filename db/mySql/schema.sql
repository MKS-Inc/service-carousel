DROP DATABASE IF EXISTS mks;

CREATE DATABASE mks;

USE mks;

CREATE TABLE listings (
  id SERIAL PRIMARY KEY,
  address VARCHAR(200)
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  source VARCHAR(300),
  listing_id BIGINT
);

-- for TEST

-- INSERT INTO listings (id, address)
--   VALUES (1, "123 st");


-- INSERT INTO pictures (id, source, listing_id)
--   VALUES (1, "I am a url", 1);