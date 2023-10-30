# Book_Management_Api
This is a Book Management API that allows you to perform CRUD (Create, Read, Update, Delete) operations on book data.

API Endpoints
1. Add Book
Endpoint: POST /addbook
Description: Add a new book to the database.
Usage: Send a POST request to /addbook with a JSON body containing book data, including title, author, and summary.
2. Get All Books
Endpoint: GET /allbook
Description: Retrieve a list of all books in the database.
Usage: Send a GET request to /allbook. The API will return a list of all books.
3. Get Book by ID
Endpoint: GET /book/:id
Description: Retrieve a specific book by its ID.
Usage: Send a GET request to /book/:id, replacing :id with the ID of the book you want to retrieve.
4. Update Book by ID
Endpoint: PUT /updatebook/:id
Description: Update the information of a book by its ID.
Usage: Send a PUT request to /updatebook/:id, replacing :id with the ID of the book you want to update. Include a JSON body with the updated book data.
5. Delete Book by ID
Endpoint: DELETE /deletebook/:id
Description: Delete a book from the database by its ID.
Usage: Send a DELETE request to /deletebook/:id, replacing :id with the ID of the book you want to delete.

#How to Set Up and Run the Application Locally
1.Clone the repository to your local machine:
2.Change into the project directory:
3.Install the required dependencies: using npm i 
4.Configure your database connection details in your application
5.Start the application:The API should now be running locally and accessible at http://localhost:8000.
6.if you want to access in online you use https://bookapi-yg4k.onrender.com this URL

#Decisions and Assumptions
During the development process, the following decisions and assumptions were made:

The API is built using Node.js and Express.js for simplicity.
MongoDB is used as the database system.
The API assumes a specific data structure for book records, including title, author, and summary.
The API returns JSON responses for ease of integration with other applications.
Feel free to modify and expand the README to include any additional information, dependencies, or configurations specific to your project.
