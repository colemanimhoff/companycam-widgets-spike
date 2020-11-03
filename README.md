# Install Dependancies

```bash
yarn
```

`ESLint` and `Prettier` are used for linting and formatting. Make sure to install those packages in your text editor.

# Run the App

```bash
npm start
```

Then, [open](http://localhost:3000) the app in your browser.

# Build the App

You can manually build the app with:

```bash
npm run dev
```

You can open the build HTML in your browswer with:

```bash
open dist/index.html
```

# Docker

You can run the following command to build a Docker container

```bash
docker build -t companycam:widget .
```

You can use the following to run that build

```bash
docker run -it --rm -p 3000:3000 companycam:widget
```
