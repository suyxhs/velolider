'use client'

import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
 
export function DrawerPlacement() {
  const [openBottom, setOpenBottom] = React.useState(false);

  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);
 
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <Button className="text-black bg-green-btn" onClick={openDrawerBottom}>Подробная информация</Button>

      </div>
      <Drawer
        placement="bottom"
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4 rounded-t-[20px] z-50"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            ВелоЛидер
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerBottom}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal h-[150px] overflow-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ut placeat perferendis ullam quia, iusto neque iure architecto ex temporibus deleniti. Dolores voluptatibus veritatis quidem officiis nihil aliquam architecto adipisci.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ut placeat perferendis ullam quia, iusto neque iure architecto ex temporibus deleniti. Dolores voluptatibus veritatis quidem officiis nihil aliquam architecto adipisci.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ut placeat perferendis ullam quia, iusto neque iure architecto ex temporibus deleniti. Dolores voluptatibus veritatis quidem officiis nihil aliquam architecto adipisci.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ut placeat perferendis ullam quia, iusto neque iure architecto ex temporibus deleniti. Dolores voluptatibus veritatis quidem officiis nihil aliquam architecto adipisci.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ut placeat perferendis ullam quia, iusto neque iure architecto ex temporibus deleniti. Dolores voluptatibus veritatis quidem officiis nihil aliquam architecto adipisci.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ut placeat perferendis ullam quia, iusto neque iure architecto ex temporibus deleniti. Dolores voluptatibus veritatis quidem officiis nihil aliquam architecto adipisci.
        </Typography>
        <div className="flex gap-2">
          <Button className="text-black bg-violet" size="sm">
            Новости ВелоЛидер
          </Button>
          <Button className="text-black bg-green-btn" size="sm">Посты</Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
