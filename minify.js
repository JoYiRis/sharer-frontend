'use strict';

const minify = require('@node-minify/core');
const babelMinify = require('@node-minify/babel-minify');

const pageList = require('./pageListConfig');
const root = './src/js';

for (let name in pageList) {
    let inputArr = [];

    pageList[name].forEach(dependency => {
        inputArr.push(`${root}/${dependency}.js`);

    });

    Minify(inputArr, `./bundle/js/${name}.bundle.js`, babelMinify, {
        babelrc: './.babelrc'
    });

}

function Minify(input, output, compressor, options) {
    // Using UglifyJS with wildcards
    minify({
        compressor: compressor,
        input: input,
        output: output,
        options: options
    });
}