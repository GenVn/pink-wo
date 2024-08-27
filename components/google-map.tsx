"use client";
import React, { useEffect, useState } from "react";
import {
  AdvancedMarker,
  APIProvider,
  ControlPosition,
  Map,
  MapControl,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { MapHandler, PlaceAutocomplete } from "./location-search";

const GoogleMapComponent = () => {
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [markerLocation, setMarkerLocation] = useState({
    lat: 10.734737917771819,
    lng: 106.62550567113325,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMarkerLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);
  return (
    <APIProvider
      language="vi"
      region="vi"
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
    >
      <div className="w-full relative h-screen">
        <Map
          style={{ borderRadius: "20px" }}
          defaultZoom={13}
          mapId={"5b2d8b6b0b9b3f1a"}
          defaultCenter={markerLocation}
          gestureHandling={"greedy"}
          disableDefaultUI
        >
          <AdvancedMarker ref={markerRef} position={markerLocation} />
        </Map>
        <MapControl position={ControlPosition.TOP_CENTER}>
          <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
        </MapControl>
        <MapHandler place={selectedPlace} marker={marker} />
      </div>
    </APIProvider>
  );
};

export default GoogleMapComponent;
