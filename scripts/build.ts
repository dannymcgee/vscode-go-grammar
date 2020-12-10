import * as fs from 'fs-extra';
import { JsonObject, TMGrammar } from '../src/types';
import gram from '../src';

main();

function main(): number {
	build(gram, 'foo');

	return 0;
}

function toJson(grammar: TMGrammar): JsonObject {
	let processed: JsonObject = {};
	for (let [key, value] of Object.entries(grammar)) {
		// prettier-ignore
		processed[key] =
			typeof value === 'string'
				? value :
			value instanceof RegExp
				? value.toString().replace(/^\/|\/$/g, '') :
			value instanceof Array
				? value.map(toJson)
				: toJson(value)
	}
	return processed;
}

async function build(grammar: TMGrammar, name: string) {
	let processed = toJson(grammar);
	let content = JSON.stringify(processed, null, '  ');

	await fs.ensureDir('dist');
	await fs.writeFile(`dist/${name}.tmLanguage.json`, content);

	console.log('Done!');
}
