import { createApp } from "vue"
import { createWebHistory } from "vue-router"
import { createRouter } from "vue-router/auto"
import { createPinia } from "pinia"

import App from "./App.vue"

const app = createApp(App)

app.use(createPinia())
app.use(createRouter({ history: createWebHistory() }))

app.mount("#app")
