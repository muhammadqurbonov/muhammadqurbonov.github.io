# Senova Tech portfolio

Static site (no build step). Open `index.html` or publish the folder on GitHub Pages.

```
index.html            page shell (header, empty page sections, footer)
css/style.css         main styles and animations
css/crm.css           styles used only by the Senova CRM page
js/core.js            language variable and $ helper
js/i18n.js            main site texts (RU / TJ / EN)
js/data.js            links, labels, images map, icons
js/projects.js        project cards
js/pages/*.js         detail pages: WarePro, Intellect Arena, Senova CRM (+ crm-content.js texts)
js/effects.js         animations
js/app.js             routing, rendering, start
assets/img/           all images
```

To add a project: add it to `T` in `i18n.js` (or `PR` in `projects.js`), put its cover in `assets/img/` and register it in `IMG` (`data.js`).
