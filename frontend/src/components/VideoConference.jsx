import React, { useEffect, useRef } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'


function randomID(len = 5) {
  let result = ''
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJ',
    maxPos = chars.length
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return result
}

export function getUrlParams(
  url = window.location.href
) {
  try {
    const parsed = new URL(url)
    return parsed.searchParams
  } catch (e) {
    return new URLSearchParams()
  }
}

export default function VideoConference() {
  const containerRef = useRef(null)
  const roomID = getUrlParams().get('roomID') || randomID(5)

  useEffect(() => {
    let zpInstance = null
    async function start() {
      const appID = Number(process.env.REACT_APP_ZEGO_APP_ID) || 0
      const serverSecret = process.env.REACT_APP_ZEGO_SERVER_SECRET

      if (!appID || !serverSecret) {
        console.error('Missing Zego config. Set REACT_APP_ZEGO_APP_ID and REACT_APP_ZEGO_SERVER_SECRET in env.')
        return
      }

      const userID = randomID(8)
      const userName = `user-${userID}`

      try {
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          userID,
          userName
        )

        const zp = ZegoUIKitPrebuilt.create(kitToken)
        zpInstance = zp

        zp.joinRoom({
          container: containerRef.current,
          sharedLinks: [
            {
              name: 'Personal link',
              url:
                window.location.protocol +
                '//' +
                window.location.host +
                window.location.pathname +
                '?roomID=' +
                roomID,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
          },
        })
      } catch (err) {
        console.error('Failed to start Zego meeting', err)
      }
    }

    start()

    return () => {
      try {
        if (zpInstance && typeof zpInstance.destroy === 'function') {
          zpInstance.destroy()
        }
      } catch (e) {
        // ignore
      }
    }
  }, [roomID])

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />
}