Assignment One:
MEAN Stack implementation

pre-requisites:
mongodb,
npm,
angular,
postman

Inside this 'assignment-one' folder there are two subfolders named client and server.

First, ensure that mongodb is installed and running on your system.
You must run 'npm install' in each of these folders separately.

Then run 'npm start' from inside both these folders to install dependencies.

frontend can be accesed via 'http://localhost:4200/'
backend can be accessed via 'http://localhost:3000/'

first you have to register via http://localhost:3000/api/user/register
use postman or another API platform.
body {
	 "name": "editor",
    "email": "editor@gmail.com",
    "password": "password"
}

Roles are ['Editor', 'Admin']

By default, all registered users will have the editor role.
The database is the only place where you can change the default role.
You can access the entire webpage after assigning the user the 'Admin' role. Otherwise, all users will be restricted in certain areas.

The frontend does not include registration functionality.