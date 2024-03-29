# Social Flashcards

This is an app that allows people to easily create flashcards and track their learning of them.

It is social in the sense that users are notified of the flashcards that others create, and can easily import any flashcards they find useful.

## online site

- this app is online here: https://soflash.vercel.app

## team

- currently [Edward Tanguay](https://github.com/edwardtanguay) is the only developer of this project
- this is a project in the [Online Learning Club](https://github.com/Underground-Learning-Club)
- anyone is free to join

## project board

- find tasks here in the [project board](https://github.com/orgs/Underground-Learning-Club/projects/6/views/6?visibleFields=%5B%22Title%22%2C%22Assignees%22%2C%22Status%22%2C%22Labels%22%5D)

## general plan

- this is an app that I want to build because I want to use it
- I enjoy learning languages and want to have an app available on my smart phone and computer where I can add and test myself on flashcards
- the app should also be for non-language categories such as e.g. vim, git, React, classical music, etc. 

## technical plan

- I am building this with Vite React because it is the framework I know best
- also, I want to build a backend for it that I host on Render, since I teach a webdev class and want to have a real project with 
  - backend at Render.com
  - frontend at Vercel
- because of the lag time at Render, I will eventually host the backend at Cypress or Hetzner

## roadmap

- I first want to get an app that I actually use, e.g. with real flashcards (e.g. Polish, a language I'm currently learning) which appear readable on my smart phone and which I can click to hide/show
- the next tasks will come from the features I think up that I want as I use the app

## generating flashcards

- this site will first run on a JSON file as a database until we get an online database for users with authentication, etc.
- if you want to generate flashcards for this site, see `src/data/flashcards.json`
- to create a random **Short Unique ID**, generate one here: https://shortunique.id
- currently you just need to create for each object:
  - id = short unique id
  - category
    - `pl` = Polish
    - `fr` = Frensh
    - `es` = Spanish
  - front
  - back
