# my-portfolio

## Getting started with Strapi

[https://www.youtube.com/watch?v=A3nnoMKx5hU](https://www.youtube.com/watch?v=A3nnoMKx5hU)

## Gatsby Strapi blog

I am just following this tutorial
[https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi](https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi)

## Theming with styled-components (This might be useful for random theme changes, but not for global styles as I should use [CSS custom props](https://daily.dev/posts/theming-styled-components-with-css-custom-properties))

[https://styled-components.com/docs/advanced#theming](https://styled-components.com/docs/advanced#theming)

# i18n

[https://www.gatsbyjs.com/blog/2020-02-19-how-to-build-multilingual-sites-with-gatsby/](https://www.gatsbyjs.com/blog/2020-02-19-how-to-build-multilingual-sites-with-gatsby/)
https://dev.to/louisbertin/multilingual-website-with-gatsby-and-contentful-part-2-25pf

## Hiding mailto from bots

[https://dev.to/hkievet/react-protecting-an-email-address-3cp0](https://dev.to/hkievet/react-protecting-an-email-address-3cp0)

## Image Sharp support with strapi & gatsby-source-graphql

[https://levelup.gitconnected.com/strapi-dynamic-zone-and-gatbsy-image-6f29b6bb0f0](https://levelup.gitconnected.com/strapi-dynamic-zone-and-gatbsy-image-6f29b6bb0f0)




(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})

## Todo

- Redirect /fr to / with the new version of "gatsby-plugin-intl"
- True data localization with the upcoming strapi feature : right now query both languages and interpolate locale variable names in the javascript part OR conditional queries based on locale.


## Launching PM2

from the /portfolio folder

cd front
pm2 start npm --name "front" -- run serve
cd ../cms
pm2 start npm --name "cms" -- run start
cd ../sockets
pm2 start npm --name "sockets" -- run start

## Troubles

- Make sure you use node 14

## List apps running on port

`lsof -i:8000`

then use

`kill 8698`

"8698" being the PID