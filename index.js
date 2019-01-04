#!/usr/bin/env node

const spawn = require('cross-spawn');
let colors = require('colors');
let createAppStructure = require('./utils/prepareReactApp').createAppStructure;
let setTemplates = require('./utils/prepareReactApp').setTemplates;

let appName = process.argv[2];


const createReactApp = () => {
  return new Promise(resolve=>{
    if(appName){

      const command = 'npx';
      let args = ['create-react-app', appName];

      let proc = spawn(command, args, {stdio: 'inherit'});

      proc.on('close', code => {
          if (code !== 0 ) {
            console.error(`${command} ${args.join(' ')} failed`.red);
            resolve(false);
          } else {
            console.log("\nCreated successfully\n".cyan);
            resolve(true)
          }
      });
    }else{
      console.log("\nNo app name was provided.".red);
      console.log("\nProvide an app name in the following format: ");
      console.log("\ncreate-ready-react-app ", "app-name\n".cyan);
      resolve(false)
    }
  })
};

const run = async () => {
  let createReactAppSuccess = await createReactApp();
  if(!createReactAppSuccess){
    console.log('Something went wrong while trying to create a new React app using create-react-app'.red);
    return false;
  }

  const createAppStructureSuccess = await createAppStructure(appName);
  if (!createAppStructureSuccess) {
    console.error(`\nUnable to create structure for ${appName}`.red);
    return false;
  }

  const setTemplatesSuccess = await setTemplates(appName);
  if (!setTemplatesSuccess) {
    console.error(`\nUnable to set templates for ${appName}`.red);
    return false;
  }
};

run()
  .then(() => console.log("\nAll done\n".cyan))
  .catch(err => console.log(err, '\nSomething went wrong\n'.cyan));