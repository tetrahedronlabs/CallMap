"use client";

import { Map, Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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
    <div className="h-64 w-64 flex ">
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
