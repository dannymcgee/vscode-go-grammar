module.exports = {
	preset: 'ts-jest',
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.spec.json',
		},
	},
	setupFilesAfterEnv: ['<rootDir>/src/testing/lib/index.ts'],
	testEnvironment: 'node',
	rootDir: '.',
	snapshotResolver: '<rootDir>/src/testing/lib/resolver.js',
};
