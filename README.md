THIS IS A BARBER WEBAPPLICATION FOR APPOINTMENTS AT THE BARBER


Vite -Frontend Tool with Docker
Steps for creating a project:

1. Create a new folder for the project
2. Create .docker/Dockerfile and composer.yaml files for Docker
3. Open terminal and run: docker compose build
a. This will build the image first time
4. Run on terminal: docker compose up -d
5. Run on terminal: docker compose exec app sh
a. This will open container terminal
6. Run on container terminal: yarn create vite
7. The project name: write . for current folder or a name to create a new folder
8. Select a framework: Vanilla, Vue, React, Preact, Lit, Svelte, etc.
9. Select a variant: JavaScript, TypeScript, Nuxt, etc.
10. Run on container terminal: yarn set version 4.5.1
11. Run on container terminal: yarn install
12. Run on container terminal: yarn dev
13. Open browser and write: http://localhost:5173/
14. Run on container terminal: (Ctrl+X) then write: exit
15. Run on terminal: docker compose down