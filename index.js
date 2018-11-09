#!/usr/bin/env node

let shell = require('shelljs');
let colors = require('colors');

let appName = process.argv[2];


const createReactApp = () => {
  return new Promise(resolve=>{
    if(appName){
      shell.exec(`npx create-react-app ${appName}`, () => {
        console.log("Created react app".cyan);
        resolve(true)
      })
    }else{
      console.log("\nNo app name was provided.".red);
      console.log("\nProvide an app name in the following format: ");
      console.log("\ncreate-ready-react-app ", "app-name\n".cyan);
      resolve(false)
    }
  })
};

const run = async () => {
  let success = await createReactApp();
  if(!success){
    console.log('Something went wrong while trying to create a new React app using create-react-app'.red);
    return false;
  }
  console.log("All done".cyan)
};

run()
  .catch(err => {
    console.log(err, 'Something went wrong'.red)
  });