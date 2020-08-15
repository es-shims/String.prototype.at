'use strict';

module.exports = function (item, t) {
	t.test('strings', function (st) {
		st.equal(item('abc', 0), 'a');
		st.equal(item('abc', -3), 'a');

		st.equal(item('abc', 1), 'b');
		st.equal(item('abc', -2), 'b');

		st.equal(item('abc', 2), 'c');
		st.equal(item('abc', -1), 'c');

		st.equal(item('abc', 3), undefined);
		st.equal(item('abc', -4), undefined);

		st.end();
	});
};
