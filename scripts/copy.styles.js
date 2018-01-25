var copydir = require('copy-dir');

copydir('src/lib/styles', 'dist/styles', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Styles copied uccesfully')
    }
});