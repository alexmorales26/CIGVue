# CIGVue
Capital Insurance Group CapStone 
## Requirements before starting up Application
1. Go into your terminal and type `node -v`
    - The output should be version `10.6.0`
    - __If you don't have node installed__ then follow these [instructions](https://nodejs.org/en/download/) or if you have the homebrew package handler you can simply enter this command in the terminal `brew install node`
2. Check if you have __npm__ installed by entering this command in the terminal `npm -version`
    - The output should be version `6.1.0`
    - __If you don't have npm installed__ follow these [instructions](https://www.npmjs.com/get-npm) to install __npm__. If you have the homebrew package handler on your Mac you can enter these commands `brew install node`. If you already did this for the previous step you can disregard this step.
3. If you managed to have these libraries installed onto your computer you should be ready to set-up the environment on your machine. 
### Recommended Development Tools
- [Visual Studio Code](https://code.visualstudio.com/)
    - __Recommended Extensions:__
        -  DOTENV
        - GitLens
        - Git History
- [Google Chrome](https://www.google.com/chrome/)
    - __Version__ >= 71
- [React Developer Tools ](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en)
## Starting up the application
### Download the packages
1. These step should only be done if it's your first time getting the project started on your machine.
##### Front-End Node_Modules
2. Enter this command into your terminal
    - `cd CIGVue/back-end`
    - Then run this command `npm install`
        -  This command installs all of the dependencies the front-end needs.
    - Once this is complete you should `cd ..` so your still within the `CIGVue` folder
##### Back-End Node_Modules
3. Remember you should be within you `CIGVue` folder in the terminal. 
    - Enter this command `cd back-end/`
    - Then run this command `npm install`
         -  This command installs all of the dependencies the back-end needs.
    - Once this is complete you environment should be ready to start developing!
### Launching the Application
_**Important**_ 

You should have two instances bash. One should be running the back-end and the other for the back-end. 
#### Front-End
1. On your terminal you should be within your `CIGVue` folder
2. Enter these commands:
    - `cd front-end/`
    - `npm run start`
3. If you have your __Node_Modules__ installed following the previous section this should start up and open a tab on your __Chrome browser__.
#### Back-End
1. On your terminal you should be within your `CIGVue` folder
2. Enter these commands:
    - `cd back-end/`
    - `npm run start`
3. Once this is running you should see the following:
    - `Server listening on http://localhost:3000`