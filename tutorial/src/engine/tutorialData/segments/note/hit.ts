import { effect } from '../../effect.js'
import { note } from '../../note.js'
import { particle } from '../../particle.js'

export const noteHit = {
    enter() {
        effect.clips.perfect.play(0)

        const layout = Rect.one
            .mul(2 * note.radius)
            .scale(1, -1)
            .translate(0, 1)

        particle.effects.note.spawn(layout, 0.3, false)
    },
}
