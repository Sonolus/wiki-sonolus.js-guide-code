import { EngineArchetypeDataName } from 'sonolus-core'
import { buckets } from '../buckets.js'
import { note } from '../note.js'
import { skin } from '../skin.js'
import { windows } from '../windows.js'
import { isUsed, markAsUsed } from './InputManager.js'

export class Note extends Archetype {
    hasInput = true

    data = this.defineData({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    targetTime = this.entityMemory(Number)

    visualTime = this.entityMemory({
        min: Number,
        max: Number,
    })

    spawnTime = this.entityMemory(Number)

    inputTime = this.entityMemory({
        min: Number,
        max: Number,
    })

    z = this.entityMemory(Number)

    globalPreprocess() {
        const toMs = (window) => ({
            min: window.min * 1000,
            max: window.max * 1000,
        })

        buckets.note.set({
            perfect: toMs(windows.perfect),
            great: toMs(windows.great),
            good: toMs(windows.good),
        })

        this.life.set({
            perfect: 10,
            great: 0,
            good: 0,
            miss: -100,
        })
    }

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
        this.inputTime.min = this.targetTime + windows.good.min + input.offset
        this.inputTime.max = this.targetTime + windows.good.max + input.offset

        this.z = 1000 - this.targetTime
    }

    touchOrder = 1
    touch() {
        if (time.now < this.inputTime.min) return

        for (const touch of touches) {
            if (!touch.started) continue
            if (isUsed(touch)) continue

            markAsUsed(touch)

            this.result.judgment = input.judge(touch.startTime, this.targetTime, windows)
            this.result.accuracy = touch.startTime - this.targetTime

            this.result.bucket.index = buckets.note.index
            this.result.bucket.value = this.result.accuracy * 1000

            this.despawn = true
            return
        }
    }

    updateParallel() {
        if (time.now > this.inputTime.max) this.despawn = true
        if (this.despawn) return

        const y = Math.unlerp(this.visualTime.min, this.visualTime.max, time.now)

        const layout = Rect.one.mul(note.radius).scale(1, -1).translate(0, y)

        skin.sprites.note.draw(layout, this.z, 1)
    }
}
