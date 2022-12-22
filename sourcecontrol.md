### What is Source Control ?
Source cotrol is the tracking and management of changes to code. This ensures that developers are always working on the right version of source code.
Source control management (SCM) refers to tools that help you keep track of your code with a complete history of changes.

### Source Control vs. Source Code Management
These two terms are also used interchangeably. However, source control is specific to tracking changes in source code. While a source code management tool (SCM) tracks changes to a source code repository.

SCM also maintains a history of changes. This is used to resolve conflicts when merging updates from multiple developers.

### Why Source Control Is Important 
Source control is important for maintaining a single source of truth for development teams. Using it helps facilitate collaboration and accelerates release velocity.
Some benefits of source control are:

- It allows multiple developers to work on the same codebase.
- Developers can commit and merge code without conflicts.
- Developers can edit shared code without unknowingly overwriting each other’s work.


### 5 Tips for Source Control Management
Here are five tips to keep in mind:

- Choose the right system. (Helix Core is a great one.)
- Store your code in the system.
- Pull the latest version of the code.
- Commit code often (and make notes).
- Use branches to work in parallel.
- Choosing the right system is important — that’s why it’s the first best practice. 

### List of Source Control Management Tools
Source control tools include:

- Git
- Helix Core
- Subversion
- ClearCase
- Team Foundation Server
- Mercurial 
### Version Control with Git Is One Popular Option
Git source control is one of the most popular options. Some teams use open source Git. Others use enterprise Git. Some popular Git source control options include GitHub, GitLab, and Bitbucket.

### What Is Git?
It is a free, high-quality distributed version control system suitable for tracking modifications in source code in software development. It was originally created as an open-source system for coordinating tasks among programmers, but today it is widely used to track changes in any set of files. The key objectives of Git are as follows:

- Speed and efficiency
- Data integrity
- Support for distributed and non-linear workflows

### What Is GitHub?
It is a web-based Git repository. This hosting service has cloud-based storage. GitHub offers all distributed version control and source code management functionality of Git while adding its own features. It makes it easier to collaborate using Git. 

Additionally, GitHub repositories are open to the public. Developers worldwide can interact and contribute to one another’s code, modify or improve it, making GitHub a networking site for web professionals. The process of interaction and contribution is also called social coding.

### Git and GitHub Operate Completely Differently
The main Git vs GitHub difference is in their functionality. While they both provide source code management (SCM) and make merging and sharing code easier, this is pretty much where their similarities end. Think of Git as a single computer and GitHub as a network of multiple interconnected computers, all with the same end goal but a wildly different role for how to get there.

At its core, Git is a free, open-source software distributed version control system (DVCS) designed to manage all source code history. It can keep a history of commits, can reverse changes, and lets developers share code. Each developer must have Git installed on his or her local device to collaborate. It is commonly referred to as one of the best DevOps tools to understand and use in the developer space, and it’s among the most widely used tools today. Companies like Amazon, Facebook, and Microsoft use it, to name a few.

GitHub, on the other hand, is a web-based hosting service for Git repositories. It offers all of Git’s DVCS SCM and has some additional features. This includes collaboration functionality like project management, support ticket management, and bug tracking. With GitHub, developers can share their repositories, access other developers’ repositories, and store remote copies of repositories to serve as backups.

### They Work in Different Environments
Another difference in comparison of Git vs GitHub is that the environment in which they operate. Git is installed locally on a system, so developers can manage their source code history using their local machines as repositories. This means there is no centralized server required to use Git, and no needed internet access either. Additionally, there’s no user-management system available and a proprietary desktop GUI.

GitHub, meanwhile, lives in the cloud, so Internet access is required. It also has a built-in user-management system and a user-friendly GUI. In addition to its main website, GitHub features a desktop version that can be installed on local computers to help synchronize code. It should be noted that Git can be used without GitHub, but GitHub cannot be used without Git. (GitHub primarily was built to work correctly with Git.)

### Both Git and GitHub Handle Commands Differently
Git developers themselves perform a command-line tool where code changes like commit and merge within the Git tool on their own local devices. By contrast, GitHub provides its cloud-based graphical interface where these tasks are performed. The interface also offers developers access control, collaboration features, and various task-management tools.

When it comes to commands, Git focuses exclusively on SCM tasks like push and pull, commit, reset, fetch, and merge. GitHub, meanwhile, serves as a host for Git repository teams to store their code in a centralized location. While Git is a tool that’s used to manage multiple versions of source code edits that are then transferred to files in a Git repository, GitHub serves as a location for uploading copies of a Git repository.

### They’re Owned by Different Companies
Git has remained an open-source tool since it was first released in 2005. To this day, it is maintained by the Linux Foundation as part of the open-source ecosystem of tools and technologies (the Linux founder also created Git). By contrast, GitHub was launched as a company in 2008 and acquired by Microsoft in 2018.

## Git and GitHub

### Git

Git is one of the most sought after DevOps tools used to handle small and large projects efficiently. The tool enables collaboration among different people in different parts of the same project. Git is nothing without its commands, so here, all about Git commands that are needed to efficiently and effectively work on the tool.

Git is a widely used modern version control system for tracking changes in computer files. The term version control system suggests a system that records all the changes made to a file or set of data, so a specific version can be considered whenever needed. This feature makes the process of collaboration so feasible with all team members, making it considerably more comfortable to work over a big project.  

Git makes it possible for several people involved in the project to work together and track each other's progress over time. In software development, the tool helps in Source Code Management. Git favors not only programmers but also non-technical users by keeping track of their project files.

While working on Git, we actively use two repositories. 

#### Local repository: 
The local repository is present on our computer and consists of all the files and folders. This Repository is used to make changes locally, review history, and commit when offline.

#### Remote repository: 
The remote repository refers to the server repository that may be present anywhere. This repository is used by all the team members to exchange the changes made.


##Git Commands

Working With Local Repositories

##### git init
The command git init is used to create an empty Git repository. 
After the git init command is used, a .git folder is created in the directory with some subdirectories. Once the repository is initialized, the process of creating other files begins.

##### git add
Add command is used after checking the status of the files, to add those files to the staging area.
Before running the commit command, "git add" is used to add any new or modified files.

##### git commit
The commit command makes sure that the changes are saved to the local repository.
The command "git commit –m <message>" allows you to describe everyone and help them understand what has happened.

##### git status
The git status command tells the current state of the repository.
The command provides the current working branch. If the files are in the staging area, but not committed, it will be shown by the git status. Also, if there are no changes, it will show the message no changes to commit, working directory clean.

##### git config
The git config command is used initially to configure the user.name and user.email. This specifies what email id and username will be used from a local repository.
When git config is used with --global flag, it writes the settings to all repositories on the computer.


##### git branch
The git branch command is used to determine what branch the local repository is on.
The command enables adding and deleting a branch.


##### git checkout
The git checkout command is used to switch branches, whenever the work is to be started on a different branch.
The command works on three separate entities: files, commits, and branches.

##### git merge
The git merge command is used to integrate the branches together. The command combines the changes from one branch to another branch. 
It is used to merge the changes in the staging branch to the stable branch.


## Git Commands: Working With Remote Repositories

#### git remote 
The git remote command is used to create, view, and delete connections to other repositories. 
The connections here are not like direct links into other repositories, but as bookmarks that serve as convenient names to be used as a reference.


#### git clone
The git clone command is used to create a local working copy of an existing remote repository.
The command downloads the remote repository to the computer. It is equivalent to the Git init command when working with a remote repository.

#### git pull 
The git pull command is used to fetch and merge changes from the remote repository to the local repository.
The command "git pull origin master" copies all the files from the master branch of the remote repository to the local repository.

#### git push
The command git push is used to transfer the commits or pushing the content from the local repository to the remote repository.
The command is used after a local repository has been modified, and the modifications are to be shared with the remote team members.

#### git log
The git log command shows the order of the commit history for a repository.
The command helps in understanding the state of the current branch by showing the commits that lead to this state.
