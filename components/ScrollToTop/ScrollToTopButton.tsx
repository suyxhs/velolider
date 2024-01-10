"use client"

import ScrollToTop from "react-scroll-up"
import { ChevronUp } from "lucide-react"



export default function ScrollToTopButton() {
  return (
    <div className="relative z-[300]">
      <ScrollToTop showUnder={160}>
        <p className="fixed bottom-4 right-4 rounded-full bg-green-btn p-2 outline-none transition-opacity duration-200 z-40">
          <ChevronUp />
        </p>
      </ScrollToTop>
    </div>
  )
}