<p align="center">
  <a href="https://github.com/AlexNti/star-wars">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="Star Wars Wiki" width="300" />
  </a>
</p>

<h1 align="center">Find details about your favourite Star Wars Characters!</h1>

## Features 🚀

- Access characters
- Access starships
- Access planets
- Favourite the character of your preference

## Usefull comands

```sh
$ yarn # install depedencies

$ yarn start #start the app
```

## Usage

To start using the our app, please follow these steps:

1. Open your browser at [localhost:3000](http://localhost:3000/) (prerequisites you should have run the installation and run script first)
2. You should be able to see the main page with the people characters on it.
3. By clicking one character you navigate in the profile page of this character
4. While you are at the profile page you are able to click to their planet or starship and view details for those as well
5. You can navigate through tabs to see lists of starships and planets as well.
6. At the people tab you can click and favourite a character of you preference. Later you can see that character at the favourites tab.

## Contributing

Feel like contributing? That's awesome!
Lets talk about our coding practices and folder structure.

1. Try to follow the structure of our application, if you want to create a new feature folder and place inside the following
   - api: Here we have store all the api calls that our feature is going to use.
   - hooks: We store hoooks that are specific to that feature.
   - services: We can use services to store files that contains logic that needs to be export to be used by some other component or hook. maybe we want something like an authentication service that expose some functions and those function are going to be used in a hook. or something like a middleware between our api calls and the hook that we are going to use id.
   - components: Components that are going to be used for the specific feature are being stored here.
   - constants: Every variable that is being sharable accross the whole app

## Todo

- [] impovements

  - [] Add tests and setup files.
  - [] Try to see if we abstract the useWikiPeople,useWikiPlanets and useWikiStarships in a single function.
  - [] Better naming for WIKI and WikiPage the naming might lead to confusion
  - [] Same applies for character-people
  - [] We can try to generalize the errors and loading states.
  - [] keep the state of accordion when navigating fron and back in the page.
  - [] Use context at favourites can lead to perfomance issue when app is scaling, for now it just fine but we have to consider optimazing or changing the way we manage the local state.

- [] Futures additions
  - [] Pagination (some of the work has already been done components,functions,etc)
