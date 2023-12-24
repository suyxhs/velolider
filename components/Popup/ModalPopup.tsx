import React from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"






export default function ModalPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>Ghb</DialogTrigger>
      <DialogContent className="max-w-2xl p-0">
        <div className="max-h-[80vh] overflow-y-scroll p-6">
          <h2 className="mb-2 text-xl font-semibold">Связаться с нами</h2>
          <p className="text-muted-foreground text-sm">Команда ВелоЛидер стремится быть доступной и своевременно отвечать на все поступающие в наш адрес запросы. </p>
          
          {/* <Image
            src={image}
            width={350}
            height={100}
            alt={title}
            objectFit="contain"
            className="mx-auto my-6"
          /> */}
          
          <div className="mb-2">
                <p  className="mb-2">
                  Тестирование
                </p>
          </div>
          
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
