import { noteDisplay } from '../../components/noteDisplay.js'

export const noteFall = {
    enter() {
        noteDisplay.showFall()
    },

    exit() {
        noteDisplay.clear()
    },
}
