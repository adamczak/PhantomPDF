var Service = require('node-windows').Service,
    path = require('path');

// Create a new service object
var svc = new Service({
  name:'PhantomPDF',
  description: 'Creates PDFs from urls using NodeJS and PhantomJS',
  script: path.join(process.cwd(), 'app.js'),
  env:[
    {
        name: "NODE_ENV",
        value: "production"
    },
    {
        name: "FOLDER",
        value: __dirname      
    }
    ]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

// Just in case this file is run twice.
svc.on('alreadyinstalled',function(){
  console.log('This service is already installed.');
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start',function(){
  console.log('PhantomPDF running!');
});

svc.install();