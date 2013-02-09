define(['SocialNetView', 'models/Contact', 'views/Contact', 'text!templacts/addcontact.html'], function(SocialNetView, Contact, ContactView, addContactTemplate) {
	var addContactView = SocialNetView.extend({
		el: $('#content'),

		events: {
			"Submit form": "search"
		},

		search: function() {
			var view = this;
			$.post('/contacts/find', this.$('form').serialize(), function(data) {
				view.render(data);
			}).error(function() {
				$("#results").text('No contacts found');
				$("#results").slideDown();
			});
			return false;
		},

		render: function(resultList){
			var view = this;
			this.$el.html(_.template(addContactTemplate));
			if(null != resultList){
				_.each(resultList, function (contactJson){
					var contactModel = new Contact(contactJson);
					var contactHtml = (new ContactView({addButton: true, model: contactModel})).render().el;
					$('#results').append(contactHtml);
				});
			}
		}
	});

	return addContactView;
})