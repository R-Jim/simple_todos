# Meteor - Project Seeder
  - [x] Meteor 1.8.0.2
  - [x] React 16.4
  - [x] Redux 4.0
  - [x] Saga 0.16
  - [x] Antd for basic styling element

## Usage
* **Required**: Change the project name in package.json file
* `meteor npm install yarn -g`: Install yarn for meteor command
* `yarn dev` : Run the project and start coding

**Note:** Please always user `meteor yarn` instead of `yarn` standalone

## Structure and architecture

```
Root
 |-client
 |--|-head.html
 |--|-main.js
 |
 |-imports // All of potential code will be here
 |--|-api // server API moduler
 |--|--|-users
 |--|--|--|-server
 |--|--|--|--|-publications.js // users publication functions
 |--|--|--|-methods.js // Users server methods
 |--|--|--|-users.js // Users schema & mongo definition
 |--|-lib
 |--|-startup
 |--|--|-both
 |--|--|-client
 |--|--|-server
 |--|
 |--|-ui // All of front-end code will be here including React, Redux, Saga 
 |--|--|-components // Each component should have its own folder which contains component files & index file
 |--|--|--|-Login // All component files & folders should be capitalized
 |--|--|--|--|-Login.js // React component file
 |--|--|--|--|-index.js // where we can export everything from Login folder
 |--|--|-containers // Same structure as components folder
 |--|--|-helpers
 |--|--|-layouts
 |--|--|-pages \\ pages index should be created here
 |--|--|-reducers
 |--|--|-sagas
 |--|--|-store
 |--|--|-stylesheets
 |--|--|-utils
 |
 |-server
 |--|-main.js
 |-public
```

## Coding Workflow

This project uses the git forking workflow, https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow
And git-flow, https://bitbucket.org/zigvy/git-flow/src/master/ or https://jeffkreeftmeijer.com/git-flow/

It's OK to leave questions hanging in slack, for someone who isn't there at the moment but will be later. So each shift should start with a review of slack, "question grooming" activity, along with the usual ticket-grooming.

Clone the repo, commit frequently, make a PR for dicussion early (and if you think it's ready to merge then say so).

Try to push to your commits at least once an hour, and write commit messages "in the imperative mood". Read this if you haven't already: http://chris.beams.io/posts/git-commit/

Each commit should do one thing. It's no problem making lots of small commits, it's actualy much better than infrequent large commit because they are easier to review.

## Github workflow

We use the Pull Request system of github.
You first need to fork the repo.

For creating a PR please follow this :

* Fetch the upstream master & develop : `git fetch upstream/master && git fetch upstream/develop`
* Switch to `develop` branch.
* Create a new clean branch : `git checkout --track -b myNewBranch upstream/develop` , a good practice is to following [git-flow](https://jeffkreeftmeijer.com/git-flow/) (  you should not use the master of your own remote ( `origin` ) as a dev branch , your master should be equal to the `upstream/master` )
* Do your work, *make commits*, you should create directly a PR and *push your work frequently*.
* If other devs push commits , you should rebase your own branch. you fetch again `git fetch upstream/develop` and `git rebase upstream/develop` ( you can also use the interactive rebase to squash your commit into one `git rebase -i upstream/develop` )
* If you have conflict , you have to resolve each conflict on each commit , do it manually or add `kdiff3` / `Beyond Compare` or anything that fit you , add these modification and do `git rebase --continue` until you cleared the conflicts.
* Test your code.
* You can now push your code , if the branch is new you just do git `push origin myNewBranch` , if you had rebase you need to force the `push git push origin myNewBranch -f`
* Create the PR , with a new branch github detect it automatically you should see a yellow bar on main page. MOST IMPORTANT, point the PR to `develop` branch
* When the PR is merged , delete you local and remote branch

**More you rebase your branch often, less you get problems. So don't wait ! You should rebase each time a commit is added to the upstream/master.**

**DISCLAIMER** : Use *`push -f`* only with **Fork and PR project** like here, never on a project were everyone is working on the **same remote**. Your rewrite commits history.
