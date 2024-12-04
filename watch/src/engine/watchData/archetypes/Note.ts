import { EngineArchetypeDataName } from '@sonolus/core'

import { effect } from '../effect.js'
import { note } from '../note.js'
import { particle } from '../particle.js'
import { skin } from '../skin.js'

export class Note extends Archetype {
    hasInput = true

    import = this.defineImport({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
        judgment: { name: EngineArchetypeDataName.Judgment, type: DataType<Judgment> },
        accuracy: { name: EngineArchetypeDataName.Accuracy, type: Number },
    })

    targetTime = this.entityMemory(Number)

    visualTime = this.entityMemory(Range)

    globalPreprocess() {
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

        if (replay.isReplay) {
            const hitTime = this.targetTime + this.import.accuracy

            switch (this.import.judgment) {
                case Judgment.Perfect:
                    effect.clips.perfect.schedule(hitTime, 0.02)
                    break
                case Judgment.Great:
                    effect.clips.great.schedule(hitTime, 0.02)
                    break
                case Judgment.Good:
                    effect.clips.good.schedule(hitTime, 0.02)
                    break
            }
        } else {
            effect.clips.perfect.schedule(this.targetTime, 0.02)
        }

        this.result.time = this.targetTime
    }

    spawnTime() {
        return this.visualTime.min
    }

    despawnTime() {
        return replay.isReplay
            ? timeScaleChanges.at(this.targetTime + this.import.accuracy).scaledTime
            : this.visualTime.max
    }

    updateParallel() {
        const y = Math.unlerp(this.visualTime.min, this.visualTime.max, time.scaled)

        const layout = Rect.one.mul(note.radius).scale(1, -1).translate(0, y)

        skin.sprites.note.draw(layout, [1, -this.targetTime], 1)
    }

    terminate() {
        if (time.skip) return
        if (replay.isReplay && !this.import.judgment) return

        const layout = Rect.one
            .mul(2 * note.radius)
            .scale(1, -1)
            .translate(0, 1)

        particle.effects.note.spawn(layout, 0.3, false)
    }
}
