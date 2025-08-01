'use client'

import { useEffect } from 'react'
import { useFacebookPixel, FB_EVENTS } from '@/hooks/useFacebookPixel'

interface FacebookPixelTrackerProps {
  eventName?: string
  parameters?: Record<string, any>
  trackOnMount?: boolean
  children?: React.ReactNode
}

export const FacebookPixelTracker: React.FC<FacebookPixelTrackerProps> = ({
  eventName,
  parameters,
  trackOnMount = false,
  children
}) => {
  const { trackEvent } = useFacebookPixel()

  useEffect(() => {
    if (trackOnMount && eventName) {
      trackEvent(eventName, parameters)
    }
  }, [trackOnMount, eventName, parameters, trackEvent])

  if (children) {
    return <>{children}</>
  }

  return null
}

// Componentes específicos para eventos comuns
export const LeadTracker: React.FC<{ parameters?: Record<string, any> }> = ({ parameters }) => (
  <FacebookPixelTracker 
    eventName={FB_EVENTS.LEAD} 
    parameters={parameters} 
    trackOnMount={true} 
  />
)

export const ContactTracker: React.FC<{ parameters?: Record<string, any> }> = ({ parameters }) => (
  <FacebookPixelTracker 
    eventName={FB_EVENTS.CONTACT} 
    parameters={parameters} 
    trackOnMount={true} 
  />
)

export const SubscribeTracker: React.FC<{ parameters?: Record<string, any> }> = ({ parameters }) => (
  <FacebookPixelTracker 
    eventName={FB_EVENTS.SUBSCRIBE} 
    parameters={parameters} 
    trackOnMount={true} 
  />
)

export const ViewContentTracker: React.FC<{ parameters?: Record<string, any> }> = ({ parameters }) => (
  <FacebookPixelTracker 
    eventName={FB_EVENTS.VIEW_CONTENT} 
    parameters={parameters} 
    trackOnMount={true} 
  />
) 