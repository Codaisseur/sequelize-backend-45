## REST => REpresentational State Transfer

Architectural pattern (standard) for designing and building APIs

SOAP

1. Operations as HTTP methods
2. Respond with appropiate status codes
3. Clean and meaningful urls

Operations => CRUD (Create, Read, Update, Delete).

## 1. GET, POST, Put, DELETE, PATCH

Create => POST
Read => GET
Update => Put + Patch
Delete => Delete

## 2. Appropiate status codes

200 => Ok success
404 => Not found
400 => Bad request
500 => Server error

200... => Good, success etc => all ok
300... => Redirect status codes. => not here
400... => client error => you screwed up => we have to set always
500... => server errors => I screwed up

## 3. clean and meaningful urls

POST /adduser
GET /allUsers
GET /userLists

GET /users
GET /lists

POST /users
GET /lists

Endpoint = METHOD + route(url)
