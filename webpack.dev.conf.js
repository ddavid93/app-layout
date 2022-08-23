//needed for PhpStorm autocomplete only;
const path = require('path');
module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
};