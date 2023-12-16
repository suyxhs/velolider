"use client"

import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapState() {
  const defaultState = {
    center: [51.649661, 39.155533],
    zoom: 15,
  };

  return (
    <YMaps>
      <div className='grayscale '>
      <Map defaultState={defaultState}>
        <Placemark geometry={[51.649661, 39.155533]} />
      </Map>
      </div>
    </YMaps>
  );
}