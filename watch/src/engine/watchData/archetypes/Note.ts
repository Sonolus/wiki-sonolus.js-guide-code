import { EngineArchetypeDataName } from 'sonolus-core'
import { effect } from '../effect.js'
import { note } from '../note.js'
import { skin } from '../skin.js'

export class Note extends Archetype {
    hasInput = true

    data = this.defineData({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    initialized = this.entityMemory(Boolean)

    targetTime = this.entityMemory(Number)

    visualTime = this.entityMemory({
        min: Number,
        max: Number,
    })

    z = this.entityMemory(Number)

    globalPreprocess() {
        this.life.set({
            perfect: 10,
            great: 0,
            good: 0,
            miss: -100,
        })
    }

    preprocess() {
        this.targetTime = bpmChanges.at(this.data.beat).time

        this.visualTime.max = timeScaleChanges.at(this.targetTime).scaledTime
        this.visualTime.min = this.visualTime.max - 120 / bpmChanges.at(this.data.beat).bpm

        effect.clips.perfect.schedule(this.targetTime, 0.02)

        this.result.time = this.targetTime
    }

    spawnTime() {
        return this.visualTime.min
    }

    despawnTime() {
        return this.visualTime.max
    }

    initialize() {
        if (this.initialized) return
        this.initialized = true

        this.z = 1000 - this.targetTime
    }

    updateParallel() {
        const y = Math.unlerp(this.visualTime.min, this.visualTime.max, time.scaled)

        const layout = Rect.one.mul(note.radius).scale(1, -1).translate(0, y)

        skin.sprites.note.draw(layout, this.z, 1)
    }
}
