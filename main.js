
requirejs.config({
	paths: {
		jQuery: 'libs/jquery',
		Handlebars: 'libs/handlebars-1.0.8',
		HandlebarsHelpers: 'ddl_builder/handlebarsHelpers',
		DateFormat: 'libs/date.format',
		DDLBuilder: 'ddl_builder'
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
		}
	}
	
});	

require(["jQuery", "DDLBuilder/ddl_builder"], function ($, ddl_builder) {

	$("#parseBtn").on('click', function () {
		var dbType = $("#dbType").val(),
			terminator = $("#terminator").val(),
			builder = new ddl_builder();

		
		builder.setupForDBType(dbType,terminator);
		
		$("#output").val(
			builder.parse( $("#input").val() )
			);
		
	});
});