import { EngineArchetypeDataName } from '@sonolus/core'

export class Note extends Archetype {
    import = this.defineImport({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    updateParallel() {
        debug.log(this.import.beat)
    }
}
