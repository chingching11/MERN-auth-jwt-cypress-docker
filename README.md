# MERN Authentication + Authorization using jwt

## Overview

This app is built using MERN stack. The app mainly focuses on authentication and authorization using [jwt](https://jwt.io/) (JSON Web Tokens). Only the registered users can get access to private page. Once the users are signed in, the server will send the jwt token to the browser and stored in a [HttpOnly cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies) which is set to expire in 1 hr. When users log out, the token will be destroyed.

###### Client-side 
The frontend uses [React](https://reactjs.org/) framework, [react-router-dom](https://reactrouter.com/web/guides/quick-start) for routing and the [react-bootstrap](https://react-bootstrap.github.io/) for styling. 

###### Server-side
The backend uses [Express](https://expressjs.com/) framework.

###### Database
The users' credentials are stored in mongodb, and passwords are stored using [bcrypt](https://www.npmjs.com/package/bcrypt).

###### Testing
Uses [cypress](https://www.cypress.io/) for end-to-end testing.

###### Docker
The Dockerfiles in frontend and backend are based on the docker [node.js example](https://docs.docker.com/language/nodejs/build-images/). Uses the [Docker Compose](https://docs.docker.com/compose/)  for running the entire application (multi-container) together. 

---

## Run the app on localhost
```
cd <frontend/backend>
npm intall
npm start
```
Frontend (React) will run on port 3000 and Backend (Express) will run on port 8080.

---

## Run Docker
 
##### Build client image
```
cd frontend 
docker build -t mern-client . 
```

##### Build server image
```
cd backend
docker build -t mern-server .
```

##### Run Docker Compose 

```
docker-compose up
```

---

## Testing

##### Installing Cypress

```
cd test-cypress
npm intall
```

##### Running Cypress
``` 
cd test-cypress
npm run cypress:open
```

---

#### Useful Resources


* [JWT: When and How to use it](https://blog.logrocket.com/jwt-authentication-best-practices/#:~:text=A%20JWT%20needs%20to%20be,storage%20(or%20session%20storage).)
* [How bcrypt works](https://medium.com/javascript-in-plain-english/how-bcryptjs-works-90ef4cb85bf4)
* [Docker Commands](https://docs.docker.com/engine/reference/commandline/docker/)
* [Learn Docker Compose](https://docs.docker.com/compose/gettingstarted/) 
