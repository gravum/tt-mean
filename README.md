# Project setup
```
Fork this repository
Clone your new fork
npm install
node server/app.js
npm start
```

# Description

Create an application (using provided template) in which user can 
register, login and see his/her profile data.
All the data should be stored in a database and not in the application's 
memory. If using NoSql please use MongoDB, if using relational 
database - any will do.
Please feel free to change the code as you need 
(template is just to save your time) and use any frontend/backend
libraries you need. 

1. User should be able to register a new account. There are country, 
city and zipcode selects on the /register page. User should fill them 
one by one. For instance when user selects country cities should be 
fetched from server. Just 2 countries, 2 cities for each country 
and 2 random zip codes for each city in the database will be enough.
2. User should be able to login (please use JWT or cookie).
The more info is collected automatically (e.g. browser version) on each 
login and register the better.
After successful login user should be redirected to /home.
3. On /home page user should be able to see all collected data about 
him/her (username, email, browser, etc.).
4. User should be able to logout.
5. [OPTIONAL] User should be able to restore his/her password via email.

# Results
The result of this assignment should be another repository (fork of 
this) with resulting application and database dumps.

# Notes
We value your time greatly so please feel free to contact us 
(boris@gravum.com, dmitry.danilkovich@gravum.com) if you have
 any questions about this assignment, we will do our best to answer you 
 as quickly as possible. We prefer quality over quantity so please take 
 your time and if you feel that you don't have time to finish all the 
 parts of the application please contact us and we will discuss our next
 steps.
