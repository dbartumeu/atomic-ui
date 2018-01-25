var copydir = require('copy-dir');
var copy = require('copy');

copydir('src/lib/styles', 'dist/styles', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Styles copied succesfully')
    }
});

copy('src/lib/*.json', 'dist', function (err) {
    if (err) throw err;
    console.log('Package copied succesfully');
});

copy('src/lib/*.md', 'dist', function (err) {
    if (err) throw err;
    console.log('Readme copied succesfully');
});