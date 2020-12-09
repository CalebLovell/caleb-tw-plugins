module.exports = function ({ addComponents }) {
	addComponents({
		'.container': {
			width: `100%`,
			marginLeft: `auto`,
			marginRight: `auto`,
			paddingLeft: `1rem`,
			paddingRight: `1rem`,
			'@screen sm': {
				paddingLeft: `1.5rem`,
				paddingRight: `1.5rem`,
			},
			'@screen md': {
				paddingLeft: `3rem`,
				paddingRight: `3rem`,
			},
			'@screen lg': {
				paddingLeft: `6rem`,
				paddingRight: `6rem`,
			},
			'@screen xl': {
				paddingLeft: `9rem`,
				paddingRight: `9rem`,
			},
		},
	});
};
