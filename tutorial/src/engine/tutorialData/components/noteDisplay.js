import { note } from '../note.js'
import { segment } from '../segment.js'
import { skin } from '../skin.js'

const Mode = {
    None: 0,
    Overlay: 1,
    Fall: 2,
    Frozen: 3,
}

let mode = tutorialMemory(Number)

export const noteDisplay = {
    update() {
        if (!mode) return

        if (mode === Mode.Overlay) {
            const a = Math.unlerpClamped(1, 0.75, segment.time)

            const layout = Rect.one
                .mul(2 * note.radius)
                .scale(1, -1)
                .translate(0, 0.5)

            skin.sprites.note.draw(layout, 1000, a)
        } else {
            const y = mode === Mode.Fall ? Math.unlerp(0, 2, segment.time) : 1

            const layout = Rect.one.mul(note.radius).scale(1, -1).translate(0, y)

            skin.sprites.note.draw(layout, 1000, 1)
        }
    },

    showOverlay() {
        mode = Mode.Overlay
    },

    showFall() {
        mode = Mode.Fall
    },

    showFrozen() {
        mode = Mode.Frozen
    },

    clear() {
        mode = Mode.None
    },
}
