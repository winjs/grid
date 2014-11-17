# Microsoft.com Grid Framework

Microsoft.com CSS grid framework.

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

##RTL Support

The grid has full support for RTL. There are predefined SCSS files and labeled respectively for LTR, RTL, and mixed. Compiliation for direction is controlled by two different config values: `$dir` (ltr or rtl) and `$dirMixed` (boolean, false as a default). These variables than drive `$left` and `$right` variables throughout the SCSS to change as appropriate.

To enable directional support, you need to apply the `dir` attribute to the html tag and link the appropriate CSS file. It should look something like the following.
`<html dir="rtl">` or `<html dir="ltr">`

Mixed language support is enabled through the use of a `dir` attribute override. For example, you could have a default `dir` tag of ltr on the html tag, but than place the 'dir' attribute again where you needed to support the opposite, say on a `row` element to override that specific `row` and make it rtl.
```
<html dir="rtl">
...
<div class="row" dir="rtl"></div>
```