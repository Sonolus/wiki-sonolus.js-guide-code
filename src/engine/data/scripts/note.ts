import {
    Add,
    createEntityData,
    EntityMemory,
    GreaterOr,
    Pointer,
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

    const preprocess = spawnTime.set(Subtract(EntityData.time, 1))

    const spawnOrder = Add(spawnTime, 1000)

    const shouldSpawn = GreaterOr(Time, spawnTime)

    return {
        preprocess,
        spawnOrder,
        shouldSpawn,
    }
}
