import { useCallback, useEffect, useState } from 'react'

const useKeypress = (events) => {
  const [pressedKey, setPressedKey] = useState(undefined)

  const handleKeyUp = useCallback(
    (event) => {
      setPressedKey(event.key)
    },
    [setPressedKey]
  )

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  useEffect(() => {
    if (!pressedKey) {
      return
    }

    events.forEach((event) => {
      if (event.keys.includes(pressedKey)) {
        event.action()
      }
    })

    setPressedKey(undefined)
  }, [pressedKey])
}

export default useKeypress
