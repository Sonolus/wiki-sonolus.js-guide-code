import { EngineArchetypeDataName } from '@sonolus/core'

import { options } from '../../configuration/options.js'
import { chart } from '../chart.js'
import { panel } from '../panel.js'
import { scaledScreen } from '../scaledScreen.js'
import { skin } from '../skin.js'

export class Note extends Archetype {
    import = this.defineImport({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    preprocess() {
        chart.duration = Math.max(chart.duration, bpmChanges.at(this.import.beat).time)
    }

    render() {
        const time = bpmChanges.at(this.import.beat).time
        const pos = panel.getPos(time)

        const layout = Rect.one.mul(options.noteSize).scale(1, scaledScreen.wToH).add(pos)

        skin.sprites.note.draw(layout, [1, -time], 1)
    }
}
