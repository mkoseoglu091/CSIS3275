# CSIS3275

## Information

This is a web app group project for Douglas College's CSIS-3275 Software Engineering Course. Details regarding the app TBD.

## Team

- Mehmet Koseoglu (300351078)
- William Jongmin Lee (300341465)
- Ozgen Akgun (300346378)
- Wenqi Wang (300334323)

<br></br>

## Setup For Team

#### Installs

1. Node.js
2. VS Code
3. Postman
4. Github Desktop

#### Useful Chrome Extensions (not required)

1. React Dev Tools
2. Redux Dev Tools

#### Useful VS Code Extensions (not required)

1. ES7+ React/Redux/GraphQL/React-Native snippets
2. Prettier - Code formatter

#### VS Code Settings (not required)

1. Settings -> Search: format on save -> Check: format on save
2. Settings -> Search: prettier -> Check: Jsx Single Quote, Check: Prettier Single Quote, Check: Prettier Semi
3. Ctrl + Shift + P -> Type: Open Settings -> Click: **Open Settings (JSON)** -> after the last item, put a comma. on the next line Add: "emmet.includeLanguages" : {"javascript" : "javascriptreact"}

<br></br>

## How to Run

#### Dependencies

1. Clone Repo
2. In VS Code open a new terminal (Terminal -> New Terminal)
3. Type: **npm install**. This will install all dependencies listen in the package.json file
4. From Trello under resources, get the default.json file and insert it in the config folder (this contains confidential credentials best kept out of github)
5. To install client dependencies, in your terminal type **cd client**, this will Change Directory to the client directory. Client has its own dependencies.
6. Now again type and run **npm install**, this time the client dependencies will be installed.
7. To go back to the root folder, type **cd ..**, this will take you back to the main project folder
8. Now you are ready to run the server, the client, or both

#### Running the Server

1. To run the server, type **npm run server** in the terminal inside the main project folder (to close server, on terminal use CTRL + C)
2. To do a quick test, go to Postman, next to the dropdown that says GET, type **http://localhost:5000** and press SEND
3. You will get a response saying API Running. This means the server is successfully running.
4. Additional Postman Commands have been added to Postman Collections. Everyone needs to be added to view. The Postman tests are also detailed in Trello under Resources

#### Running the Client

1. Install Node.js in your laptop
2. Open the entire folder in visual studio code, then open Terminal
3. In terminal, type "cd client/"
4. Type "npm install"
5. Type "npm install react-scripts"
6. Type "npm start"
7. To access frontend from mobile phone, first make sure your mobile phone is connected to the same network as laptop. Then, check 'network preference' in your laptop to obtain private network address. Then open browser in mobile phone and input 'private network/3000'. Note that this approach doesn't work at a public network such as Douglas College Internal. The possible reason may be firewall. Use your home Wi-Fi or personal hotspot for accessing pages from mobile.

#### Running Both Server and Client at the same time

1. Type **npm run dev**
2. We will use this most once we have a backend and frontend working at the same time.

<br></br>

## Github Rules

1. When starting the day, get the most recent version of the project (Fetch Origin -> Pull Origin)
2. Create a new branch named with the following convention (Your Name - Feature You Are Working On, Ex: Mehmet-Frontend-Tasks-Section)
3. Once You are done with the feature, tested it to make sure it works without issues
4. Create a Pull request (once approved this will merge your branch with the main branch)
5. Notify others so they can review changes (at least 1 review and approval is required before merging is allowed)
6. Once Approved Merge your Pull request
7. Delete the old branch, now your features are added to the main project. (so the repo is not cluttered with a lot of old branches)
8. When others ask for review, make sure to go over their changes (ideally together), and test the feature. Don't approve without making sure the changes aren't messing up the project.

<br></br>

## Important

Before finalising the project at the end of the semester, change config/default.json -> expiration to 3600, so users are signed off after 1 hour of inactivity
