
# Source Control ?
<img src="/images/SourceControl/Git.jpg"/>
Source cotrol is the tracking and management of changes to code. This ensures that developers are always working on the right version of source code.
Source control management (SCM) refers to tools that help you keep track of your code with a complete history of changes.
Source control is important for maintaining a single source of truth for development teams. Using it helps facilitate collaboration and accelerates release velocity.

Some benefits of source control are:
- It allows multiple developers to work on the same codebase.
- Developers can commit and merge code without conflicts.
- Developers can edit shared code without unknowingly overwriting each other’s work.

Here are five tips to keep in mind:
- Choose the right system. (Helix Core is a great one.)
- Store your code in the system.
- Pull the latest version of the code.
- Commit code often (and make notes).
- Use branches to work in parallel.
- Choosing the right system is important — that’s why it’s the first best practice. 

## List of Source Control Management Tools
- Git
- Helix Core
- Subversion
- ClearCase
- Team Foundation Server
- Mercurial 

## What Is Git?

Git source control is one of the most popular options. Some teams use open source Git. Others use enterprise Git. Some popular Git source control options include GitHub, GitLab, and Bitbucket.

It is a free, high-quality distributed version control system suitable for tracking modifications in source code in software development. It was originally created as an open-source system for coordinating tasks among programmers, but today it is widely used to track changes in any set of files. The key objectives of Git are as follows:
- Speed and efficiency
- Data integrity
- Support for distributed and non-linear workflows

## What Is GitHub?
It is a web-based Git repository. This hosting service has cloud-based storage. GitHub offers all distributed version control and source code management functionality of Git while adding its own features. It makes it easier to collaborate using Git. 
Additionally, GitHub repositories are open to the public. Developers worldwide can interact and contribute to one another’s code, modify or improve it, making GitHub a networking site for web professionals. The process of interaction and contribution is also called social coding.

##  Difference between Git and GitHub
The main Git vs GitHub difference is in their functionality. While they both provide source code management (SCM) and make merging and sharing code easier, this is pretty much where their similarities end. Think of Git as a single computer and GitHub as a network of multiple interconnected computers, all with the same end goal but a wildly different role for how to get there.

At its core, Git is a free, open-source software distributed version control system (DVCS) designed to manage all source code history. It can keep a history of commits, can reverse changes, and lets developers share code. Each developer must have Git installed on his or her local device to collaborate. It is commonly referred to as one of the best DevOps tools to understand and use in the developer space, and it’s among the most widely used tools today. Companies like Amazon, Facebook, and Microsoft use it, to name a few.

GitHub, on the other hand, is a web-based hosting service for Git repositories. It offers all of Git’s DVCS SCM and has some additional features. This includes collaboration functionality like project management, support ticket management, and bug tracking. With GitHub, developers can share their repositories, access other developers’ repositories, and store remote copies of repositories to serve as backups.

Another difference in comparison of Git vs GitHub is that the environment in which they operate. Git is installed locally on a system, so developers can manage their source code history using their local machines as repositories. This means there is no centralized server required to use Git, and no needed internet access either. Additionally, there’s no user-management system available and a proprietary desktop GUI.

GitHub, meanwhile, lives in the cloud, so Internet access is required. It also has a built-in user-management system and a user-friendly GUI. In addition to its main website, GitHub features a desktop version that can be installed on local computers to help synchronize code. It should be noted that Git can be used without GitHub, but GitHub cannot be used without Git. (GitHub primarily was built to work correctly with Git.)

Git developers themselves perform a command-line tool where code changes like commit and merge within the Git tool on their own local devices. By contrast, GitHub provides its cloud-based graphical interface where these tasks are performed. The interface also offers developers access control, collaboration features, and various task-management tools.

When it comes to commands, Git focuses exclusively on SCM tasks like push and pull, commit, reset, fetch, and merge. GitHub, meanwhile, serves as a host for Git repository teams to store their code in a centralized location. While Git is a tool that’s used to manage multiple versions of source code edits that are then transferred to files in a Git repository, GitHub serves as a location for uploading copies of a Git repository.

Git has remained an open-source tool since it was first released in 2005. To this day, it is maintained by the Linux Foundation as part of the open-source ecosystem of tools and technologies (the Linux founder also created Git). By contrast, GitHub was launched as a company in 2008 and acquired by Microsoft in 2018.

- <b>Local repository</b> 
The local repository is present on our computer and consists of all the files and folders. This Repository is used to make changes locally, review history, and commit when offline.

- <b>Remote repository</b>
The remote repository refers to the server repository that may be present anywhere. This repository is used by all the team members to exchange the changes made.


## Git Commands
Working With Local Repositories
-  <b>git init</b>
	- The command git init is used to create an empty Git repository. 
After the git init command is used, a .git folder is created in the directory with some subdirectories. Once the repository is initialized, the process of creating other files begins.</p>

-  <b>git add</b>
	- Add command is used after checking the status of the files, to add those files to the staging area.
Before running the commit command, "git add" is used to add any new or modified files.

- <b>git commit</b>
	- The commit command makes sure that the changes are saved to the local repository.
The command "git commit –m <message>" allows you to describe everyone and help them understand what has happened.

- <b>git status</b>
	- The git status command tells the current state of the repository.
	- The command provides the current working branch. If the files are in the staging area, but not committed, it will be shown by the git status. Also, if there are no changes, it will show the message no changes to commit, working directory clean.

- <b>git config</b>
	- The git config command is used initially to configure the user.name and user.email. This specifies what email id and username will be used from a local repository.
When git config is used with --global flag, it writes the settings to all repositories on the computer.


- <b>git branch</b>
	- The git branch command is used to determine what branch the local repository is on.
The command enables adding and deleting a branch.


- <b> git checkout</b>
	- The git checkout command is used to switch branches, whenever the work is to be started on a different branch.
	- The command works on three separate entities: files, commits, and branches.

-  <b>git merge</b>
	- The git merge command is used to integrate the branches together. The command combines the changes from one branch to another branch. 
	- It is used to merge the changes in the staging branch to the stable branch.


## Git Commands: Working With Remote Repositories

- git remote 
	- The git remote command is used to create, view, and delete connections to other repositories. 
The connections here are not like direct links into other repositories, but as bookmarks that serve as convenient names to be used as a reference.


- git clone
	- The git clone command is used to create a local working copy of an existing remote repository.
The command downloads the remote repository to the computer. It is equivalent to the Git init command when working with a remote repository.

-  git pull 
	- The git pull command is used to fetch and merge changes from the remote repository to the local repository.
	- The command "git pull origin master" copies all the files from the master branch of the remote repository to the local repository.

- git push
	- The command git push is used to transfer the commits or pushing the content from the local repository to the remote repository.
	- The command is used after a local repository has been modified, and the modifications are to be shared with the remote team members.

- git log
	- The git log command shows the order of the commit history for a repository.
	- The command helps in understanding the state of the current branch by showing the commits that lead to this state.

## Git Commands Reference and Interview Guide

### 1. Working With Local Repositories

#### git init

* Initializes a new Git repository.
* Creates a `.git` folder with necessary subdirectories.

#### git add

* Adds files to the staging area.
* Usage: `git add <filename>` or `git add .`

#### git commit

* Saves changes to the local repository.
* Usage: `git commit -m "Your message"`

#### git status

* Displays the current state of the working directory and staging area.

#### git config

* Configures user settings.
* Examples:

  * `git config --global user.name "Your Name"`
  * `git config --global user.email "your_email@example.com"`

#### git branch

* Lists, creates, or deletes branches.
* Usage: `git branch <branch_name>`

#### git checkout

* Switches branches or restores working tree files.
* Usage: `git checkout <branch_name>` or `git checkout -b <new_branch_name>`

#### git merge

* Merges another branch into the current branch.
* Usage: `git merge <branch_name>`

### 2. Working With Remote Repositories

#### git remote

* Manages set of tracked repositories.
* Usage: `git remote add origin <url>`

#### git clone

* Creates a copy of an existing remote repository.
* Usage: `git clone <repo_url>`

#### git pull

* Fetches and integrates changes from a remote repository.
* Usage: `git pull origin <branch_name>`

#### git push

* Uploads local branch commits to the remote repository.
* Usage: `git push origin <branch_name>`

#### git log

* Shows the commit history.
* Useful Flags:

  * `git log -5`
  * `git log --oneline`
  * `git log --author="username"`

### 3. Git Concepts and Questions

#### What is Git?

* A distributed version control system used for tracking changes in source code.

#### What is a Distributed Control System?

* Developers work locally and sync with a central repository.

#### What is a Repository in Git?

* A storage space where your project and its version history lives.

#### How to Create a Local Repository?

* `git init`

#### What is a Bare Repository?

* A repository without a working directory, used for sharing.

#### .gitignore File

* Specifies files and directories that Git should ignore.

### 4. Aliases and Config

* Create Alias: `git config --global alias.lo "log --oneline"`
* Remove Alias: `git config --global --unset alias.lo`
* Remove User Config: `git config --global --unset user.name`

### 5. Resetting and Checkout

* Undo last commit (keep changes): `git reset --soft HEAD~1`
* Remove file from staging: `git reset HEAD <file>`
* Get file back from staging: `git checkout -- <file>`

### 6. Branching

* Create Branch: `git branch <branch_name>`
* Checkout Branch: `git checkout <branch_name>`
* Rename Branch: `git branch -m <old> <new>`
* Delete Branch: `git branch -d <branch>` or `git branch -D <branch>`
* Delete Remote Branch: `git push origin -d <branch>`

### 7. Git Fetch vs Pull

* `git fetch`: Downloads remote changes.
* `git pull`: Fetches and merges remote changes.

### 8. Merge Conflicts

* Resolve manually, then: `git add <file>` + `git commit`
* Abort merge: `git merge --abort`

### 9. Git Stash

* Stash changes: `git stash`
* List stashes: `git stash list`
* Apply stash: `git stash apply`
* Pop stash: `git stash pop`
* Drop stash: `git stash drop`
* Clear all stashes: `git stash clear`

### 10. Rebase

* Rewrites commit history.
* Usage: `git rebase <branch_name>`
* Difference:

  * Merge: adds a new commit.
  * Rebase: replays commits and rewrites history.

### 11. Other Commands

* Revert commit: `git revert <commit_id>`
* Set new remote URL: `git remote set-url origin <new_url>`
* Show diff between commits: `git diff <commit1>..<commit2>`

### 12. GitHub Specific Tasks

#### Pull Request

* Merge changes from one branch to another.

#### Lock Branch

* Settings > Branches > Select branch > Protect this branch

#### Delete Repository

* Settings > Scroll to bottom > Delete this repository

#### Add Collaborator

* Settings > Collaborators > Add username


To effectively explain **Git Branching** and demonstrate it with a clear walkthrough, you can follow this structured approach:

---

## 🔀 Git Branching Explained (Concept + Walkthrough)

### 💡 What is a Branch in Git?

A **branch** is a lightweight, movable pointer to a commit. Branching allows multiple lines of development within the same repository. It's used to:

* Develop new features independently
* Fix bugs in isolation
* Test or experiment without affecting the main codebase

> **Default branch** is usually called `main` or `master`.

---

### 📍 Why Use Branches?

* Work on multiple features simultaneously.
* Avoid code conflicts in collaborative environments.
* Enable parallel development streams (features, testing, release).

---

### 🧪 Scenario for Demonstration

> **Use Case:** You're working on a website project. The main branch (`main`) contains stable code. You want to add a feature: “User Profile Page”.

---

### 🛠️ Walkthrough: Creating & Using a Branch

#### Step 1: Initialize Git & Add Base Code

```bash
git init
echo "<h1>Welcome to MySite</h1>" > index.html
git add index.html
git commit -m "Initial commit on main"
```

#### Step 2: Create a New Branch for the Feature

```bash
git branch feature/user-profile
git checkout feature/user-profile
# Or in one command: git checkout -b feature/user-profile
```

#### Step 3: Add Feature-Specific Code

```bash
echo "<p>User Profile Section Coming Soon...</p>" > profile.html
git add profile.html
git commit -m "Added profile page"
```

#### Step 4: Switch Back to Main Branch

```bash
git checkout main
```

You’ll see that `profile.html` is not in the `main` branch yet — because it’s only in `feature/user-profile`.

---

### 🔄 Step 5: Merge Feature Branch into Main

```bash
git merge feature/user-profile
```

Now `profile.html` is added to `main`.

---

### 🗑️ Step 6: Delete the Feature Branch (optional)

```bash
git branch -d feature/user-profile
```

---

### 📌 Common Branch Commands

```bash
git branch                # List local branches
git branch -a             # List local and remote branches
git checkout <branch>     # Switch branch
git checkout -b <name>    # Create + switch to new branch
git merge <branch>        # Merge into current branch
git branch -d <branch>    # Delete local branch
```

---

### 🧠 Visual Representation

```
main
 |
 *---*---*---*    <- main
      \     
       *---*---* <- feature/user-profile
```

The **Git branch** concept is powerful because it fundamentally changes **how developers collaborate, innovate, and manage software complexity** — all without affecting the main codebase until they're ready. Here's why it's considered one of Git's superpowers:

### 💪 Why Git Branching Is Powerful

#### 1. 🧪 **Safe Experimentation**

You can try new ideas, refactor code, or build experimental features in isolation without breaking the main (stable) codebase.

* Like a sandbox for developers.

#### 2. 🤝 **Parallel Development**

Multiple team members can work on different features or bug fixes *simultaneously* using different branches.

* Encourages distributed teamwork without conflicts.

#### 3. 🧵 **Clean Code History**

Branches help organize commits around specific features or tasks, making the project history easier to understand.

* Especially helpful with feature branches or release branches.

#### 4. 🚀 **Fast and Lightweight**

In Git, branches are just pointers to commits, so:

* Creating, switching, and deleting branches is extremely fast and memory-efficient.

#### 5. 🔀 **Supports Advanced Workflows**

Allows for workflows like:

* Git Flow (feature → develop → release → master)
* Trunk-Based Development
* GitHub Flow (feature → pull request → merge)

#### 6. 🔄 **Supports Continuous Integration**

By isolating features in branches, CI pipelines can test, build, and deploy those branches independently before merging them to production.

#### 7. 🔧 **Easy Conflict Resolution**

Working in branches helps reduce the frequency and complexity of merge conflicts. And even if they arise, they are confined to specific changes.

---

### 🧠 Analogy

Think of the `main` branch as the **main highway** and other branches as **service lanes**:

* You can build new paths (features) or repair old ones (bug fixes) without disrupting the main flow of traffic (production).

