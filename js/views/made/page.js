define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/made/page.html'
], function($, _, Backbone, madePageTemplate){
  var MadePage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(madePageTemplate);
    }
  });
  return MadePage;
});
