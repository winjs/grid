# Microsoft.com Grid Framework

Microsoft.com CSS grid explorations.

## Compile Sass files

### With the Sass command line

```bash
sass --watch --sourcemap --style compressed css:css
```

### With Grunt

First you must have installed [http://nodejs.org/](Node.js). Then install Grunt CLI as an admin user:

```bash
npm install -g grunt-cli
```

Then in the folder of the repository install the required npm packages:

```bash
cd mscom-grid
npm install
```

Or just recompile the Sass files:

```bash
grunt
```

## Built-in server

You can launch a static server which watches for changed Sass files and automatically recompiles the changed files:

```bash
grunt server
```

With this server you can access the demo page at this URL: [localhost:9001](http://localhost:9001/)

