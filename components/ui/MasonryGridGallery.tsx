/* eslint-disable @next/next/no-img-element */
'use client'

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import Image, { ImageProps } from 'next/image';

export function MasonryGridGallery() {

  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <h1>gallery</h1>
        </div>
      </div>
    );
  }
  