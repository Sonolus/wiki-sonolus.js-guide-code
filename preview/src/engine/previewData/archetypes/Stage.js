import { chart } from '../chart.js'
import { panel } from '../panel.js'
import { print } from '../print.js'
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

        this.printTimes()
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

    printTimes() {
        for (let i = 1; i <= Math.floor(chart.duration); i++) {
            print(i, i, PrintFormat.Time, 0, PrintColor.Neutral, 'left')
        }
    }
}