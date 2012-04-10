define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/want/page.html'
], function($, _, Backbone, Vm, wantPageTemplate){
  var WantPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(wantPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		counter: 1,
		addView: function () {
			var RandomView = Backbone.View.extend({})
			var randomView = Vm.create(this, 'RandomView ' + this.counter, RandomView);
			this.counter++;
			return false;
		}
  });
  return WantPage;
});
