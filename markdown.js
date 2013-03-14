(function(window, document, $, Showdown) {
	"use strict";

	var markdownPath = 'README.md';

	$.when (
		$.get ( markdownPath ),
		$(document).ready()
	).then( onDataLoad, onDataFail );

	function onDataLoad ( markdownData ) {
		var markdownString = markdownData[0];
		var converter = new Showdown.converter();
		var html = converter.makeHtml(markdownString);
		$('#content').append(html);
	}

	function onDataFail ( error ) {
		$('#content').html('Error loading markdown data. Please try again.');
	}

}(window, document, jQuery, Showdown));
