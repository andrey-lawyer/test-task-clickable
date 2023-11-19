import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import { defaultConfig, plugin } from '@formkit/vue'
import { createLocalStoragePlugin } from '@formkit/addons'

const app = createApp(App)
const head = createHead()

app
  .use(head)
  .use(
    plugin,
    defaultConfig({
      plugins: [
        createLocalStoragePlugin({
          prefix: 'formkit',
          key: undefined,
          control: undefined,
          maxAge: 3600000,
          debounce: 200,
          beforeSave: undefined,
          beforeLoad: undefined
        })
      ]
    })
  )
  .mount('#app')
