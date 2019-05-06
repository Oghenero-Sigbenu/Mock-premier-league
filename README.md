## Mock-premier-league
This is a web API written in nodejs to serve fixtures of matches

## Features
Authentication and authorization is base on User roles
# User Signup 
To register an adminUsers : localhost:3000/api/v1/user/register/:admin
To register a normel Users :  localhost:3000/api/v1/user/register

# Users and adminUsers Login 
POST - localhost:3000/api/v1/auth/login : Returns jwt token for subsequent request operations.

## Team API
GET - localhost:3000/api/v1/team/get : Returns a list of countries in the database.

# Only loggedIn adminUsers can access th following routes
POST - localhost:3000/api/v1/team/create : This Creates a new team.              
PUT - localhost:3000/api/v1/team/update/:id : Updates existing team with new data.                   
DELETE -localhost:3000/api/v1/team/delete/:id : Deletes existing team from the database.                         

## Fixtures API
GET - localhost:3000/api/v1/fixtures/all : Returns a list of countries in the database.

# Only loggedIn adminUsers can access th following routes
POST - localhost:3000/api/v1/fixtures/all : This Creates a new fixture.                    
PUT -localhost:3000/api/v1/fixtures/update/:id : Updates existing fixture with new data.                 
DELETE -localhost:3000/api/v1/fixtures/deletes/:id  : Deletes existing fixture from the database.                   

## Installation
Simply use the following commands:

npm install

npm start

Visit localhost:3000/api/v1 throught you browser.
