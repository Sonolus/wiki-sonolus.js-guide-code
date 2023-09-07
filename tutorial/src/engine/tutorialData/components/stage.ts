import { judgeLine } from '../judgeLine.js'
import { note } from '../note.js'
import { skin } from '../skin.js'

export const stage = {
    update() {
        const layout = new Rect({
            l: judgeLine.l,
            r: judgeLine.r,
            t: 1 - note.radius / 4,
            b: 1 + note.radius / 4,
        })

        skin.sprites.judgeLine.draw(layout, 0, 1)
    },
}
