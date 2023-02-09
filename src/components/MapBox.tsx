import React, {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import '../App.scss'

function MapBox() {
    const mapContainerRef = useRef<any>();

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoidGltb3RoaWVtdCIsImEiOiJjbGR1ZHNoMnowNHVpM3FyZmhwbXdrd28zIn0.6F8F4zTbfNaZV0wUH1Xciw';
        const map: any = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [13.41053, 52.52437],
            zoom: 12
        });

        const marker = new mapboxgl.Marker()
            .setLngLat([13.41053, 52.52437])
            .addTo(map);



        return () => {
            map.remove();
        };
    }, []);

    return (
        <div>
            <div ref={mapContainerRef} style={{height: '400px', width: '100%'}}/>
        </div>
    )

}

export default MapBox;
