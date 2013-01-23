
requirejs.config({
	paths: {
		jQuery: 'libs/jquery',
		Handlebars: 'libs/handlebars-1.0.8',
		HandlebarsHelpers: 'ddl_builder/handlebarsHelpers',
		DateFormat: 'libs/date.format',
		DDLBuilder: 'ddl_builder',
		QUnit: 'libs/qunit-1.10.0'
	},
	
	shim: {
		jQuery: {
			exports: '$'
		},
		Handlebars: {
			exports: 'Handlebars'
		},
		DateFormat: {
			exports: 'dateFormat'
		},
		QUnit: {
			exports: function () { return { "test": test, "equal": equal, "ok": ok }; }
		}
	}
	
});	

require(["jQuery", "DDLBuilder/qunit/main"], function () {});