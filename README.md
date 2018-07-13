__General Assembly SF WDI45 - Project 3 - "comic.ly" - Back-End Github Repo__

__Overview__<br>
comic.ly is a MERN (Mongo-Express-React-Node) web app that is designed to help Marvel comics fans find interesting comics and organize them into reading lists. After creating an account, users can create multiple reading lists based on their interests or specific themes. They can also look for Marvel comics by entering a character name and an optional date range to get a list of comics choices to add, based on data provided by the Marvel API. After adding comics, users have a list of comics that they can use to track and manage their reading. 

__Technologies Used__<br>
  * Front-end 
    - HTML
    - CSS
    - React
    - React Router
    - Axios
    - Semantic UI React

  * Back-end
    - Node
    - Express
    - Mongoose
    - MongoDB
    - Axios
    - Passport
    - JWT-Simple
    - Bcrypt-Nodejs
    - MD5

  * API
    - Marvel Comics API (https://developer.marvel.com/)
 
__Installation__<br>
To install this project, download the front-end and back-end repositories.
  * Front-end repository: https://github.com/juney3/ga-project3-fe-react
    - In Terminal, CD to the front-end repository folder, and run ```npm install```
    - To add the Semantic UI React library, run ``` yarn add semantic-ui-react```
  * Back-end repository: https://github.com/juney3/ga-project3-be-nem
    - In Terminal, CD to the back-end repository folder, and run ```npm install```
    - To seed character data in the database to speed comics retrieval, run: ```node seed.js```

__Project Planning Deliverables__<br>
  * User story
  * Wireframes
  * ERDs
  https://github.com/juney3/ga-project3-be-nem/blob/master/Proj3_ERD-Wireframes-UserStory.zip  

__Unsolved Problems__<br>
  * No redirect on signup or login
  * Modals won't close on form submit
  * No update or delete functionality (ran out of time)
  
__Future features__<br>
 * App features<br>
   - Refactor app to include Redux and a more robust authentication/authorization system
   - Improve UI/UX
   - Expand search options and features
   - Look into possibly incorporating other APIs
 * User features<br>
   - Modify and delete lists
   - Modify and delete comic information from lists
   - Track whether a comic was read or a list is complete
   - Modify user information / delete user account
 * Social features<br>
   - View other users' shared lists
   - Upvote / downvote shared lists
   - Follow other users
  
