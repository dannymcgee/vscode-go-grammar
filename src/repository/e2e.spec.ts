import { loadTestFile } from '../testing/utility';

describe('e2e', () => {
	it('should work', async () => {
		let code = await loadTestFile('e2e.go');
		expect(code).toMatchSnapshot();
	});
});
