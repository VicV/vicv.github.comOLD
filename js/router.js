// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
	'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      '/know': 'know',	
      '/made': 'made',
      '/worked': 'worked',
      '/manager': 'manager',
    
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){
		var appView = options.appView;
    var router = new AppRouter(options);
		router.on('route:made', function () {
			require(['views/made/page'], function (MadePage) {
				var madePage = Vm.create(appView, 'MadePage', MadePage);
				madePage.render();
			});
		});
		router.on('route:defaultAction', function (actions) {
			require(['views/dashboard/page'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
        dashboardPage.render();
      });
		});
		router.on('route:know', function () {
	   require(['views/know/page'], function (KnowPage) {
        var knowPage = Vm.create(appView, 'KnowPage', KnowPage);
        knowPage.render();
      });	  	
		});
		router.on('route:worked', function (section) {
      require(['views/worked/page'], function (WorkedPage) {
        var workedPage = Vm.create(appView, 'WorkedPage', WorkedPage);
        workedPage.render();
      });
		});
		router.on('route:manager', function () {
			require(['views/manager/page'], function (ManagerPage) {
				var managerPage = Vm.create(appView, 'ManagerPage', ManagerPage);
				managerPage.render();
			});
		});
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
