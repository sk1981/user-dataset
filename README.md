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

#### GRID
* Use library or roll own

#### Module Bundler
* Choice between webpack, browserify or rollup
* Rollup's biggest benefit i.e. Tree Shaking will not work with current React version
and is going to be present in webpack 2.0
* Went with webpack for it's bigger community support and
 ease of using features like bundle splitting and creating object graph

 #### Testing

## Design

## Future Enhancements