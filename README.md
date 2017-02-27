# weather-widget
5 Day Weather 

This weather widget is built in Angular 2 and Bootstrap 4.

A demo is available at http://weather-widget.azurewebsites.net/ 

Local installation

(1) Open it up in your IDE. Install Angular CLI via NPM

    npm install -g @angular/cli
    ng new PROJECT_NAME (This can take a few mins)
    cd PROJECT_NAME
    
 (2) Copy the weather-widget package.json file above into the one created by Angular CLI. This will add required dependencies
 
 (2) Open angular-cli.json file in the project and replace the styles section with the following
 
        "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "./assets/styles/weather-widget.css",
         "../node_modules/font-awesome/css/font-awesome.css"
        ],
  
 (4) Delete the src folder created by the ng new command. Download and copy weather-widget src folder above to replace this.
 
 (3) Run npm install
 
 (5) Run ng serve to run the app locally on http://localhost:4200/ 
 
 (6) Run ng build to build - a distribution will be placed in the dist folder
 
 (7) Run ng test to run any tests
 
 NOTES:
 Angular CLI doesn't let me create an overall npm package on top of there's, hence the numerous steps!
 I am new to github/open source as I come from a TFS/closed source background so this has been interesting - especially when the changed the version of node required for newest angular cli and everything broke!
 
 Improvements:
 Create a new api that reformats the data received from the open weather api ( a 5 day weather forecast that doesn't a collection of days!?)
 Data structures needed more thought
 Better error logging e.g. to an error logging service
 In a larger app I wouldn't have one app module - i'd probably have modules for services, classes, interfaces, source etc and importthese into the main app module
 Didn't have time to improve my LESS - add a variables file etc
 Haven't quite got my head around Ang2 testing as it is quite different from Ang 1. I need to create a mock service and a lot more component and UI tests
 UI improvements - typeahead dropdown to select location, some images, some animation to drill down into day detail, i'd probably have 
 
 
 
