define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/fun/page.html'
], function($, _, Backbone, Vm, funPageTemplate){
  var FunPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(funPageTemplate);
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
  return FunPage;
});
