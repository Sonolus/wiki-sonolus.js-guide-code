import { panel } from '../panel.js'
import { skin } from '../skin.js'

export class Stage extends Archetype {
    preprocessOrder = 1
    preprocess() {
        canvas.set({
            scroll: Scroll.LeftToRight,
            size: (panel.count * panel.w * screen.h) / 20,
        })
    }

    render() {
        this.renderPanels()
    }

    renderPanels() {
        for (let i = 0; i < panel.count; i++) {
            const x = i * panel.w

            const b = 0
            const t = panel.h

            skin.sprites.stageMiddle.draw(
                new Rect({
                    l: -1.5,
                    r: 1.5,
                    b,
                    t,
                }).translate(x, 0),
                0,
                1,
            )

            skin.sprites.stageLeftBorder.draw(
                new Rect({
                    l: -1.75,
                    r: -1.5,
                    b,
                    t,
                }).translate(x, 0),
                0,
                1,
            )
            skin.sprites.stageRightBorder.draw(
                new Rect({
                    l: 1.5,
                    r: 1.75,
                    b,
                    t,
                }).translate(x, 0),
                0,
                1,
            )
        }
    }
}
