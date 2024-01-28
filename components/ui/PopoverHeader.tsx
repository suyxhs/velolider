"use client"

import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";
   
  export function PopoverDefault() {
    return (
        <Popover>
        <PopoverHandler>
        <Button>Звонок с 10:00 до 19:00</Button>
        </PopoverHandler>
        <PopoverContent>
          Звонок доступен с 10:00 до 19:00
        </PopoverContent>
      </Popover>
    );
  }
  