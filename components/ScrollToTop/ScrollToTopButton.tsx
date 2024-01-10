"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import clsx from "clsx"

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-2 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        className={clsx(
          isVisible ? 'opacity-100' : 'opacity-0',
          'fixed bottom-4 right-4 rounded-full bg-green-btn p-2 outline-none transition-opacity duration-200 z-40',
        )}
      >
        <ChevronUp aria-hidden="true" />
      </button>
    </div>
  )
}

export default ScrollToTopButton