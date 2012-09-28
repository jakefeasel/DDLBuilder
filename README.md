#DDL Builder

##About

This code uses JavaScript to parse plain text, tabular data and transform it into valid DDL and DML scripts, usable for immediate insertion into a database.

The plain text can be formatted in any number of different ways. The only assumptions are that the first row contains the header names, and that there is a consistent delimiter between each "cell". See ddl_builder/qunit/fixture.html for examples of the variety of formats supported.

The code will determine the proper column type based on the data provided, including field length (based on the longest value).

Right now, the database products supported are MySQL, Oracle, PostgreSQL, SQLite, and MS SQL Server (2008+).

This was originally developed as a utility for [SQL Fiddle](http://sqlfiddle.com), to aid in the rapid construction of mock databases based on the text provided by people when they ask questions on sites like [StackOverflow](http://stackoverflow.com).

##Running the example

I've provided an extremely simple plain HTML UI that makes uses of this library.  If you download this project into any web-accessible folder and browse to <DDLBuilder>/index.html, you will have the option to add input text and transform it into the expected DDL/DML.

This should provide sufficient clarity as to how the whole thing works.  If you are a bit lost, I suggest looking at /main.js; this contains the dependency loading, instantiation, UI bindings and execution calls that are used to make the library do useful things.  You'll need to do something quite similar to make it work in your project.

You can move around some of the paths of things fairly easily; you'll just need to make sure that wherever you move them, you update the paths in your main call to *requirejs.config()*.

You can also run the QUnit tests by browsing to <DDLBuilder>/qunit.html

##Technologies used

 - [RequireJS](http://requirejs.org) for dependency management and module loading
 - [jQuery](http://jquery.org) core, miscellaneous JS library
 - [Handlebars](http://handlebarsjs.org) JavaScript templates, used primarily for specifying output formats
 - [Steven Levithan's Date Format](http://blog.stevenlevithan.com/archives/date-time-format) for formatting dates (naturally) in the output
 - [QUnit](http://qunitjs.com) for Unit testing

##License

Copyright Jake Feasel, 2012

Released under the terms of the MIT License.