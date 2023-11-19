import { useMediaQuery } from '@vueuse/core'

export default function useMediaScreen() {
  const isMobile = useMediaQuery('(max-width: 1919.9px)')
  const isDesk = useMediaQuery('(min-width: 1920px)')
  return { isMobile, isDesk }
}
