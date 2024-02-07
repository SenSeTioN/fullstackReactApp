# Fullstack ReactApp

## Stack

<div>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" title="SASS" alt="SASS" width="40" height="40"/>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg" title="Yarn" alt="Yarn" width="40" height="40"/>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" title="Git" alt="Git" width="40" height="40"/>

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" title="VSCode" alt="VSCode" width="40" height="40"/>

  <img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" title="Express" alt="Express" width="40" height="40"/>

  <img src="https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original.svg" title="PostgreSQL" alt="Express" width="40" height="40"/>

  <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-original.svg" title="Tailwind" alt="Tailwind" width="40" height="40"/>

</div>

## Project launch

1️⃣ Clone repo.\
2️⃣ Run `yarn` in the project directory `backend`.\
3️⃣ Create `.env` file based, fill required fields `DATABASE_URL= postgresql://username:password@localhost:port/name?schema=public` 

`username - your username or postgres by default` 

`password - password (superuser)` 

`port - your port or 5432 by default` 

`name - name directory`

4️⃣ Run console `npx prisma migrate dev --name init`.\
5️⃣ Start development server by running `yarn dev`.\
6️⃣ Visit <http://localhost:5000/>. The application should be up & running.

---

1️⃣ Run `yarn` in the project directory `frontend`.\
2️⃣ Start development server by running `yarn dev`.\
3️⃣ Visit <http://localhost:5173/>. The application should be up & running.

## Available Scripts

Run in the project directory:

### `yarn`

Installs all dependencies.

### `yarn dev`

Runs the app in the development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.\
The page will reload when you make changes. You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `dist` folder.\
It bundles React in production mode. The build is minified and the filenames include the hashes.
