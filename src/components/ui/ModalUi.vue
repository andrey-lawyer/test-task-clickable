<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div class="modal" v-if="props.isShown" @click="hideModal">
        <div @click.stop class="modal__content">
          <button class="button_close" type="button" @click="hideModal">
            <template v-if="isMobile">
              <IconCloseMobile />
            </template>
            <template v-if="isDesk">
              <IconCloseDesk />
            </template>
          </button>

          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts" name="ModalUi">
import { watch, defineProps } from 'vue'

import useMediaScreen from '@/hooks/useMediaScreen'
import IconCloseMobile from '../icons/IconCloseMobile.vue'
import IconCloseDesk from '../icons/IconCloseDesk.vue'

interface IPropsModal {
  isShown: boolean
}
const props = withDefaults(defineProps<IPropsModal>(), {
  isShown: false
})
const emit = defineEmits(['update:isShown'])

const { isMobile, isDesk } = useMediaScreen()

function hideModal() {
  emit('update:isShown', false)
}

function handleKeyUp(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    hideModal()
  }
}
watch(props, () => {
  if (props.isShown) {
    window.addEventListener('keyup', handleKeyUp)
    document.body.classList.add('modal-open')
  } else {
    window.removeEventListener('keyup', handleKeyUp)
    document.body.classList.remove('modal-open')
  }
})
</script>

<style>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);

  backdrop-filter: blur(7.5px);
  position: fixed;
  display: flex;
  z-index: 999999999;
}

.modal__content {
  margin: auto;
  border-radius: 12px;
  background-color: var(--vt-c-white);
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
}
.button_close {
  position: absolute;
  top: 10rem;
  right: 10rem;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: none;
  z-index: 999;
  @media screen and (min-width: 1024px) {
    top: 16rem;
    right: 16rem;
  }
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.8s ease;
}
</style>
