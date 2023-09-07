import { panel } from '../panel.js'
import { skin } from '../skin.js'

export class Initialization extends Archetype {
    preprocess() {
        const transform = Mat.identity
            .translate(panel.w / 2, 0)
            .scale(screen.h / 20, screen.h / panel.h)
            .translate(screen.l, screen.b)
        skin.transform.set(transform)

        ui.menu.set({
            anchor: screen.rect.lt.add(new Vec(0.05, -0.05)),
            pivot: { x: 0, y: 1 },
            size: new Vec(0.15, 0.15).mul(ui.configuration.menu.scale),
            rotation: 0,
            alpha: ui.configuration.menu.alpha,
            background: true,
        })

        ui.progress.set({
            anchor: screen.rect.lb.add(new Vec(0.05, 0.05)),
            pivot: { x: 0, y: 0 },
            size: { x: screen.rect.w - 0.1, y: 0.15 * ui.configuration.progress.scale },
            rotation: 0,
            alpha: ui.configuration.progress.alpha,
            background: true,
        })
    }
}
