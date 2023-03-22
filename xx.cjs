/* eslint-disable no-undef */
const path = require('path');
const fs = require('fs');
console.log(path.resolve(__dirname, './package'));
const componentsDir = path.resolve(__dirname, './package');
const componentsName = fs
	.readdirSync(path.resolve(componentsDir))
	.filter((item) => !['global.d.ts', 'index.ts'].includes(item));

console.log('componentsName', componentsName);

const componentsEntry = componentsName.map(
	(name) => `${componentsDir}/${name}/index.ts`
);
console.log('componentsEntry', componentsEntry);
