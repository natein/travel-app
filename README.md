# travel-app
React application for travelers.

# UI part of application

Stack:
- react
- redux
- react-router

To start application you need to perform two steps:
1. `npm ci`
2. `npm run start`

Application will start at port 3000

# [Backend part of application](https://github.com/aleksei-bulgak-study/travel-app-be)

Stack:
- node
- express
- typescript

To start application locally you need perform such steps:
- `npm ci`
- `npm run start:develop`

Application will start at port 3001

Additionaly you need to create `.env` file in backend application root directory and specify such variables in it:

```
DATABASE_USER=admin
DATABASE_PASSWORD=admin
DATABASE_URL=mongodb+srv://admin:password@travel-app.url.mongodb.net/travel-app
SECRET=superSecretPassword
```
### NOTE that specified values is not real values and if you really want to start application locally please contact aleksei-bulgak-study

### Second NOTE: UI application points to backend application that is deployed on heroku. If you want to point it to your local build then you need to change value on `REACT_APP_API` in .env file stored in UI repository
