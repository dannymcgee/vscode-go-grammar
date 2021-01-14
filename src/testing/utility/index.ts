import * as fs from 'fs';
import * as path from 'path';

export function loadTestFile(filename: string): Promise<string> {
	return new Promise((resolve, reject) => {
		let file = path.resolve(process.cwd(), 'src/testing', filename);

		fs.readFile(file, (err, res) => {
			if (err) reject(err);
			resolve(res.toString());
		});
	});
}
