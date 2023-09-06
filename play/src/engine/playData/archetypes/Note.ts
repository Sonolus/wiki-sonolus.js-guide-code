import { EngineArchetypeDataName } from 'sonolus-core'
import { note } from '../note.js'
import { skin } from '../skin.js'

export class Note extends Archetype {
    data = this.defineData({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    targetTime = this.entityMemory(Number)

    visualTime = this.entityMemory({
        min: Number,
        max: Number,
    })

    spawnTime = this.entityMemory(Number)

    z = this.entityMemory(Number)

    preprocess() {
        this.targetTime = bpmChanges.at(this.data.beat).time

        this.visualTime.max = this.targetTime
        this.visualTime.min = this.visualTime.max - 1

        this.spawnTime = this.visualTime.min
    }

    spawnOrder() {
        return 1000 + this.spawnTime
    }

    shouldSpawn() {
        return time.now >= this.spawnTime
    }

    initialize() {
        this.z = 1000 - this.targetTime
    }

    updateParallel() {
        const y = Math.unlerp(this.visualTime.min, this.visualTime.max, time.now)

        const layout = Rect.one.mul(note.radius).scale(1, -1).translate(0, y)

        skin.sprites.note.draw(layout, this.z, 1)
    }
}
