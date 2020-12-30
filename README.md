# UI internship

### Project installation

To install dependencies run:
 
```npm install```
 
### Basic commands

```npm run test``` - to execute unit tests

### Branching strategy for interns
1. Create a fork from the repo under your GitHub user.
2. Go to the fork you just created. Open "Settings" -> "Manage access". Provide a read access to your fork to all mentors (you may need to request their Github logins). Make sure that there is no access for the group `griddynamics/ui-internship-spb-rw`, if there is access for this group, then remove it from the list. There should only be mentors.
3. Inside your fork, create a branch named like `[ldap]/master`, where `[ldap]` - your username in Grid Dynamics system. This will be your main branch with all your changes.
4. Before each new task, you must create a new branch from `[ldap]/master` and name it like `[ldap]/[task_description]`.
5. After the task on which you worked is completed, you must create a Pull Request from the branch `[ldap]/[task_description]` to `[ldap]/master`.
6. Mentors review your changes.
7. When review is over and you have received approval from the mentor, you have to merge the branch `[ldap]/[task_description]` to `[ldap]/master`.

### How to update your fork from upstream

First in your forked repo add this repository as an upstream (upstream is just an alias):
```git remote add upstream https://github.com/griddynamics/ui-internship-spb```

Then on your master branch run:

1. ``` git fetch upstream ``` *(get all updates from the upstream)*

2. ```git rebase upstream/master```

3. ```git push```

Then you master branch will be up-to-date with upstream

***To update a specific branch:***

1. Checkout your branch

2. ```git fetch upstream```

3. ```git rebase upstream/master``` or ```git merge upstream/master```

4. ```git push```
