# Let's Run Away Together

My personal blog on art, design and music, written somewhere between London and Melbourne. Built with [Jekyll](https://jekyllrb.com/) and served by GitHub Pages from the `gh-pages` branch.

Status: archived. Made in 2015, with the last post in 2017. Not maintained.

Live: https://letsrunawaytogether.com/

## Running it

```sh
npm install
bundle
cp -R node_modules/bootstrap-sass/assets/stylesheets/ _sass/bootstrap
bundle exec gulp
```

The `cp` step copies the Bootstrap styles into `_sass`, since GitHub Pages builds the site without a compile step. `bundle exec gulp` builds the site with drafts and serves it with Browsersync. The tooling is old (Gulp 3), so it may need an older version of Node.

## How it works

- Posts live in `_posts`, with layouts, includes and styles in `_layouts`, `_includes` and `_sass`.
- I wanted to be able to edit the site directly on GitHub, so there is no build step before deploying. GitHub Pages runs Jekyll itself.
- `_config.yml` also holds settings for the Prose editor, and `.forestry` holds settings for Forestry, which I later used to edit posts.
