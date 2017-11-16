const postcss = require('postcss');
const reg = /([\d.]+)(px|rem)/g;

module.exports = postcss.plugin('x2rpx', function () {
	return function (root) {
		root.walkDecls((decl) => {
			decl.value = decl.value.replace(reg, function(m, $1, $2) {
				if ($2 === 'rem') {
					return ($1 * 100).toFixed(2) + 'rpx';
				} else if ($2 === 'px') {
					return $1 + 'rpx';
				}
			});
		});
	};
});
