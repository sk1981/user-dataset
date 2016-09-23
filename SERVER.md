# Server Implementation
I am listing one potential solution for the backend server

## Technology
On Server we would use:-
* Java/Dropwizard or Java/SpringMVC for creating our user services
* PG SQL as a relational data store
* NGINX to act as loadbalancer and serve static content

### Rest Services
We will have a simple rest service with the below endpoints
* POST /users/ - add a new user
* PUT /users/:userId - update an existing user
* GET /users - to get all users
* DELETE /users/:userId - to delete an existing user

To fetch data from the server we would use fetch API

## Database Schema
For now it would a very simple schema
 Table Person with columns
 * id : primary key, server generated guid, varchar(32)
 * name : non null, varchar(150)
 * superpower: boolean
 * rich: boolean
 * genius: boolean

 Alternatively, based on app requirements, we would create a separate table Trait,
  where we just store train by name and display.
  In this case, person table will have link to another table PersonTrait
  which would have personid as a foregin key of id.
  This table would also contain traitType and value fields