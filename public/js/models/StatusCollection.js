define(['models/Status'], function(Status){
	var statusCollection = Backbone.Collection.extend({
		model:Status
	});
	return statusCollection;
});