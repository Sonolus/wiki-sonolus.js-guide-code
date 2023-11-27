import { judgeLine } from '../judgeLine.js'
import { note } from '../note.js'
import { skin } from '../skin.js'

export class Stage extends Archetype {
    spawnTime() {
        return -999999
    }

    despawnTime() {
        return 999999
    }

    updateParallel() {
        const layout = new Rect({
            l: judgeLine.l,
            r: judgeLine.r,
            t: 1 - note.radius / 4,
            b: 1 + note.radius / 4,
        })

        skin.sprites.judgeLine.draw(layout, 0, 0.5)
    }
}
