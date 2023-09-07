import { noteDisplay } from '../../components/noteDisplay.js'

export const noteFrozen = {
    enter() {
        noteDisplay.showFrozen()
    },

    exit() {
        noteDisplay.clear()
    },
}
