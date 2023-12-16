"use client"

import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapState() {
  const defaultState = {
    center: [51.649661, 39.155533],
    zoom: 15,
    controls: ["fullscreenControl"],
  };

  return (
    <YMaps>
      <div className='grayscale '>
      <Map defaultState={defaultState} modules={["control.FullscreenControl"]}>
        <Placemark 
        modules={["geoObject.addon.balloon"]}
        geometry={[51.649661, 39.155533]}
        properties={{
            balloonContentBody:
              "МБУДО СШОР №8",
          }} />
      </Map>
      </div>
    </YMaps>
  );
}