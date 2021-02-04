## GitHub Workflow & Contribution guidelines

The process is similar to GitHub Flow - https://guides.github.com/introduction/flow/index.html

#### GitHub master vs main
GitHub recently changed their naming convention for default branches. These were called `master` before. But new GitHub repositories have `main` as the default branch.

Original Repo - ***ORIG/repo_name***
Fork - ***FORK/repo_name***

## Fork the repository
On GitHub, fork the repository - https://docs.github.com/en/github/getting-started-with-github/fork-a-repo

## Clone the fork locally

```
  # clone the repo
  > git clone FORK/repo_name
```

You should now be on the `master` or `main` branch of your fork. You can also verify this through

``` 
  > git branch
```

## Setup upstream repo (ORIG/repo_name)
So far we only set up the fork locally. We need to also add a reference (called `upstream`) to the `ORIG/repo_name`. 

***Note: You can name “upstream” to anything!***

```
> git remote add upstream ORIG/repo_name
```

Check to make sure you have two remotes,

```
  > git remote -v
```

This should show both `origin` (`FORK/repo_name`) and the `upstream` (`ORIG/repo_name`)

## Sync/update from upstream
To pull changes from `ORIG/repo_name`

***Note: make sure you are on `master`!***

```
  > git branch 
  # should show you are currently on master
  > git pull upstream master
```

## Create a feature Branch

***Note: Always create a feature branch from `master/main` branch. Make sure your `upstream` is upto date from the previous step***

We recommend creating a feature branch for the task

```
  > git checkout -b <feature_branch_name>
```

git should automatically change to the new branch. Also verify using

```
  > git branch
```

Make your changes and commits. Now we need to push these changes back to the original repository (`ORIG/repo_name`), A couple of things can happen while you are working on the feature branch


#### 1. Original repo has NO new commits
Push changes to your fork and Send a PR!

To push your changes 

```
  > git push origin <feature_branch_name>
```

***SEND A PR!***

#### 2. Original repo has new commits
Make sure `upstream` is synced (checkout the section on ***Sync/update from upstream***)

Switch to the feature branch and rebase with `master`

```
  > git checkout -b <feature_branch_name>
  > git rebase master
```

git will tell you if there are any conflicts during the process. Fix the conflicts and continue

```
  > git rebase --continue
```

Once the rebase is complete, you feature branch is now in sync with master/main

You have two options to send a PR

##### a) (RECOMMENDED) Send a PR from this branch 

Push changes to GitHub and send a PR

```
  > git push origin <feature_branch_name>
```

***SEND A PR!***

##### b) (NOT RECOMMENDED) Merge these changes with `master` and send a PR from `master`

To merge your feature branch with master 

```
  > git checkout master
  > git merge feature_branch
```

Since we rebased earlier, there should not be any merge conflicts. 

Now push these changes to your fork

```
  > git push origin master
```

***SEND A PR!***

Working on a new Feature, Go back to ***Sync/update from upstream***
