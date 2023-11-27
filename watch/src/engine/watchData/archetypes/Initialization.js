import { options } from '../../configuration/options.js'
import { judgeLine } from '../judgeLine.js'
import { note } from '../note.js'
import { particle } from '../particle.js'
import { skin } from '../skin.js'
import { archetypes } from './index.js'

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

        note.radius = (noteRadius / h) * options.noteSize

        score.base.set({
            perfect: 1,
            great: 0.75,
            good: 0.5,
        })
        score.consecutive.great.set({
            multiplier: 0.01,
            step: 10,
            cap: 50,
        })

        life.consecutive.perfect.set({
            increment: 50,
            step: 10,
        })

        ui.menu.set({
            anchor: screen.rect.lt.add(new Vec(0.05, -0.05)),
            pivot: { x: 0, y: 1 },
            size: new Vec(0.15, 0.15).mul(ui.configuration.menu.scale),
            rotation: 0,
            alpha: ui.configuration.menu.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: true,
        })

        ui.judgment.set({
            anchor: { x: 0, y: -0.4 },
            pivot: { x: 0.5, y: 0 },
            size: new Vec(0, 0.15).mul(ui.configuration.judgment.scale),
            rotation: 0,
            alpha: ui.configuration.judgment.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: false,
        })

        ui.combo.value.set({
            anchor: { x: screen.r * 0.7, y: 0 },
            pivot: { x: 0.5, y: 0 },
            size: new Vec(0, 0.2).mul(ui.configuration.combo.scale),
            rotation: 0,
            alpha: ui.configuration.combo.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: false,
        })
        ui.combo.text.set({
            anchor: { x: screen.r * 0.7, y: 0 },
            pivot: { x: 0.5, y: 1 },
            size: new Vec(0, 0.12).mul(ui.configuration.combo.scale),
            rotation: 0,
            alpha: ui.configuration.combo.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: false,
        })

        ui.metric.primary.bar.set({
            anchor: screen.rect.rt.sub(new Vec(0.05, 0.05)),
            pivot: { x: 1, y: 1 },
            size: new Vec(0.75, 0.15).mul(ui.configuration.metric.primary.scale),
            rotation: 0,
            alpha: ui.configuration.metric.primary.alpha,
            horizontalAlign: HorizontalAlign.Left,
            background: true,
        })
        ui.metric.primary.value.set({
            anchor: screen.rect.rt
                .sub(new Vec(0.05, 0.05))
                .sub(new Vec(0.035, 0.035).mul(ui.configuration.metric.primary.scale)),
            pivot: { x: 1, y: 1 },
            size: new Vec(0, 0.08).mul(ui.configuration.metric.primary.scale),
            rotation: 0,
            alpha: ui.configuration.metric.primary.alpha,
            horizontalAlign: HorizontalAlign.Right,
            background: false,
        })

        ui.metric.secondary.bar.set({
            anchor: screen.rect.rt
                .sub(new Vec(0.05, 0.05))
                .sub(new Vec(0, 0.15).mul(ui.configuration.metric.primary.scale))
                .sub(new Vec(0, 0.05)),
            pivot: { x: 1, y: 1 },
            size: new Vec(0.75, 0.15).mul(ui.configuration.metric.secondary.scale),
            rotation: 0,
            alpha: ui.configuration.metric.secondary.alpha,
            horizontalAlign: HorizontalAlign.Left,
            background: true,
        })
        ui.metric.secondary.value.set({
            anchor: screen.rect.rt
                .sub(new Vec(0.05, 0.05))
                .sub(new Vec(0, 0.15).mul(ui.configuration.metric.primary.scale))
                .sub(new Vec(0, 0.05))
                .sub(new Vec(0.035, 0.035).mul(ui.configuration.metric.secondary.scale)),
            pivot: { x: 1, y: 1 },
            size: new Vec(0, 0.08).mul(ui.configuration.metric.secondary.scale),
            rotation: 0,
            alpha: ui.configuration.metric.secondary.alpha,
            horizontalAlign: HorizontalAlign.Right,
            background: false,
        })

        ui.progress.set({
            anchor: screen.rect.lb.add(new Vec(0.05, 0.05)),
            pivot: { x: 0, y: 0 },
            size: { x: screen.rect.w - 0.1, y: 0.15 * ui.configuration.progress.scale },
            rotation: 0,
            alpha: ui.configuration.progress.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: true,
        })

        for (const archetype of Object.values(archetypes)) {
            if (!('globalPreprocess' in archetype)) continue

            archetype.globalPreprocess()
        }
    }
}
