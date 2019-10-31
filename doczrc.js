import AnnotationResolver from 'react-docgen-annotation-resolver';

export default {
	title: 'base5-UI',
	base: '/base5-ui/',
	menu: ['Introduction', 'Theming', 'Components'],
	ignore: ['README.md', 'CHANGELOG.md'],
	docgenConfig: {
		resolver: AnnotationResolver,
	},
};
