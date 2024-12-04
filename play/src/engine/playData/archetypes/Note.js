import { EngineArchetypeDataName } from '@sonolus/core'

import { note } from '../note.js'
import { skin } from '../skin.js'
import { windows } from '../windows.js'
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

    preprocess() {
        this.targetTime = bpmChanges.at(this.import.beat).time

        this.visualTime.copyFrom(Range.l.add(this.targetTime))

        this.spawnTime = this.visualTime.min
    }

    spawnOrder() {
        return 1000 + this.spawnTime
    }

    shouldSpawn() {
        return time.now >= this.spawnTime
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

            this.despawn = true
            return
        }
    }

    updateParallel() {
        if (time.now > this.inputTime.max) this.despawn = true
        if (this.despawn) return

        const y = Math.unlerp(this.visualTime.min, this.visualTime.max, time.now)

        const layout = Rect.one.mul(note.radius).scale(1, -1).translate(0, y)

        skin.sprites.note.draw(layout, [1, -this.targetTime], 1)
    }
}
