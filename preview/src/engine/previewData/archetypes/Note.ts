import { EngineArchetypeDataName } from 'sonolus-core'
import { options } from '../../configuration/options.js'
import { chart } from '../chart.js'
import { panel } from '../panel.js'
import { scaledScreen } from '../scaledScreen.js'
import { skin } from '../skin.js'

export class Note extends Archetype {
    data = this.defineData({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    preprocess() {
        chart.beats = Math.max(chart.beats, this.data.beat)
        chart.duration = Math.max(chart.duration, bpmChanges.at(this.data.beat).time)
    }

    render() {
        const time = bpmChanges.at(this.data.beat).time
        const pos = panel.getPos(time)

        const layout = Rect.one.mul(options.noteSize).scale(1, scaledScreen.wToH).add(pos)
        const z = 1000 - time

        skin.sprites.note.draw(layout, z, 1)
    }
}
