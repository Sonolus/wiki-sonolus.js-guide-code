import { EngineArchetypeDataName } from 'sonolus-core'

export class Note extends Archetype {
    data = this.defineData({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    targetTime = this.entityMemory(Number)

    spawnTime = this.entityMemory(Number)

    preprocess() {
        this.targetTime = bpmChanges.at(this.data.beat).time

        this.spawnTime = this.targetTime - 1
    }

    spawnOrder() {
        return 1000 + this.spawnTime
    }

    shouldSpawn() {
        return time.now >= this.spawnTime
    }

    updateParallel() {
        debug.log(this.data.beat)
    }
}
