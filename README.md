# Msdotcom/WinJS Grid Framework
A CSS grid framework built on SASS to provide an automatic responsive grid for web developers with flexibility for manual control when needed. This grid is a float and padding-based grid, meaning that it works by using floats to create rows and padding to create the gutters between columns instead of margin. 

This framework is built based off of config values so any number of columns, gutter sizes, column breakdowns, and breakpoints can be configured and built with ease.

Supports column layouts of 1, 2, 3, 4, 5, 6, 8, 12, and 24 by default. 

## Demo
[http://msdotcom.azurewebsites.net/Grid](http://msdotcom.azurewebsites.net/Grid)

## Install

### With [Bower](http://bower.io/)

```bash
bower install winjs-grid
```

### With [Grunt](http://gruntjs.com/)

First you must have installed [Node.js](http://nodejs.org/). Then install Grunt CLI as an admin user:

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

With this server you can access the demo page at this URL: [http://localhost:3000/](http://localhost:3000/)

### With the SASS command line

```bash
sass --watch --sourcemap --style compressed css:css
```

## Usage
A grid is a container for rows and rows are containers for columns. A grid should never have another grid nested anywhere inside it, only one grid is needed for a section that is using the grid framework.

### Class breakdown
The grid and row class names can be prefixed with any text you'd like, we default to "ms" but you can use whatever you'd like by setting the SASS grid-prefix variable in the config file. See below.

Grid - `.ms-grid`

Row - `.ms-row`

Columns:
Auto columns - `.col-1-24` where the numbers mean # of columns to span and total # of columns, respectively. 
Manual columns - `.l-col-1-24` same as above but with a viewport/breakpoint size prefix.

Please see the "automagic" and manual column spanning sections below for details on what and how values are supported for the column span number.

###SASS configuration variables
Through the use of the variables in the _config.scss file, you can control: 
* Number of columns
* The way columns will breakdown by breakpoint (i.e. if a 24 column should become 12 based at some point)
* Maximum width of the grid
* Prefixing of the grid and row classes
* Fixed column margin mode's fixed margins (standard, small, large)
* Mixed langauge support
* Breakpoint values for the 5 built in breakpoints/viewports
* Prefixing of the viewport specific classes (manual colspans and offsets)
* Toggle including of specific grid features, if not being used, can shave down final build size
* Toggle the ability for the grid features to be specifically tied to the way you configure your columns and column breakdowns, the default is false, which means all features are tied to their column number's direct percentages across all breakpoints. s-col-24-push-4 and l-col-24-push-4 will both push by the same percentage, 4/24.
```sass
$max-grid-width: 1600px !default;
$fixed-standard: 2px !default;
$fixed-small-margin: 2px !default; //4px fixed margin for start of small fixed option which steps up, 4px, 12px, 24px
$fixed-large-margin: 4px !default; //8px fixed margin for start of large fixed option which steps up, 8px, 24px, 48px
$grid-prefix: "ms-" !default;
$dirMixed: false !default; //Toggle for having mixed langauge support


//Flags to include specific features of the grid, can be toggled to fine tune your final build size.
$includePushPull: true !default;
$includeOffsets: true !default;
$includeVisibility: true !default;
$includeGridHelpers: true !default;
$includeRowHelpers: true !default;
$includeManualColspans: true !default;


//This value toggles if you want the manual column span, push/pull, and offset classes to honor the column breakdowns
//specified in the $columns variable below. This would make these features classes alter their behavior to match the 
//widths of columns as decided by their values below. ex) a s-col-1-4 would be 50% wide vs the normal 25% wide
$honorAutoColumnBreakdown: false !default; 
//Columns supported AND their associated "automatic" rwd column breakdown
//Can be any amount - 1 column doesn't need to be specfied
//Format for key/value pair - columnCount: (vp1col, vp2col, vp3col, vp4col, vp5col)
//The objects in this map can be decresed if not being used to fine tune your final build size.
$columns: (2: (1, 1, 2, 2, 2), 3: (1, 3, 3, 3, 3), 4: (1, 2, 4, 4, 4),
5: (1, 1, 5, 5, 5), 6: (1, 2, 3, 6, 6), 8: (2, 2, 4, 8, 8), 
12: (2, 4, 4, 12, 12), 24: (6, 12, 24, 24, 24));



//Grid breakpoints, different viewport sizes and list for mixin use
$vp1: 320px;
$vp2: 540px;
$vp3: 768px;
$vp4: 1084px;
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

| Columns | < 320px (mf) | > 320px (vp1) XS | > 540px (vp2) S | > 768px (vp3) M | > 1084px (vp4) L | > 1400px (vp5) XL |
|:-------:|:------------:|:-------------:|:-------------:|:-------------:|:-------------:|:--------------:|
|    1    |       1      |       1       |       1       |       1       |       1       |        1       |
|    2    |       1      |       1       |       1       |       2       |       2       |        2       |
|    3    |       1      |       1       |       3       |       3       |       3       |        3       |
|    4    |       1      |       1       |       2       |       4       |       4       |        4       |
|    5    |       1      |       1       |       1       |       5       |       5       |        5       |
|    6    |       1      |       1       |       2       |       3       |       6       |        6       |
|    8    |       2      |       2       |       2       |       4       |       8       |        8       |
|    12   |       2      |       2       |       4       |       4       |       12      |       12       |
|    24   |       6      |       6       |       12      |       24      |       24      |       24       |


### Manual column spanning
Manual column span class overrides are supported for all column counts and all breakpoints.
Here is the pattern for the classes:

viewport - col - # of columns to span - total # of columns

Examples:

`s-col-3-24` - 12.5% of the viewport - At the small(viewport 2) breakpoint and above, this column will span 3 columns of the 24 columns in the row.

`l-col-14-24` - 58.3333333333% of the viewport - At the large(viewport 4) breakpoint and above, this column will span 14 columns of the 24 columns in the row.

### Fluid vs. fixed gutter options
The grid can support fluid, fixed, and zero/no gutter options, all of which is configurable. By default the grid uses fluid gutters. If you want to use fixed gutters, you will add one of three helper classes: `fixed`, `fixed-small`, or `fixed-large`. Zero or no gutter uses the helper class `zero-margin`.

To apply these different gutter options, you place the corresponding helper class on the grid element or an individual row. Place on the grid if you want it to go across that entire grid. Place on an individual row if you'd like to scope the behavior to only that row.

Fluid - this is the default behavior.

`fixed` - stays at one value across all breakpoints, default is 4px.

`fixed-small` - starts at 4px, jumps to 12px at viewport 2, and to 24px at viewport 3.

`fixed-large` - starts at 8px, jumps to 24px at viewport 2, and to 48px at viewport 3.

`zero-margin` - removes all gutters between columns.

### Page margins
The grid supports two flavors of page margins. None or full width and an option with margin.

The default grid's page margins start at 12px, jump to 24px at vp2, 48px at vp3, and 5% at vp4.

The `full` class added on the grid element will enabled the no margin experience.

### Offsets
Using these classes will offset a column by a specified amount.

Here is the pattern for the classes:
viewport - col - total # of columns - offset - # of columns to offset

Example:
`l-col-8-offset-2` - This will offset the column by 2 column widths for an 8 column row above the large(viewport 4) breakpoint.

### Column ordering (push/pull)
Using these classes will allow you to change the built-in column ordering .

Here is the pattern for the classes:
Pull - viewport - col - total #of columns - pull - # of columns to pull over by
Push - viewport - col - total #of columns - push - # of columns to push over by

Example:
If these classes were used in conjunction on two adjacent columns, it would swap them, their order.

`l-col-24-pull-12` - This will pull the column over by 12 column widths for a 24 column row above the large(viewport 4) breakpoint.

`l-col-24-push-12` - This will push the column over by 12 column widths for a 24 column row above the large(viewport 4) breakpoint.


### Centered columns
Putting the `.centered` class on a single column will center it in that row.

### Vertically centering columns
In [browsers that support Flexbox](http://caniuse.com/#search=flexbox), putting the `.vertically-centered` or `.vc` class on a single row will align all items center which will vertically center them. Great for vertically centering text next to images.

### Horizontally centering all columns
In [browsers that support Flexbox](http://caniuse.com/#search=flexbox), putting the `.horizontally-centered` or `.hc` class on a single row will align all items center based on a flex direction of column which will horizontally center all of them. 

### No break
Putting the `.nb` class on a column will make it hold it's original width across all breakpoints.

Example:
An element with the classes of `class="col-1-4 nb` will always stay at a width of 25%.

### Prefixing of grid and row classes
The _config file has the variable named `$grid-prefix` where you can specify any prefixing that you would like added to all the `.grid` and `.row` classes. The default is `ms-`.

### Hiding and showing content
Helpers are available to you to hide, show, or make invisible content based on the breakpoints of the grid. Here is an example of the classes output for the default medium breakpoint.
```css
@media screen and (min-width: 768px) {
  .show-m {
    display: block;
    visibility: visible;
  }

  .hide-m {
    display: none;
    visibility: hidden;
  }

  .invisible-m {
    visibility: hidden;
  }
}
```

### jQuery plugin for preceding columns
There is a scenario where the CSS sibling selector, +, fails for the "automagic" mode. This selector only selects siblings that follow after and not preceding siblings. Because of this scenario, when a smaller column span could be used preceding a larger column span, those preceding columns need to be decorated with a class so that they can be selected. If you don't want to use the jQuery plugin, that is fine, but they will need to be decorated with a preceding class. Or add the small jQuery plugin that runs on load to decorate those classes automatically for you.

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
Without doing anything, IE8 will show the mobile first view. If that is not acceptable for your project, full IE8 support is supported by adding [Respond.js](https://github.com/scottjehl/Respond) to your project will allow it to behave as it does in modern browsers. Remember that if you're using any HTML5 elements (like section), you'll also want to add the [HTML5Shiv](https://github.com/aFarkas/html5shiv). Include this JS in the head of your HTML, putting in the conditional comment below will only serve it to browsers below IE9.
```html
<head>
	...
	...

    <!--[if lt IE 9]>
        <script src="/pathto/html5shiv.js"></script>
        <script src="/pathto/respond.js"></script>
    <![endif]-->
</head>
```