import { createApp } from "vue"
import { createWebHistory } from "vue-router"
import { createRouter } from "vue-router/auto"
import { createVuestic } from "vuestic-ui"
import { createPinia } from "pinia"

import App from "./App.vue"

import "vuestic-ui/css"
import "./assets/styles/google-font.css"

const app = createApp(App)

app.use(createPinia())
app.use(createRouter({ history: createWebHistory() }))
app.use(createVuestic())

app.mount("#app")
