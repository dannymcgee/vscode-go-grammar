import { loadTestFile } from '../testing/utility';

describe('keywords', () => {
	it('should work', async () => {
		let code = await loadTestFile('keywords.go');
		expect(code).toMatchSnapshot();
	});
});
