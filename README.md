# RETRO-TRADE
![Retro trade landing page](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/Screen%20Shot%202019-10-25%20at%203.19.02%20PM.png?raw=true)

RETRO-TRADE is an e-commerce web-application designed for game enthusiasts to buy and sell vintage and 'old-school' gaming items such as game consoles, video games, board games, and accessories.


## Live application

[RETRO-TRADE ](https://retrotrade.herokuapp.com)

## Technologies used
#### Libraries / Frameworks / Database

 - [Node.js](https://nodejs.org/en/)
 - [React.js](https://reactjs.org/)
 - [Materialize](https://materializecss.com/)
 - [MongoDB](https://www.mongodb.com/)
 - [Express.js](https://expressjs.com/)
 - [Javascript](https://www.javascript.com/)
 - [CSS ](https://developer.mozilla.org/en-US/docs/Web/CSS)

#### NPM Packages
 - [Mongoose](https://www.npmjs.com/package/mongoose)
 - [Passport](https://www.npmjs.com/package/passport)
 - [Axios](https://www.npmjs.com/package/axios)
 - [Bcrypt](https://www.npmjs.com/package/bcrypt)
 - [Redux](https://redux.js.org/)
 - [Validator](https://www.npmjs.com/package/validator)
 - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
 - [Concurrently](https://www.npmjs.com/package/concurrently)
 - [Multer/Multer-S3](https://www.npmjs.com/package/multer-s3)
 - [aws-sdk](https://www.npmjs.com/package/aws-sdk)
 - [Stripe](https://www.npmjs.com/package/stripe)
 - [@pusher/chatkit-server ](https://www.npmjs.com/package/@pusher/chatkit-server) - [@pusher/chatkit-client](https://www.npmjs.com/package/@pusher/chatkit-client)
 - [react-js-pagination](https://www.npmjs.com/package/react-js-pagination)

## Installation

To run this applaication locally, perform the folowing steps:

 Clone or download the github repository
 

    $ git clone https://github.com/kevinroymcgregor/project3.git

 Run npm install in the project3 folder
 

    $ npm i

    
Change directory to the client folder

    $ cd client
Run npm install in the client folder

    $ npm i
Change directory back to project3 folder

    $ cd ..
Start the application

    $ npm run dev

## How  the app was built

This application is built around the MERN (MongoDB, Express, React, Node) stack. Mongo DB is the database that holds all of our user and item data. Node JS is used to handle our back end server side development. On top of Node, Express JS is used to organize our application and provide our routes to our database. On the front end we use React JS to build our user interface into a single page experience. 

Along with the technologies above, this application also uses a long list of NPM packages such as mongoose, passport, and axios.


## How  the app works

#### Register / Login
You must create an account in order to use this application. Once a user has created an account, their account data is stored securely on a MongoDB database as well as passwords encrypted using bcrypt. 
![Register Page](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/Screen%20Shot%202019-10-25%20at%203.22.34%20PM.png?raw=true)
![Login page](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/Screen%20Shot%202019-10-25%20at%203.24.03%20PM.png?raw=true)

#### Viewing items for sale
Once a user has logged in they will have access to the home page and all the items currently listed for sale in our database.  
![Items for sale](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/Screen%20Shot%202019-10-25%20at%203.42.15%20PM.png?raw=true)
To view the details of an item just click the details button of the item. The item details displays all available images for the item as well as the full description and listed date.
![enter image description here](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/Screen%20Shot%202019-10-25%20at%203.44.08%20PM.png?raw=true)
#### Search for items for sale
Use the search box at the top of the page to find the items you're looking for.
![enter image description here](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/search%20%281%29.png?raw=true)
#### Purchasing items
The purchase of items can be made directly from the main page item list or within the item details page for that item by clicking on the purchase button.
![enter image description here](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/purchase.png?raw=true)

#### Posting an item
To post an item for sale click the "+" icon located in the upper right of the nav bar. Once on the Post An Item page, fill out the form and choose up to 4 images for your sale item. Once submitted, your item will go into our database and will be viewable by all other users.
![enter image description here](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/Screen%20Shot%202019-10-25%20at%203.41.52%20PM.png?raw=true)

#### View your user profile / logout
A user can view their user profile by clicking on the account button located in the upper right of the nav bar. New users can choose to upload a custom avatar and update it at any time by using the avatar image upload box. Users can also logout of the site by accessing the account button. 
![user profile](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/Screen%20Shot%202019-10-25%20at%203.49.04%20PM.png?raw=true)

Users can view the items they are selling by clicking the selling tab from their profile page. Inside of the selling tab, users can delete and  item they are currently selling.
![selling items](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/Screen%20Shot%202019-10-25%20at%204.05.58%20PM.png?raw=true)
#### Retro-Connect Chat
(Partially functioning) The Retro-Connect chat allows a user  to login and post a message that all other users can view. Future development of this feature will allow a user to user experience. Click the chat fab icon in the lower right of the main page.
![retro-connect](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/retrochatsignup.png?raw=true)




## Mobile Ready
RETRO-TRADE is mobile ready and viewable across desktop, tablet, and mobile displays.
![enter image description here](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/Screen%20Shot%202019-10-25%20at%207.18.56%20PM.png?raw=true)
![enter image description here](https://github.com/n8benzor/Updated-Portfolio-2/blob/master/assets/images/Screen%20Shot%202019-10-25%20at%207.19.14%20PM.png?raw=true)


## Future plans
Some features we hope to include upon a future release:

 - Google maps integration allowing users to view the general location of the user selling a partiular item. This functionality will allow help users plan a potential meetup to exchange goods.
 - Fully functioning messaging system. Will allow users to communicate directly to a user selling an item they want to purchase. This feature will also help users plan a potential meetup to exchange goods. 
