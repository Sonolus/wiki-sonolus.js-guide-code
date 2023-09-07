import { EngineArchetypeDataName } from 'sonolus-core'
import { chart } from '../chart.js'

export class Note extends Archetype {
    data = this.defineData({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    preprocess() {
        chart.duration = Math.max(chart.duration, bpmChanges.at(this.data.beat).time)
    }
}
