# URL Shortener Client # 
This repository stores the source code for the Client of Govtech assessment: URL Shortener.

## Requirements ##
### Basic ###
1. As a shortened URL creator, I want to shorten a normal URL to a shortened one, so that I can
have a shorter URL to disseminate.
```
Sample request: www.google.com
Sample response: sho.rt/sdf87sf
```
2. As a shortened URL consumer, I want to click on a shortened URL and have it arrive at the
full URL without further clicks, so that I can type less into my browser.
### Bonus ###
1. A simple frontend with an input box for entering the URL to be shortened
2. Deploy the web application to a publicly accessible hosting service
3. Persistence of the shortened URLs across system reboots (e.g. relational databases like
MySQL)
4. Write 1 or 2 unit tests to demonstrate you understand how to write automated tests

## Scripts ##
1. `yarn build` Builds the React source code to the _/build_.
2. `yarn deploy` Deploys to aws services from _/build_.
3. `yarn start` Run a local client service.

## Deploying ##
This application leverages on AWS S3 website technology:
1. Configure S3 bucket to have the appropriate permssions (ie. public)
2. Install AWS CLI and initialise with appropriate IAM account.
3. Update package.json deploy script and replace S3 bucket name.
4. Perform `yarn build && yarn deploy`.