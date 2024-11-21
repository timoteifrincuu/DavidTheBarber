import { defineConfig } from 'vite'
export default defineConfig({
    base: '',
    build: {
        rollupOptions: {
            input: [
                "./index.html",
                "./appointment.html",
                "./about.html",
                "./account.html",
                "./services.html",
                "./log.html",
                "./sign.html",
                "./gallery.html",
                "./reviews.html",
                "./contact.html",
            ]
        }
    }
})