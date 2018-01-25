var copydir = require('copy-dir');

copydir('dist', 'node_modules/ngx-atomic', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Project published succesfully')
    }
});