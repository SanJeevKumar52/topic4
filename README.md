Task Manager API (Node.js + Express)
A simple RESTful API for managing tasks, built using Node.js and Express.js following the MVC architecture.
Features
 Create a new task
 Retrieve all tasks
 Delete a task
 Organized code structure (MVC)
 Basic error handling
 Fast and lightweight

###file structure
/task-manager-api
/controllers    # Handles request logic
/models         # Defines data structure (future enhancement)
/routes         # Defines API endpoints
server.js       # Entry point of the app
package.json    # Project metadata & dependencies
README.md       # Project documentation

#### Installation
1. git clone
2. npm install
3. npm start

###
Method   Endpoint      Eescription         Body
GET     /api/tasks     Fetch all tasks     None
POST    /api/tasks     Create a new task   { "name": "Learn MVC" }
DELETE  /api/tasks/:id Delete a task by ID None
