import { judgeLine } from '../judgeLine.js'
import { note } from '../note.js'
import { skin } from '../skin.js'

export class Stage extends Archetype {
    spawnOrder() {
        return 1
    }

    shouldSpawn() {
        return entityInfos.get(0).state === EntityState.Despawned
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
