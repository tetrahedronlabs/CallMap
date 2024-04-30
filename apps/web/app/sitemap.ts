import { getCampuses } from '@/lib/campus';
import { getLocations } from '@/lib/location';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseurl = 'https://callmap.app';

	const getCampus = await getCampuses();
	const getLocation = await getLocations();

	const campuses = getCampus?.map((campus) => {
		return { url: `${baseurl}/${campus?.campus_id}`, lastModified: new Date() };
	});

	const locations = getLocation?.map((location) => {
		return {
			url: `${baseurl}/${location?.campus}/${location?.parsed_location}`,
			lastModified: new Date(),
		};
	});

	return [
		{
			url: `${baseurl}/`,
			lastModified: new Date(),
		},
		{
			url: `${baseurl}/blog`,
			lastModified: new Date(),
		},
		{
			url: `${baseurl}/docs`,
			lastModified: new Date(),
		},
		...(campuses as { url: string; lastModified: Date }[]),
		...(locations as { url: string; lastModified: Date }[]),
	];
}
