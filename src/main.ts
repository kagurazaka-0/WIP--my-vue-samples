import { createApp } from "vue"
import { createWebHistory } from "vue-router"
import { createRouter } from "vue-router/auto"
import { createPinia } from "pinia"
import PrimeVue from "primevue/config"

import App from "./App.vue"

import "primevue/resources/themes/aura-light-green/theme.css"

const app = createApp(App)

app.use(createPinia())
app.use(createRouter({ history: createWebHistory() }))

app.use(PrimeVue, {})

app.mount("#app")

/*
primevue/resources/themes/aura-light-blue/theme.css
primevue/resources/themes/aura-light-indigo/theme.css
primevue/resources/themes/aura-light-purple/theme.css
primevue/resources/themes/aura-light-teal/theme.css
primevue/resources/themes/aura-light-green/theme.css
primevue/resources/themes/aura-light-amber/theme.css
primevue/resources/themes/aura-light-cyan/theme.css
primevue/resources/themes/aura-light-pink/theme.css
primevue/resources/themes/aura-light-lime/theme.css
primevue/resources/themes/aura-light-noir/theme.css
primevue/resources/themes/aura-dark-blue/theme.css
primevue/resources/themes/aura-dark-indigo/theme.css
primevue/resources/themes/aura-dark-purple/theme.css
primevue/resources/themes/aura-dark-teal/theme.css
primevue/resources/themes/aura-dark-green/theme.css
primevue/resources/themes/aura-dark-amber/theme.css
primevue/resources/themes/aura-dark-cyan/theme.css
primevue/resources/themes/aura-dark-pink/theme.css
primevue/resources/themes/aura-dark-lime/theme.css
primevue/resources/themes/aura-dark-noir/theme.css
 */
