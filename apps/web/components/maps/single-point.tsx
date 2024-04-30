'use client';

import { Map, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Skeleton } from '../ui/skeleton';

const maxBoundsDistance = 0.2;

export const SinglePointMap = ({
	latitude,
	longitude,
	zoom,
}: {
	latitude: number;
	longitude: number;
	zoom: number;
}) => {
	return (
		<div className="h-full w-full">
			<Map
				mapStyle="mapbox://styles/mapbox/standard"
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!}
				initialViewState={{
					latitude: latitude,
					longitude: longitude,
					zoom: zoom,
				}}
				maxBounds={[
					[longitude - maxBoundsDistance, latitude - maxBoundsDistance],
					[longitude + maxBoundsDistance, latitude + maxBoundsDistance],
				]}
			>
				<Marker latitude={latitude} longitude={longitude} color="red" />
				<NavigationControl />
			</Map>
		</div>
	);
};

export const SinglePointMapSkeleton = () => {
	return <Skeleton className="h-full w-full" />;
};
