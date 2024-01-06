'use client'

import { Bubble } from "@typebot.io/nextjs";

const TypeBot = () => {
  return (
    <Bubble
      typebot="my-typebot-1q5wijq"
      theme={{ placement: "left",button: { backgroundColor: "#CCEC60", size: "medium" } }}
    />
  );
};

export default TypeBot