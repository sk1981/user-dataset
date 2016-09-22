# User Data Set Application

## Introduction
A simple application to manage a user's data set. It enables us to :-
* Add/Update/Delete users
* Add traits about users
* Filter users based on traits
* Have a side bar to display the data

## Architecture Decisions
#### SPA Library

#### CSS Preprocessor
* Decision between SASS, PostCSS and Less
* Chose SASS for for it's fast compilation (as it's written in C) and standardized implementation.

#### Data Flow
* Choice between Flux implementation (Redux) or pure React parent child communication
* As the problem is simple, not using flux to avoid extra indirection
* More reading on this : https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367

#### GRID
* Choice was between using a grid library or providing a custom implementation.
* Most grids were quite heavy and provided lots of different functionality
 which was not required for our simple case.
* To keep things simple and keep page size under limit, I decided to write a simple implementation.

#### Module Bundler
* Choice between webpack, browserify or rollup
* Rollup's biggest benefit i.e. Tree Shaking will not work with current React version
and is going to be present in webpack 2.0
* Went with webpack for it's bigger community support and
 ease of using features like bundle splitting and creating object graph

 #### Testing

## Design

## Future Enhancements
* Integrate with error and analytics service