import { EngineArchetypeDataName } from '@sonolus/core'

import { buckets } from '../buckets.js'
import { effect } from '../effect.js'
import { note } from '../note.js'
import { particle } from '../particle.js'
import { skin } from '../skin.js'
import { bucketWindows, windows } from '../windows.js'
import { isUsed, markAsUsed } from './InputManager.js'

export class Note extends Archetype {
    hasInput = true

    import = this.defineImport({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
    })

    targetTime = this.entityMemory(Number)

    visualTime = this.entityMemory(Range)

    spawnTime = this.entityMemory(Number)

    inputTime = this.entityMemory(Range)

    globalPreprocess() {
        buckets.note.set(bucketWindows)

        this.archetypeLife.set({
            perfect: 10,
            great: 0,
            good: 0,
            miss: -100,
        })
    }

    preprocess() {
        this.targetTime = bpmChanges.at(this.import.beat).time

        this.visualTime.copyFrom(
            Range.l
                .mul(120 / bpmChanges.at(this.import.beat).bpm)
                .add(timeScaleChanges.at(this.targetTime).scaledTime),
        )

        this.spawnTime = this.visualTime.min
    }

    spawnOrder() {
        return 1000 + this.spawnTime
    }

    shouldSpawn() {
        return time.scaled >= this.spawnTime
    }

    initialize() {
        this.inputTime.copyFrom(windows.good.add(this.targetTime).add(input.offset))

        this.result.accuracy = windows.good.max
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

            switch (this.result.judgment) {
                case Judgment.Perfect:
                    effect.clips.perfect.play(0.02)
                    break
                case Judgment.Great:
                    effect.clips.great.play(0.02)
                    break
                case Judgment.Good:
                    effect.clips.good.play(0.02)
                    break
            }

            const layout = Rect.one
                .mul(2 * note.radius)
                .scale(1, -1)
                .translate(0, 1)

            particle.effects.note.spawn(layout, 0.3, false)

            this.despawn = true
            return
        }
    }

    updateParallel() {
        if (time.now > this.inputTime.max) this.despawn = true
        if (this.despawn) return

        const y = Math.unlerp(this.visualTime.min, this.visualTime.max, time.scaled)

        const layout = Rect.one.mul(note.radius).scale(1, -1).translate(0, y)

        skin.sprites.note.draw(layout, [1, -this.targetTime], 1)
    }
}
