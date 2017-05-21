import '../styles/main.scss'
import * as hbs from '../templates'
import 'bootstrap'

console.log(hbs)

const data = {
  "headline": "Webpack2 Starter Kit",
  "copy": "Yet another boilerplate including",
  "tools": [
    {
      "title": "Handlebars",
      "description": "An easy template language"
    },
    {
      "title": "SCSS",
      "description": "CSS Precompiler"
    },
    {
      "title": "Foundation Framework (SASS)"
    }
  ]
}

document.addEventListener("DOMContentLoaded", function() {
    $("#main").html(hbs.main(data))
})
