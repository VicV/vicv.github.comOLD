define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/know/page.html'
], function($, _, Backbone, knowPageTemplate){
  var KnowPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(knowPageTemplate);
    }
  });
  return KnowPage;
});
