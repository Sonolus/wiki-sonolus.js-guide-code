import { EngineArchetypeDataName } from '@sonolus/core'

import { chart } from '../chart.js'

export class Note extends Archetype {
    import = this.defineImport({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    preprocess() {
        chart.duration = Math.max(chart.duration, bpmChanges.at(this.import.beat).time)
    }
}
