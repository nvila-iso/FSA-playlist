# Playlist

In this guided practice, we'll use Express to create a simple API that serves information about a playlist of songs.

## Getting Started

1. Clone this repository down and run `npm install` to install the dependencies.
2. Run `npm test` to see the test cases, which should all fail at first.
3. Work through the guided practice to pass all of the tests.

> [!NOTE]
>
> We are using Vitest to test your code and have set it to bail after the first test case
> fails. If you would like to see all of the failed test cases at once, you can remove
> the `--bail 1` option from the `test` script in `package.json`.

## Set up Express app

Write code according to the following instructions while keeping an eye on your terminal,
where Vitest should be running.

1. In `app.js`, import the `"express"` package as `express` and call it to create the Express app.
2. Export the created app as the default export.
3. In `server.js`, import your app.

> [!TIP]
>
> The "imports" field in `package.json` allows you to use aliases when importing
> your own project files. The one defined for you allows you to use the `#` symbol
> to represent the project root, so you don't have to deal with relative paths.
>
> For example, if you have a file `foo/bar/baz.js`, you can import it from any file:\
> `import baz from "#foo/bar/baz;`

4. Initialize a `PORT` variable to 3000, which is a common default port that local servers listen on.
5. Tell the app to listen on `PORT`. A corresponding status message should be logged to the console.
6. In a separate terminal, run `npm start`. You should see your message! You can press
   `Control C` to quit the server.

## Write middleware to handle API endpoints

Now that your app is up and running, let's define some endpoints! This code should live in
`app.js` unless otherwise specified.

7. `GET /` should respond with the message `"You've reached the Playlist API!"`.
8. An array of songs has already been initialized in `db/playlist.js`. At the bottom of that file, add a line to export that array as the default export.
9. Back in `app.js`, import that array so we can use that data in our responses.
10. `GET /playlist` should send the `playlist` array as a response.
11. `GET /playlist/:index` should respond with the song at the given `index` of the `playlist` array.
    - If the index is invalid, it should send the message `"That song does not exist in the playlist."` with status code 404.
