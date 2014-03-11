var express = require('express')
    , app = express()
    , exec = require('child_process').exec
    , util = require('util')
    , path = require('path')
    , fs = require('fs')
    , nconf = require('nconf')
    , working_directory = process.env.FOLDER || process.cwd();

nconf.file(path.join(working_directory,'config.json'));

app.configure(function() {
    app.use(express.logger());
});

app.get("*", function(req,res,next) {

    var url = req.query.url;
    var fileName = Number(new Date()) + ".pdf";
    var contentFileName = req.query.filename || req.query.fileName;
    var orientation = req.query.orientation || 'portrait';

    var phantomDir = nconf.get('phantom_dir') || path.join(working_directory, '/PhantomJS');

    var localFileName = path.join(phantomDir, fileName);
    var command = util.format(path.join(phantomDir, 'PhantomJS.exe') + ' --proxy-type=none rasterize.js %s %s letter %s', url, localFileName, orientation);
    exec(command, {cwd:phantomDir,timeout:5000}, function(err, stdout, stderr) {
        fs.readFile(localFileName, function(err,data) {
            if(err)
            {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.header("Content-Type", "application/pdf");
                if(contentFileName)
                {
                    res.header("Content-Disposition", "filename=" + contentFileName);
                }
                res.status(200).send(data);
                fs.unlink(localFileName);
            }
        });
                 
    });

});

app.listen(nconf.get('port') || 9090);