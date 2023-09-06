import { effect } from '../effect.js'
import { judgeLine } from '../judgeLine.js'
import { note } from '../note.js'
import { skin } from '../skin.js'
import { isUsed } from './InputManager.js'

export class Stage extends Archetype {
    spawnOrder() {
        return 2
    }

    touchOrder = 2
    touch() {
        for (const touch of touches) {
            if (!touch.started) continue
            if (isUsed(touch)) continue

            effect.clips.stage.play(0.02)
            return
        }
    }

    updateParallel() {
        const layout = new Rect({
            l: judgeLine.l,
            r: judgeLine.r,
            t: 1 - note.radius / 4,
            b: 1 + note.radius / 4,
        })

        skin.sprites.judgeLine.draw(layout, 0, touches.count ? 1 : 0.5)
    }
}
