
+# So You Want to Understand Whats Going On in This Backbone Experiment  
 	 2	
+
 	 3	
+## To begin:
 	 4	
+
 	 5	
+It doesn't make much sense, but I will try to help as much as I can, because the tutorials and comments aren't much help at all. 
 	 6	
+
 	 7	
+It won't help much that this document will become irrelevant to the actual application it is for, so as a starting point, download the backbone boilerplate from here: `http://backboneboilerplate.com/`
 	 8	
+
 	 9	
+If you are looking at this around March 7 2012, just looking at "Boilerplate" in the Experiments file in the Wheatley repository. Add that to your webserver and we'll get started.
 	 10	
+
 	 11	
+## [root]/js/main.js:
 	 12	
+
 	 13	
+This guy here is basically the main outline of how the app works. 
 	 14	
+
 	 15	
+In the `paths:` section, we have the JS libraries that we are going to be using, as well as some require.js (http://requirejs.org/) plugins (whose including are important, though I am unaware of what they do).
 	 16	
+
 	 17	
+The `templates: ../templates` addition to paths is important. This references the templates folder outside of the `/js` directory. Its just something small to add to keep anything that isn't a .js file out of the `/js` directory. This is pretty useful.
 	 18	
+
 	 19	
+Then, we get to the actual start of the application:
 	 20	
+
 	 21	
+`views/app` is where we're going to go next, and the router section is a big part that I will explain after that.
 	 22	
+
 	 23	
+# [root]/js/views/app.js:
 	 24	
+
 	 25	
+At the start of nearly every .js file now, you'll see the `define(` area. It includes all of the libraries defined in the `main.js` file, and then points the current page to a specific .HTML file (or whatever kind of file you want).
 	 26	
+
 	 27	
+This is the `text!templates/layout.html`
 	 28	
+This loads that specific html into view. In this case, the `layout.html` file has a lot of divs I don't understand (sorry).
 	 29	
+
 	 30	
+> **Note from Rob:** So the divs: There's not too much to them, it's basically just
 	 31	
+> breaking the page into a standard header/content/footer layout. The "clear" 
 	 32	
+> property of the styles just ensures that any floating (eg `float:left` in css) done in 
 	 33	
+> each of those sections doesn't carry over into the next.
 	 34	
+
 	 35	
+This is why there is a `boilerplate.js` file in the `/js` directory. Use that to start any .js file, because it has all of these definitions in it for you already.
 	 36	
+
 	 37	
+In the Function:
 	 38	
+
 	 39	
+    el: '.container'
 	 40	
+
 	 41	
+Points this element to the .css
 	 42	
+
 	 43	
+    Render: function
 	 44	
+
 	 45	
+This is what actually starts creating the view, check out this tutorial for an explanation on it all: http://backbonetutorials.com/what-is-a-view/
 	 46	
+
 	 47	
+Once you've done that, you'll notice that we use `$(this.el).html` instead of `this.el.html`. That is because `this.el.html` doesn't work in the new `backbone.js`. Keep that in mind. 
 	 48	
+
 	 49	
+So what you'll see is that we use `$(this.el).html` to set the current view to include `layout.html`, which has that big title text and a bunch of divs that I don't understand.
 	 50	
+
 	 51	
+After that, it uses require to also render the Header, (it points to `views/header/menu.js`) and we're going to take a detour from `app.js` to explain that:
 	 52	
+
 	 53	
+## [root]/js/views/header/menu.js
 	 54	
+
 	 55	
+So `app.js` referenced this, and I'll explain how they render it in:
 	 56	
+
 	 57	
+Notice how it has the same general outline as `boilerplate.js`. Get used to that. Also notice that the html file it is referencing now is `menu.html`.
 	 58	
+
 	 59	
+A lot of this entire thing is just applying css styles to it. Explaining css files is not something I can do, so just take a look at theme.css and menus.css and you can probably link together whats going on. What I wanted to highlight by going here, is that the page is starting to become a bunch of different .html files mashed together. Pretty neat, huh?
 	 60	
+
 	 61	
+And because `menu.js` is called in the initial `app.js`, it stays up there providing a constant functionality (example: http://backstrapp.jollyscience.com/#). Awesome, huh? We'll be coming back to `menu.html` very soon to explain how to actually use it properly.
 	 62	
+
 	 63	
+We'll need to start looking at router.js to explain how everything is going to work together.
 	 64	
+
 	 65	
+## [root]/js/router.js:
 	 66	
+
 	 67	
+First thing is first, take a look at this: http://backbonetutorials.com/what-is-a-router/
 	 68	
+
 	 69	
+We don't deviate far from that except for the fact that we use `require.js`
 	 70	
+
 	 71	
+As a refresher: In the `routes:` section, we have all of the possible routes we can use. If you take a look at `menu.html`, all of these routes are defined there. So if you're planning on adding a new page, you have to add the route  to `router.js` and the link to that menu.
 	 72	
+
 	 73	
+Just like we saw in `app.js`, each route points to the related `page.js` using the require feature, and each related `page.js` works the same as `menu.js`.
 	 74	
+
 	 75	
+Notice that the default shown page is set to the dashboard.
 	 76	
+
 	 77	
+## Wrap-up:
 	 78	
+
 	 79	
+So, thats basically it! Currently there are no models in here, so I will go over that later.
 	 80	
+
 	 81	
+Just remember, for new pages:
 	 82	
+
 	 83	
+* templates go in `templates/pagename/page.html` (or whatever you wish to call it I suppose)
 	 84	
+* the related javascript files go into  `/views/pagename/page.js`
 	 85	
+* to add to that top bar, add the route into `menu.html`, and add the route to `router.js`.
 	 86	
+
 	 87	
+I'll be looking into how to add more functionality now and will update this accordingly.
 	  	
\ No newline at end of file