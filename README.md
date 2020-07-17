# entertain-me

## How to run the web

This server applies microserver concept. There is one orchestrator, one server for tv series database, and one server for movies database.

- Prepare 3 different terminals and run the command for each terminal from the root file.
  
  - Run the orchestrator
    ```
    $ cd orchestrator
    $ npm run dev
    ```
  - Run tv series database
    ```
    $ cd tvSeriesCollection
    $ npm run dev
    ```
  - Run movies database
    ```
    $ cd moviesCollection
    $ npm run dev
    ```
- Prepare 1 terminal for starting the client side.
  ```
  $ cd entertain-me-client
  $ npm start
  ```
  
## In the web

The web implented CRUD system, so user can add, edit, or delete movies or tv series. User are able to click one of the poster and see the details.
