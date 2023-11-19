import { ref } from 'vue'

export default function useCountVisible() {
  const visibleCountPassword = ref(0)
  const visibleCountEmail = ref(0)

  function countVisibleEmail(node: any) {
    node.ledger.count('visible', (message: any) => message.visible)
    visibleCountEmail.value = node.ledger.value('visible')
    node.on('count:visible', ({ payload }: any) => {
      visibleCountEmail.value = payload
    })
  }
  function countVisiblePassword(node: any) {
    node.ledger.count('visible', (message: any) => message.visible)
    visibleCountPassword.value = node.ledger.value('visible')
    node.on('count:visible', ({ payload }: any) => {
      visibleCountPassword.value = payload
    })
  }
  return { countVisibleEmail, countVisiblePassword, visibleCountPassword, visibleCountEmail }
}
