# Letters Campaign

This application can be used to generate and print campaign letters. It's a static website and uses javascript. It's easy to use and customizable for any campaign. You can have state specific letters and national level letters. The app uses users state to identify the recepients.
Just deploy the application on S3 or any web server and share the link.
  
Here is a working example.
http://fairnessthroughawareness.s3-website-us-east-1.amazonaws.com/


## To deploy the application directly
Drop contents of dist folder in any html/web server web root folder or specific folder 

##To customize title, subtitle and content of website
Modify /asssets/content.json under dist folder

##To customize recepients specific to state and nation
Modify /asssets/recepients.json under dist folder

##To modify background image
Replace /asssets/img/bg.jpg with the choice of your image




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.
##For Installation
Checkout or download git project
Run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running dev build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Build for prod with ahead of time compilation

Run `ng build -prod --aot` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. Use the `--aot` for ahead of time compilation


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
