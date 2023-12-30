'use client'

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   
  export function MenuDefault() {
    return (
      <Menu>
        <MenuHandler>
          <Button>Прочее</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem><a className="text-black" href="/gallery">Галерея</a></MenuItem>
          <MenuItem><a className="text-black" href="/leaders">Наши лидеры</a></MenuItem>
        </MenuList>
      </Menu>
    );
  }
  