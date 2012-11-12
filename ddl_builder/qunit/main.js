define([
	"jQuery",
	"QUnit",
	"text!./fixture.html",
	"./columnTypes",
	"./guessValueSeparators",
	"./headerNames",
	"./recordCount", 
	"DDLBuilder/ddl_builder"
	], 

	function ($,QUnit,fixtureContent,
			columnTypes,guessValueSeparators,
			headerNames,recordCount,
			DDLBuilder) {
		
		$("#qunit-fixture").append(fixtureContent);
		
		$("#qunit-fixture #ddlInputText span").each(function () {
			var $this = $(this);
			QUnit.test("Parsing " + $this.attr('id'), function () {
				columnTypes($this.attr('id'), $this.attr('types'));
				guessValueSeparators($this.attr('id'), $this.attr('valueSeparator'));
				headerNames($this.attr('id'), $this.attr('headers'));
				recordCount($this.attr('id'), $this.attr('recordCount'));
			});
		});
		
		QUnit.test("Various date format parsing attempts", function () {
			var content = $("#qunit-fixture #dateParse").html(),
				ddl_builder = new DDLBuilder({ddlTemplate: "[{{#each_with_index data}}{{#if index}},{{/if}}[{{#each_with_index r}}{{#if index}}, {{/if}}\"{{formatted_field ../..}}\"{{/each_with_index}}]{{/each_with_index}}]"}),
				result = ddl_builder.parse(content),
				parsedResult=null,i=0;

			try {
				parsedResult = $.parseJSON(result); 
			} catch (err){}
			
			if (parsedResult) {
				for (i in parsedResult) {
					QUnit.equal(parsedResult[i][0], parsedResult[i][1], "Input date matches output date");
				}
			}
			else
				QUnit.ok(false, "Reading date data failed: Unable to parse result to JSON array ("+ result +")");
			
		});
	}
);