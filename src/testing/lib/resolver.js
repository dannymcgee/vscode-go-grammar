const path = require('path');

module.exports = {
	/**
	 * @param {string} testPath
	 * @param {string} snapshotExtension
	 */
	resolveSnapshotPath: (testPath, snapshotExtension) => {
		let basename = path.basename(testPath).replace(/\.spec\.ts$/, '');
		return path.resolve(
			path.dirname(testPath),
			'../testing',
			`${basename}.go` + snapshotExtension,
		);
	},

	/**
	 * @param {string} snapshotPath
	 * @param {string} snapshotExtension
	 */
	resolveTestPath: (snapshotPath, snapshotExtension) => {
		let basename = path
			.basename(snapshotPath)
			.replace(`.go${snapshotExtension}`, '');
		return path.resolve(
			path.dirname(snapshotPath),
			'../repository',
			`${basename}.spec.ts`,
		);
	},

	testPathForConsistencyCheck: path.resolve(
		process.cwd(),
		'src/repository/example.spec.ts',
	),
};
