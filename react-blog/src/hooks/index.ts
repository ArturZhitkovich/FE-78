import { useCallback, useState } from "react";

interface UseCounterProps {
  defaultValue?: number
  options?: {
    min?: number,
    max?: number
  }
} 

interface UseCounterFunc {
  increment: () => void,
  decrement: () => void,
  set: (value: number) => void,
  reset: () => void,
}

export const useCounter = (props: UseCounterProps) => {
  const { defaultValue = 0, options } = props;
  const min = options?.min ?? -Infinity;
  const max = options?.max ?? Infinity;

  const [value, setValue] = useState<number>(defaultValue);

  const increment = useCallback(() => {
    setValue((prev) => {
      if (prev < max) {
        return prev + 1
      }

      return prev;
    })
  }, [])

  const decrement = useCallback(() => {
    setValue((prev) => {
      if (prev > min) {
        return prev - 1
      }

      return prev;
    })
  }, [])

  const set = useCallback((newValue: number) => {
    if (newValue > max || newValue < min) {
      return
    }

    setValue(newValue)
  }, [])

  const reset = useCallback(() => {
    setValue(defaultValue)
  }, [])

  return [value, {increment, decrement, set, reset}] as [number, UseCounterFunc]
}