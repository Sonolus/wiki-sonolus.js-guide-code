import { SkinSprite } from 'sonolus-core'
import {
    Add,
    createEntityData,
    Draw,
    EntityMemory,
    GreaterOr,
    Pointer,
    Remap,
    Script,
    Subtract,
    Time,
} from 'sonolus.js'

class EntityDataPointer extends Pointer {
    public get time() {
        return this.to<number>(0)
    }
}

const EntityData = createEntityData(EntityDataPointer)

export function note(): Script {
    const spawnTime = EntityMemory.to<number>(0)
    const z = EntityMemory.to<number>(1)

    const yCurrent = EntityMemory.to<number>(32)

    const preprocess = [
        spawnTime.set(Subtract(EntityData.time, 1)),
        z.set(Subtract(1000, EntityData.time)),
    ]

    const spawnOrder = Add(spawnTime, 1000)

    const shouldSpawn = GreaterOr(Time, spawnTime)

    const radius = 0.2
    const yFrom = 1 + radius
    const yTo = -0.6

    const left = -radius
    const right = radius
    const top = Add(yCurrent, radius)
    const bottom = Subtract(yCurrent, radius)

    const updateParallel = [
        yCurrent.set(Remap(spawnTime, EntityData.time, yFrom, yTo, Time)),
        Draw(
            SkinSprite.NoteHeadCyan,
            left,
            bottom,
            left,
            top,
            right,
            top,
            right,
            bottom,
            z,
            1
        ),
    ]

    return {
        preprocess,
        spawnOrder,
        shouldSpawn,
        updateParallel,
    }
}
