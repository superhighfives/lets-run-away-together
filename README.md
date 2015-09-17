# Let's Run Away Together

My personal artsy blog on music and culture and pretty pictures and stuff. Built with [Jekyll](http://jekyllrb.com/) and deployed directly to [Github Pages](https://pages.github.com/) via the `gh-pages` branch.

I focussed on working within the limitations of Jekyll and Github Pages, which means no compilation step before deployment, and no fancy features (like autoprefixer). Ultimately, I wanted to be able to make changes direct to Github, without needing to compile it locally.

Anything non-compilation on the dev side is fine though, which is why Browsersync features. Because it's awesome.

## Fire it up

- Run `npm install` (you'll need [Node](http://nodejs.org/).)
- Run `cp -R node_modules/bootstrap-sass/assets/stylesheets/ _sass/bootstrap` to copy the latest `bootstrap-sass` stylesheets into `_sass` (Not ideal, obviously, but like I said, no compilation step. I guess it could have node_packages in the _sass directory, but it seems a bit bloaty? You tell me, new best friend.)
- Run `gulp`

Any suggestions or feedback, let me know!
