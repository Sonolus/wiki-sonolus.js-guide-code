import { judgeLine } from '../judgeLine.js'
import { note } from '../note.js'
import { particle } from '../particle.js'
import { skin } from '../skin.js'

export const initialization = {
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
            background: true,
        })

        ui.navigation.previous.set({
            anchor: { x: screen.l + 0.05, y: 0 },
            pivot: { x: 0, y: 0.5 },
            size: new Vec(0.15, 0.15).mul(ui.configuration.navigation.scale),
            rotation: 0,
            alpha: ui.configuration.navigation.alpha,
            background: true,
        })
        ui.navigation.next.set({
            anchor: { x: screen.r - 0.05, y: 0 },
            pivot: { x: 1, y: 0.5 },
            size: new Vec(0.15, 0.15).mul(ui.configuration.navigation.scale),
            rotation: 0,
            alpha: ui.configuration.navigation.alpha,
            background: true,
        })

        ui.instruction.set({
            anchor: Vec.zero,
            pivot: { x: 0.5, y: 0.5 },
            size: new Vec(1.2, 0.15).mul(ui.configuration.instruction.scale),
            rotation: 0,
            alpha: ui.configuration.instruction.alpha,
            background: true,
        })
    },
}
