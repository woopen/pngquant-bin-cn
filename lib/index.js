'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');

const site = process.env.PNGQUANT_BINARY_SITE ||
            process.env.npm_config_pngquant_binary_site ||
            'https://npm.taobao.org/mirrors';

const url = `${site}/pngquant-bin/v6.0.0/vendor/`;

console.log(url)

module.exports = new BinWrapper()
	.src(`${url}macos/pngquant`, 'darwin')
	.src(`${url}linux/x86/pngquant`, 'linux', 'x86')
	.src(`${url}linux/x64/pngquant`, 'linux', 'x64')
	.src(`${url}freebsd/x64/pngquant`, 'freebsd', 'x64')
	.src(`${url}win/pngquant.exe`, 'win32')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'pngquant.exe' : 'pngquant');
