define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/Worked/page.html',
], function($, _, Backbone, Vm, WorkedPageTemplate, SidemenuView, SectionView){
  var WorkedPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(WorkedPageTemplate);
    }
  });
  return WorkedPage;
});
