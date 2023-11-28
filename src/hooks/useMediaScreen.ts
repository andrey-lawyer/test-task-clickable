import { useMediaQuery } from '@vueuse/core'

export default function useMediaScreen() {
  const isMobile = useMediaQuery('(max-width: 1023.9px)')
  const isDesk = useMediaQuery('(min-width: 1024px)')
  return { isMobile, isDesk }
}
