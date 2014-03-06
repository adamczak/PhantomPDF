var Service = require('node-windows').Service,
    path = require('path');

// Create a new service object
var svc = new Service({
  name:'PhantomPDF',
  description: 'Creates PDFs from urls using NodeJS and PhantomJS',
  script: path.join(process.cwd(), 'app.js')
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ', svc.exists);
});

// Uninstall the service.
svc.uninstall();