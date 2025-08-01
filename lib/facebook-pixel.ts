// Configuração do Meta Pixel
export const FACEBOOK_PIXEL_ID = '1708620136443131'

// Configuração do script do Meta Pixel
export const FACEBOOK_PIXEL_SCRIPT = `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${FACEBOOK_PIXEL_ID}');
  fbq('track', 'PageView');
`

// URL do noscript fallback
export const FACEBOOK_PIXEL_NOSCRIPT_URL = `https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`

// Função utilitária para verificar se o Meta Pixel está carregado
export const isFacebookPixelLoaded = (): boolean => {
  if (typeof window === 'undefined') return false
  return typeof window.fbq === 'function'
}

// Função utilitária para rastrear eventos
export const trackFacebookEvent = (eventName: string, parameters?: Record<string, any>): void => {
  if (typeof window === 'undefined' || !window.fbq) {
    console.warn('Facebook Pixel not loaded')
    return
  }

  if (parameters) {
    window.fbq('track', eventName, parameters)
  } else {
    window.fbq('track', eventName)
  }
}

// Função utilitária para rastrear eventos customizados
export const trackFacebookCustomEvent = (eventName: string, parameters?: Record<string, any>): void => {
  if (typeof window === 'undefined' || !window.fbq) {
    console.warn('Facebook Pixel not loaded')
    return
  }

  if (parameters) {
    window.fbq('trackCustom', eventName, parameters)
  } else {
    window.fbq('trackCustom', eventName)
  }
} 