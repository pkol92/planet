# Planet app

## Project demo
You can see the demo at: https://pkol92.github.io/planet

## Project launch

After cloning your current project, be sure to run:

**npm install**

to install all dependencies. You can start the project with the command:

**npm start** <br/>

On the home page, to login correctly fill the inputs with: <br/>
login: Astronaut <br/>
password: Planet1

## Project description

The project shows a website about planets. On home page you can log in (login and password are hardcode) and if you login corretly, you will be redirect to page with table. The table is show only for login users. Table shows the data from the external API: planet's name, body type, flattening, denisty and gravity. You can choose number of table's page or how many record do you want to see on the screen. Table was created with React Table.
If you don't log out, the data of login are save in local storage and you can directrly go to /planets.
If you log out, you can't go to /planets and you will be redirect to home page with login.

## Stack of project

Technologies used: HTML, CSS, React, JavaScript, TypeScript, React Router, React Table, Styled Components.
