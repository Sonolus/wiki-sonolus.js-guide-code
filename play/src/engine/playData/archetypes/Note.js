import { EngineArchetypeDataName } from 'sonolus-core'

export class Note extends Archetype {
    data = this.defineData({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    updateParallel() {
        debug.log(this.data.beat)
    }
}
