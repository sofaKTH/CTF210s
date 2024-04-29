# Robin Hood
###### Made by Neo Fors

## In this assignment, you take on the role of a digital vigilante aiming to expose "Greedy Corp," a corporation that profits by exploiting its customers. The goal is to find two FLAGS that will grant access to Greedy Corp's critical database, revealing evidence of their unethical practices.

## Objectives
- Find a way to get into the main page
- Find the "user" FLAG on Greedy Corp's main website.
- Figure out a way to find and view the .env file.
- Locate the "root" FLAG in a .env file within the Databases directory.

## Important
#### After long research you have discovered the following file structure:
default dir/ <br/>
├── Python/ <br/>
│   ├── Static/ <br/>
│   │   ├── global.css <br/>
│   │   ├── index.css <br/>
│   │   ├── login.css <br/>
│   │   └── tokenError.css <br/>
│   ├── Templates/ <br/>
│   │   ├── index.html <br/>
│   │   ├── login.html <br/>
│   │   └── tokenError.html <br/>
│   ├── UserData/ <br/>
│   │   ├── logs.txt <br/>
│   │   └── transactions.json <br/>
│   ├── app.py <br/>
│   ├── requirements.txt <br/>
│   └── Dockerfile <br/>
└── Databases/
      .env <br/>
