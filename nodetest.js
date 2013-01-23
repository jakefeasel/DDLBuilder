var jsdom = require("jsdom"),
	fs = require("fs"),
	requirejs = require("requirejs");


fs.readFile("qunit.html","utf8", function (err, data) { 
	jsdom.env(data, [], function(errors, window) {

		//glabals needed for QUnit
		(function() {
			this.addEventListener = window.addEventListener; 
			this.location = this.location || {};
			this.location.pathname= "";
			this.location.search = "";
		}.call());
		document = window.document;
		navigator = {userAgent: "nodejs"};
		
		requirejs.config({
			paths: {
				Handlebars: 'libs/handlebars-1.0.8',
				HandlebarsHelpers: 'ddl_builder/handlebarsHelpers',
				DateFormat: 'libs/date.format',
				DDLBuilder: 'ddl_builder',
				QUnit: 'libs/qunit-1.10.0'
			},
			
			shim: {
				Handlebars: {
					exports: 'Handlebars'
				},
				DateFormat: {
					exports: "dateFormat"
				},
				QUnit: {
					exports: function () {
						return { "test": test, "equal": equal, "ok": ok, 
								 "load": QUnit.load, "done": QUnit.done }; 
					}
				}
			}
			
		});
		
		// silly hack to push the proper jQuery reference into the requirejs cache
		requirejs.define("jQuery", function () {
			return require("jquery").create(window);
		});
		
		requirejs(["jQuery", "QUnit", "DDLBuilder/qunit/main"], function ($, QUnit) {
			QUnit.load();
			QUnit.done(function (details) {
				console.log(details);
				if ($("#qunit-tests li.fail").length) {
					console.log($("#qunit-tests li.fail").html());
				}
				
				process.exit(details.failed);
			});
		});
	});
});