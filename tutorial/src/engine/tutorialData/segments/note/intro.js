import { noteDisplay } from '../../components/noteDisplay.js'

export const noteIntro = {
    enter() {
        noteDisplay.showOverlay()
    },

    exit() {
        noteDisplay.clear()
    },
}
