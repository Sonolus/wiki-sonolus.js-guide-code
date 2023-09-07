import { judgeLine } from '../judgeLine.js'
import { note } from '../note.js'
import { particle } from '../particle.js'
import { skin } from '../skin.js'

export class Initialization extends Archetype {
    preprocess() {
        const noteRadius = 0.2
        const judgeLineY = -0.6

        const t = screen.t + noteRadius
        const b = judgeLineY
        const h = t - b

        const transform = Mat.identity.scale(h, -h).translate(0, t)

        skin.transform.set(transform)
        particle.transform.set(transform)

        judgeLine.l = screen.l / h
        judgeLine.r = screen.r / h

        note.radius = noteRadius / h

        ui.menu.set({
            anchor: screen.rect.lt.add(new Vec(0.05, -0.05)),
            pivot: { x: 0, y: 1 },
            size: new Vec(0.15, 0.15).mul(ui.configuration.menu.scale),
            rotation: 0,
            alpha: ui.configuration.menu.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: true,
        })
    }

    spawnOrder() {
        return 0
    }

    updateSequential() {
        this.despawn = true
    }
}
