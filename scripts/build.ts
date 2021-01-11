import * as fs from 'fs-extra';
import { JsonObject, TMGrammar } from '../src/types';
import gram from '../src';

main();

function main(): number {
	build(gram, 'go');

	return 0;
}

function toJson(grammar: TMGrammar): JsonObject {
	let processed: JsonObject = {};
	for (let [key, value] of Object.entries(grammar)) {
		if (typeof value === 'string') {
			processed[key] = value;
		} else if (value instanceof RegExp) {
			let source = value.source;
			let flags = value.flags;
			processed[key] = (flags ? `(?${flags})` : '') + source;
		} else if (value instanceof Array) {
			processed[key] = value.map(toJson);
		} else {
			processed[key] = toJson(value);
		}
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
