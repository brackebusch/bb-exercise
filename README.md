# README

### Getting setup
After cloning repo, `cd` into folder, and with Postgres running, in terminal:
1. `bundle install`
2. `rails db:create db:migrate db:seed`
3. `bin/rails s -p 3001`
Open new terminal window 
1.	`cd client` (inside repo folder)
2.	`npm install`
3.	` npm start`

This will launch application at http://localhost:3000/ API calls are made via proxy to http://localhost:3001/. Testing can be run via `npm test` or `rspec [folder name]` in respective parent folders (`client` or `bb_exercise`). 

----
### Architecture 
**Stack**: PostgreSQL , Rails API (Rails v5.2.1 Ruby 2.5.0), React (v16.5.2), Bootstrap (v3) for some UI
A single table containing orders is used in PostgreSQL, with all validations and data checking occurring in Rails. This takes into account rogue users who might somehow POST to the backend, or testers who might be using Postman and forget to point to a development environment =)

React handles all the UI. It’s fast, popular, well documented, familiar to me as a developer, and this exercise is within the scope of Create React App so development was very quick. The frontend has only one stateful component, and all the others receive data via props. Redux and Context were unnecessary based on the scope of the project, and would really only add unnecessary complexity at the moment rather than serve as helpful tools.

----
### Future Considerations
* Having an orders table with ID’s for data. In other words, because there are predetermined types of coffee, brew methods, and packets per case, these could each be their own table and their ID’s could be linked in each order. This minimizes space and increases performance (not storing strings in every order). In addition, by having tables with set coffees and brew methods, these could be sent to the frontend for the creation of forms. There is then no chanced of someone misspelling a unique blend of coffee when creating an option for a dropdown, as the dropdowns could be created by iterating over a list returned from a table in the database. Also, if there was expansion into other markets with different languages, orders could remain consistent in the table with reference to brew methods and coffee types. The cost here is that a table will need a join to understand and interpret data.
*	Currently there is no authentication used, but this is critical for this to be any use. For the obvious case of security also for the ability to store order sender information. 
*	Orders will need some sort of tracking information, like an address ID or customer ID or whether or not payment has been received for an order which has been placed. Currently there is a row for marking orders complete, but it is not used.
*	Small things like edit, update, or delete orders via similar modal. I might make the case with respect to deletion that information is never deleted, only marked not current or outdated so there is a record of all changes made to the table/database.

----
### Deployment 
**Objective**: always deploy a new instance and leave what is working alive until new version is up and running. The motivation for this is to make sure we never take production down, and if we have any errors it is easier to roll back.
Steps to deployment:
1.	Make sure application is passing all tests locally.
2.	Run build
3.	Create new instance in AWS, Azure etc. to deploy to
4.	If there are any SQL changes, run migrations and make sure they are backwards compatible
*Need to make sure all changes to the database are backwards compatible with the existing API, i.e. adding a new column. It either needs to be nullable, or it must have a default for prior database writes.*
5.	Deploy to cloud provider
6.	Passing all tests in production

**Load Balancer:**
7.	After deploying, add new instance to load balancer
8.	When everything is running remove old instances/servers to reduce operation costs

**Single Server:**
7.	After deploying, point DNS to new server
8.	After requests and IP requests to old server resolve, remove old instances/servers

*Note: If questions about how to ready the code for production linger, I am more than willing to walk through how to setup a Procfile.dev and package.json upon request and get things running on Heroku, or even deploy this project.*

----
### Trade-offs
*	Running tests in production: bad/fake data. On one hand, running tests in production is the best way to verify integrity of application. However, this adds complexity in that orders must now be canceled or deleted to prevent ‘fake’ data. At the worst case, this is compromise between integrity of data and safety of application.
*	Running two applications in parallel for some amount of time. Firstly, this adds complexity. Adding new and removing old could be reduced to simply shutdown and restart. However, this kills the entire application which is really undesirable. A second trade off with this method is two experiences for customers on application during the time period where multiple servers are up and running.
*	Choosing SQL database (PostgreSQL) over NoSQL database. Being that the requirements were clearly defined, and database information is set, SQL really was a clear choice. The flexibility offered by NoSQL isn’t really necessary, and when handling orders and payments a database which offers ACID transactions is really important. 
*	Rails vs Express. I am pretty familiar with Express and have been using it quite often as of late, but it still pales in comparison to Rails with respect to development time. Being that I was given 8 hours to complete the assignment, Express would have set me back a bit. And while I may be trading in control for Rails Magic, the simplicity of the application would have been lost as well. I was able to create to handle my database, model, controller, and routes within an hour with Rails, and that included refreshing myself. Also, knowing that Rails is used in house motivated my decision =) 
*	Client-side vs server-side rendering. While I might have blended the two to speed up performance, it adds quite a bit of complexity to blend server and client rendering. I am using rails as an API, and handling frontend rendering via Create React App. This is setup for client-side rendering, and it afforded me with minimal boilerplate work to get things up and running. So in following the logic of the prior I sacrificed control for speed and development time.
*	Hard coding dropdown data as opposed to retrieving from table. While I am a big fan of data driven design, it seemed a little out of scope for this project. Having a change occur on the frontend or backend is going to require a release both ways in the future, and a frontend modification is a little quicker to spot and modify in my opinion.  
*	Sending all orders from table to frontend. This was again dictated by the size and scope of the application. Generally if the payload was too big I would break this down and paginate via backend (i.e. LIMIT and OFFSET). As it is, the request is so small it doesn’t make a dent in performance. At the moment I am only hitting the database when the application initially launches, and when an order is created and saved. If there was a large set of data, it would also require a rework of the Pagination on the frontend, as it would grow in size without any editing if there were too many orders.
*	Routing for with pagination. An improvement could be made by having pagination be part of routes, so that finding an order could be referenced via link. This again would seem outside the scope of the exercise, but would be achievable via wrapping the application with React Router, which would also play well pagination on the backend.