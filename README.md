# cs465-fullstack
CS-465 Full Stack Development with MEAN
Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

During this full stack project I used three different kinds of front end development, Express HTML, JavaScript, and SPA's. The express html is what host the back end on the localhost:3000 and displays HTML, Json, and MVC routing. Javascript is located all throughout the full stack and it used to help develop the code. It is also primarily what communicated with the MongoDB to push and pull information. The HTML was converted to hbs to allow for greater speed. The SPA is what was used to host the Admin website where changes can be made to all aspect such as trips, trips information, adding trips, and removing trips. 

Why did the backend use a NoSQL MongoDB database?

A no SQL database was used for the simplicity and the easy access. They are much easier to read and navigate than SQL, and while convient for testing, it does not require an exterior application to use. 

Functionality



How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON handles the format of data that is made avaliable via Javascript. Json and Javascript work together to allow the database to work correctly and connect the front end to the backend to allow the flow of data.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

This was done a series of times such as add trips, edit trips, or trip listing. All of these were broken into one or two components to allow for better functionality rather than put everything into one file. Reusable UI allows for easier programing and for more space in terms of storage used.

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

There were mmultiple test ran through the localhost:3000 to determine if the website would perform accordingly. The coding was done in visual studio and I would check the website upon making changes to see if they were still running. As the course progresses we utilized Postman, which allowd me to perform more test and use commands such as GET, POST, PUT, and DELETE. These commands alter the database by either adding data, editing existing data, and deleting data(only worked for me via backend). The endpoints were the results of the commands run and how they altered the database. Security was the last aspect and that was achieved through the use of a login screen that stored user credentials for user verification.

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has given me insight into the jobs of a full stack developer and the difficulties that come with it. Most of my struggles came from simple typo errors, not declaring something, or using the wrong call such as ng serve instead of npm start. I also learned how to utilize visual studio code which was essential to view the code and could take the place of powershell. In terms of me becoming more marketable, this course has given me new skill that I will be able to utilize in the professional field.
