# Project 4

## Austin Duling
## 3/20/2023

# Part 1
- Project Overview 
    - In this project, we are attempting to "containerize" the entire process of hosting a website and setting up the server environment like we've been doing in the last couple projects. We are using Docker because it allows us to package up an entire filesystem that includes all of the files necessary to run whatever project it is that we are attempting to deliver to an end user. Docker simplifies much of the process of setting up a project's libraries, dependencies, and other such components by allowing us to build a Dockerfile that will define what the "package" will entail. We write the Dockerfile that defines what type of environment we will be launching, as well as project specific details like where things will be stored, permissions, and files that will be run when the docker image is launched. Once the docker image is launched, it will run either in the foreground or background depending on how you decided it will be run. 