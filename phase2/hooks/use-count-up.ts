"use client"

import { useEffect, useRef, useState } from "react"

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

/**
 * useCountUp
 * Animates a number from 0 to target over the given duration.
 */
export function useCountUp(target: number, durationMs: number = 400): number {
  const [value, setValue] = useState(0)
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Respect reduced motion: skip animation and set value immediately
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion || durationMs <= 0) {
      setValue(target)
      return
    }

    setValue(0)
    startTimeRef.current = null

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp
      const elapsed = timestamp - (startTimeRef.current ?? 0)
      const progress = Math.min(1, elapsed / durationMs)
      const eased = easeOutCubic(progress)
      setValue(Math.round(target * eased))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, durationMs])

  return value
}


