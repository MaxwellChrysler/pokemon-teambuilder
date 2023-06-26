
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "poke-stats" (
    "id"  SERIAL PRIMARY KEY,
    "hp" int,
    "attack" int,
    "defense" int, 
    "spAttack" int, 
    "spDefense" int,
    "speed" int, 
    "nickname" VARCHAR (80),
    "generation" VARCHAR (80),
    "name" VARCHAR (220) NOT NULL,
    "user_id" int REFERENCES "user"
);