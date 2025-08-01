import { useEffect } from 'react'

declare global {
  interface Window {
    fbq: any
  }
}

export const useFacebookPixel = () => {
  useEffect(() => {
    // Verifica se o fbq está disponível
    if (typeof window !== 'undefined' && window.fbq) {
      // Track pageview quando o componente montar
      window.fbq('track', 'PageView')
    }
  }, [])

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      if (parameters) {
        window.fbq('track', eventName, parameters)
      } else {
        window.fbq('track', eventName)
      }
    }
  }

  const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      if (parameters) {
        window.fbq('trackCustom', eventName, parameters)
      } else {
        window.fbq('trackCustom', eventName)
      }
    }
  }

  return {
    trackEvent,
    trackCustomEvent,
  }
}

// Eventos comuns pré-definidos
export const FB_EVENTS = {
  PURCHASE: 'Purchase',
  ADD_TO_CART: 'AddToCart',
  LEAD: 'Lead',
  CONTACT: 'Contact',
  SUBSCRIBE: 'Subscribe',
  VIEW_CONTENT: 'ViewContent',
  SEARCH: 'Search',
  INITIATE_CHECKOUT: 'InitiateCheckout',
  COMPLETE_REGISTRATION: 'CompleteRegistration',
} as const 