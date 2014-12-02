# Msdotcom/WinJS Grid Framework
A CSS grid framework built on SASS to provide an automatic responsive grid for web developers with flexibility for manual control when needed. This grid is a float and padding-based grid, meaning that it works by using floats to create rows and padding to create the gutters between columns instead of margin. 

Supports column layouts of 1, 2, 3, 4, 5, 6, 8, 12, 16, and 24.

## Demo
[http://msdotcom.azurewebsites.net/Grid](http://msdotcom.azurewebsites.net/Grid)

## Install/Compile SASS files

### With the SASS command line

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
cd grid
npm install
```

Or just recompile the Sass files:

```bash
grunt
```

### Built-in server

You can launch a static server which watches for changed Sass files and automatically recompiles the changed files:

```bash
grunt server
```

With this server you can access the demo page at this URL: [localhost:9001](http://localhost:9001/)

## Usage
A grid is a container for rows and rows are containers for columns. A grid should never have another grid nested anywhere inside it, only one grid is needed for a section that is using the grid framework.

### Class breakdown
Grid - `.grid`

Row - `.row`

Column - `.col-1-24` where the numbers mean # of columns to span and total # of columns, respectively. 

Please see the "automagic" and manual column spanning sections below for details on what and how values are supported for the column span number.

###SASS configuration variables
Through the use of the variables in the _config.scss file, you can control: 
* Maximum width of the grid
* Prefixing of the grid and row classes
* Fixed column margin mode's fixed margins
* Mixed langauge support
* Breakpoint values for the 5 built in breakpoints/viewports
* Prefixing of the viewport specific classes (manual colspans and offsets)
```
$max-grid-width: 1600px;
$fixed-col-margin: 2px; //4px fixed margin, gets doubled
$grid-prefix: "ms-";
$dirMixed: false !default; //Toggle for having mixed langauge support

//Different viewport sizes and list for mixin use
$vp1: 320px;
$vp2: 540px;
$vp3: 768px;
$vp4: 992px;
$vp5: 1400px;
$vp-list: ($vp1, $vp2, $vp3, $vp4, $vp5);


//Different prefixes for each viewport and list for mixin use
$vp1prefix: xs;
$vp2prefix: s;
$vp3prefix: m;
$vp4prefix: l;
$vp5prefix: xl;
$vp-prefix-list: ($vp1prefix, $vp2prefix, $vp3prefix, $vp4prefix, $vp5prefix);
```

## Grid Features

### "Automagic" responsive breakdown
Built into the grid is an opinated take on how the different column layouts should reflow and breakdown across the 5 breakpoints. This works nicely for those that want to get up and running quickly, need their content to look great across many screens, and don't need the granualar control over the breakdown of columns for each breakpoint.

In this "automagic" mode, only certain column spanning values are supported out of the box. For example, if you need a column spanning 7 columns in a 24 column layout, you'll need to use the manual class overrides described below.

Column spanning options that are supported "automagically", these will reflow and respond across the different breakpoints without any manual classes:

| Columns |      Spans     |
|:-------:|:--------------:|
|    1    | 1              |
|    2    | 1, 2           |
|    3    | 1, 2, 3        |
|    4    | 1, 2, 3, 4     |
|    5    | 1, 2, 3, 4, 5  |
|    6    | 1, 2 ,3 ,4, 6  |
|    8    | 1, 2, 4, 6, 8  |
|    12   | 1, 2, 4, 12    |
|    16   | 1, 2, 4, 8, 16 |
|    24   | 1, 6, 12, 24   |

Example row:
```html
<section class="ms-row">
    <div class="col-3-4 ">
    </div>
    <div class="col-1-4 ">
    </div>
</section>
```

Column breakdown across each breakpoint:

| Columns | < 320px (mf) | > 320px (vp1) | > 540px (vp2) | > 768px (vp3) | > 992px (vp4) | > 1400px (vp5) |
|:-------:|:------------:|:-------------:|:-------------:|:-------------:|:-------------:|:--------------:|
|    1    |       1      |       1       |       1       |       1       |       1       |        1       |
|    2    |       1      |       1       |       1       |       2       |       2       |        2       |
|    3    |       1      |       1       |       3       |       3       |       3       |        3       |
|    4    |       1      |       1       |       2       |       4       |       4       |        4       |
|    5    |       1      |       1       |       1       |       5       |       5       |        5       |
|    6    |       1      |       1       |       2       |       3       |       6       |        6       |
|    8    |       2      |       2       |       2       |       4       |       8       |        8       |
|    12   |       2      |       2       |       4       |       4       |       12      |       12       |
|    16   |       2      |       4       |       4       |       8       |       8       |       16       |
|    24   |       6      |       6       |       12      |       24      |       24      |       24       |


### Manual column spanning
Manual column span class overrides are supported for all column counts and all breakpoints. They are structured in a way to only support column spanning in relation to the total columns available for that column count by the breakdown chart specified above.

Here is the pattern for the classes:

viewport - col - # of columns to span - total # of columns

Examples:

`s-col-3-34` - 25% of the viewport - Above the small(viewport 2) breakpoint, this column will span 3 columns of the 12 columns in the row. This is because the 24 column layout at this breakpoint is now broken down to 12 column rows.

`l-col-14-24` - At the large(viewport 4) breakpoint, this column will span 14 columns of the 24 columns in the row.

### jQuery plugin for preceding columns
There is a scenario where the CSS sibling selector, +, fails for the "automagic" mode. This selector only selects siblings that follow after and not preceding siblings. Because of this scenario, when a smaller column span could be used preceding a larger column span, those preceding columns need to be decorated with a class so that they can be selected. If you don't want to use the jQuery plugin, that is fine, but they will need to be decorated with a preceding class. Or add the small jQuery plugin that runs on load to decorate those classes automatically for you.

### Offsets
Using these classes will offset a column by a specified amount.

Here is the pattern for the classes:
viewport - col - total # of columns - offset - # of columns to offset

Example:
`l-col-8-offset-2` - This will offset the column by 2 column widths for an 8 column row above the large(viewport 4) breakpoint.

### Centered columns
Putting the `.centered` class on a single column will center it in that row.

### No break
Putting the `.nb` class on a column will make it hold it's original width across all breakpoints.

Example:
An element with the classes of `class="col-1-4 nb"` will always stay at a width of 25%.

### Prefixing of grid and row classes
The _config file has the variable named `$grid-prefix` where you can specify any prefixing that you would like added to all the `.grid` and `.row` classes. The default is `ms-`.

### RTL Support
The grid has full support for RTL. There are predefined SCSS files and labeled respectively for LTR, RTL, and mixed. Compiliation for direction is controlled by two different config values: `$dir` (ltr or rtl) and `$dirMixed` (boolean, false as a default). These variables then drive `$left` and `$right` variables throughout the SCSS to change as appropriate.

To enable directional support, you need to apply the `dir` attribute to the html tag and link the appropriate CSS file. It should look something like the following.

`<html dir="rtl">` or `<html dir="ltr">`

Mixed language support is enabled through the use of a `dir` attribute override. For example, you could have a default `dir` tag of ltr on the html tag, but than place the 'dir' attribute again where you needed to support the opposite, say on a `row` element to override that specific `row` and make it rtl.
```html
<html dir="ltr">
...
<div class="row" dir="rtl"></div>
```

### IE8 Support
Without doing anything, IE8 will show the mobile first view. If that is not acceptable for your project, full IE8 support is supported by adding [https://github.com/scottjehl/Respond](Respond.js) to your project will allow it to behave as it does in modern browsers. Remember that if you're using any HTML5 elements (like section), you'll also want to add the [https://github.com/aFarkas/html5shiv](HTML5Shiv). Include this JS in the head of your HTML, putting in the conditional comment below will only serve it to browsers below IE9.
```
<head>
	...
	...

    <!--[if lt IE 9]>
        <script src="/pathto/html5shiv.js"></script>
        <script src="/pathto/respond.js"></script>
    <![endif]-->
</head>
```