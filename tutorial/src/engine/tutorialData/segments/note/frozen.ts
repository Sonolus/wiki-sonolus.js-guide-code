import { noteDisplay } from '../../components/noteDisplay.js'
import { instruction } from '../../instruction.js'
import { segment } from '../../segment.js'

export const noteFrozen = {
    enter() {
        noteDisplay.showFrozen()

        instruction.texts.tap.show()
    },

    update() {
        const angle = Math.remapClamped(0.25, 0.75, Math.PI / 6, Math.PI / 3, segment.time % 1)
        const a = Math.unlerpClamped(0.5, 0.25, Math.abs((segment.time % 1) - 0.5))

        const position = new Vec(0, -1)
            .rotate(Math.PI / 3)
            .mul(0.25 * ui.configuration.instruction.scale)
            .translate(0, -0.6)

        instruction.icons.hand.paint(
            new Vec(0, 1)
                .rotate(angle)
                .mul(0.25 * ui.configuration.instruction.scale)
                .add(position),
            0.25 * ui.configuration.instruction.scale,
            (180 * angle) / Math.PI,
            0,
            a * ui.configuration.instruction.alpha,
        )
    },

    exit() {
        noteDisplay.clear()

        instruction.texts.clear()
    },
}
