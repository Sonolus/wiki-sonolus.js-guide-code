import { EngineArchetypeDataName } from '@sonolus/core'

export class Note extends Archetype {
    import = this.defineImport({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    targetTime = this.entityMemory(Number)

    spawnTime = this.entityMemory(Number)

    preprocess() {
        this.targetTime = bpmChanges.at(this.import.beat).time

        this.spawnTime = this.targetTime - 1
    }

    spawnOrder() {
        return 1000 + this.spawnTime
    }

    shouldSpawn() {
        return time.now >= this.spawnTime
    }

    updateParallel() {
        debug.log(this.import.beat)
    }
}
