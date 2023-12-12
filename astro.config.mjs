import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
// import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({
    edgeMiddleware: true
  }),

  integrations: [
    // starlight({
    //   title: 'Nurl Developers',
    //   description: 'The official community and resource to build extensions for Nurl.',

    //   locales: {
    //     root: {
    //       label: 'English',
    //       lang: 'en',
    //     }
    //   },

    //   social: {
    //     discord: 'https://discord.gg/YCP8NgrKES',
    //     github: 'https://github.com/nurl-inc',
    //     linkedin: 'https://www.linkedin.com/company/nurl',
    //     twitch: 'https://www.twitch.tv/nurl_app',
    //     twitter: 'https://twitter.com/nurl_inc',
    //   },

    //   editLink: {
    //     baseUrl: 'https://github.com/nurl-inc/developers/edit/main'
    //   },
    //   lastUpdated: true,
    // })
  ]
});