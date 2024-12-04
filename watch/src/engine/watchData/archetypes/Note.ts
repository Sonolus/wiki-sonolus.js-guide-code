import { EngineArchetypeDataName } from '@sonolus/core'

export class Note extends Archetype {
    import = this.defineImport({
        beat: { name: EngineArchetypeDataName.Beat, type: Number },
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
    }

    spawnTime() {
        return this.visualTime.min
    }

    despawnTime() {
        return this.visualTime.max
    }
}
