import { loadTestFile } from '../testing/utility';

describe('expression', () => {
	it('should work', async () => {
		let code = await loadTestFile('expression.go');
		expect(code).toMatchSnapshot();
	});
});
