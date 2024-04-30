import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'CallMap App',
		short_name: 'CallMap',
		description: 'CallMap – the open-source platform for campus safety data.',
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#ffffff',
		//TODO: Add icons
	};
}
3;
