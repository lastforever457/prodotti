'use client'

import React, { useEffect, useState } from 'react'

const FloatingElement = ({
  children,
  delay,
}: {
  children: React.ReactNode
  delay?: number
}) => {
  const [clientDelay, setClientDelay] = useState<number | null>(null)

  useEffect(() => {
    // Use random delay if none is passed
    setClientDelay(delay ?? Math.random() * 3) // 0–3 seconds
  }, [delay])

  if (clientDelay === null) return null // Prevent rendering on server

  return (
    <div
      className="animate-float"
      style={{
        animationDelay: `${clientDelay}s`,
        animation: `float 6s ease-in-out infinite ${clientDelay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default FloatingElement
