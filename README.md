# Two Twenties

Ghost theme [Two Twenties](www.twotwenties.com) uses, with disqus comments.


Customizing:

- replace "@yourusername" with your own twitter handle in default.hbs , lines 44,45,60,61
- replace 'example' with your own disqus shortname in post.hbs , line 34
- add link to photo and text to page-about.hbs (if you want an about page)
- customize the menu links in partials/navmenu.hbs
- replace "username" with your own SM accounts in partials/navmenu.hbs , lines 44-47
- customize the three header images in partials/headerimg.hbs : add link, title, description and background image
- I disabled a lot of meta tags Ghost inputs by default. If you're getting duplicate meta tags when using this theme, you can either delete the hardcoded ones in default.hbs, or [disable them](http://support.ghost.org/config/#privacy) in Ghost's config.js

I use [picturefill](http://scottjehl.github.io/picturefill/).