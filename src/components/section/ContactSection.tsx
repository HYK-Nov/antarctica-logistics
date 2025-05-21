import { forwardRef, useEffect } from "react";
import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  const mapPosition = { lat: -62.121706, lng: -58.394007 };
  const [markerRef, marker] = useMarkerRef();

  useEffect(() => {
    if (!marker) {
      return;
    }
  }, [marker]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <section
        className={"container flex h-screen flex-col items-center py-20"}
        ref={ref}
      >
        <h1 className={"Aggro pb-10 text-4xl text-blue-600"}>문의하기</h1>

        <Map
          className={"h-[300px] w-full"}
          defaultCenter={mapPosition}
          defaultZoom={11}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Marker ref={markerRef} position={mapPosition} />
        </Map>
      </section>
    </APIProvider>
  );
});

export default ContactSection;
