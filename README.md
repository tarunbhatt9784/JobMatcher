## Project Title
The project is a web application which would be used by recruiters to achieve the following objectives
- Search jobs on the basis of name, skills and organization.
- Find the most suitable candidate for the job. 

## Pre-requisites
- Please install the latest node version on the system. Visit https://nodejs.org/en/download/ for more steps.
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8. Please install angular cli using "npm i -g @angular/cli"

## Deployment Steps
- Once the code has been cloned or downloaded on the File explorer using the GIT link, ensure all the prequisites mentioned above are satisfied
- Open command prompt and traverse to the folder where this README.md is present. For example, if the README.cmd is present under the location "C:\ClientApp". run commmand cd C:\ClientApp.
- Execute "npm install" command
- Execute command "ng serve --open"
- This will build the code and open the web application on the browser using the URL `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Upcoming Releases
- Caching for API Results : Cache the results from the API call. 
- Performance enhancements : API's will be built with parameters for fetching selective records to be displayed on one single page.
- Login page for recruiter using token based authentication.
- GULP / Less Setup - For sake of simplicity, we didnt setup any GULP / LESS actions as of now. Next release will have GULP / LESS setup based on requirements. 
- Ability to add / modify / delete more jobs and cadidates
- Display a list of suitable candidates
- Fix karma UNIT TESTING issues. 

## Scenarios
- Navigate to `http://localhost:4200/`
- Use text box to search jobs on the basis of any of the job related fields. 
- Once the jobs are displayed, use the button 'Find Best Candidate' to display best candidate.
- Best candidate would be searched by matching skills of job and list of candidates.  
- The best candidate section of the screen could be hidden by clicing on the button 'Hide Candidate Details'.
- A gif will be shared with a demo. Please look for DEMO.gif in the very same folder where README.MD is present. 

## Built with 
Angular CLI: 6.0.8
Node: 8.11.3
OS: win32 x64
Angular: 6.0.6
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.6.8
@angular-devkit/build-angular     0.6.8
@angular-devkit/build-optimizer   0.6.8
@angular-devkit/core              0.6.8
@angular-devkit/schematics        0.6.8
@angular/cli                      6.0.8
@ngtools/webpack                  6.0.8
@schematics/angular               0.6.8
@schematics/update                0.6.8
rxjs                              6.2.1
typescript                        2.7.2
webpack                           4.8.3
Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

##Authors
Tarun Bhatt

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
