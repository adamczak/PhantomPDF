//phantom.injectJs("http://code.jquery.com/jquery-1.9.1.min.js");

var page = require('webpage').create(),
    system = require('system'),
    address, output, size;

if (system.args.length < 3 || system.args.length > 5) {
    console.log('Usage: rasterize.js URL filename [paperwidth*paperheight|paperformat] [zoom]');
    console.log('  paper (pdf output) examples: "5in*7.5in", "10cm*20cm", "A4", "Letter"');
    phantom.exit(1);
} else {
    address = system.args[1];
    output = system.args[2];
    page.viewportSize = { width: 600, height: 600 };
    if (system.args.length > 3 && system.args[2].substr(-4) === ".pdf") {
        page.paperSize =  { 
                            format: system.args[3], 
                            orientation: system.args[4] ? system.args[4] : 'portrait', 
                            margin: '.25in'
                        };
    }
    //if (system.args.length > 4) {
    //    page.zoomFactor = system.args[4];
    //}

    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
        } else {
            window.setTimeout(function () {
                page.render(output);
                //page.render(system.stdout, { format: 'pdf' });
                phantom.exit();
            }, 200);
        }
    });
}
