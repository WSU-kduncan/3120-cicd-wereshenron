# Project 5

## Austin Duling
## 4/10/2023

# Part 1
## Documentation
- In this section, we are attempting to demonstrate Continuous Deployment for an application we have developed and dockerized. The goal for this project (and CD in general) is to automatically build, test, and deploy the application we have built to the production (docker) every time we make changes in the GitHub repository we have made. The tools we will be using include GitHub actions and DockerHub. The purpose of this project is to demonstrate the importance of establishing a workflow that allows for easier testing, maintenence, and releases of a product. 

- To create a tag in GitHub, you can use the format `git tag <tagname>` to apply the tag to the HEAD of your current repository. To tag a specific commit, you can use: `git tag <tagname> <commitID>`

- A GitHub workflow is a series of actions that will be run whenever an event is detected to have happened within your repository. Workflows can do whatever you want them to as defined using a YAML file that you place in the .github/workflows/ directory in your repository. You can define the events to trigger the workflow as well. These events can include pushing to the repository, pull requests, merging branches, etc.

- https://hub.docker.com/repository/docker/wereshenron/testimage/general


# Part 2
