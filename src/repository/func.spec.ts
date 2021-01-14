import { loadTestFile } from '../testing/utility';

describe('func', () => {
	it('should work', async () => {
		let code = await loadTestFile('func.go');
		expect(code).toMatchSnapshot();
	});
});
