import {
    Add,
    createEntityData,
    EntityMemory,
    GreaterOr,
    Pointer,
    Subtract,
    Time,
} from 'sonolus.js'

class EntityDataPointer extends Pointer {
    get time() {
        return this.to(0)
    }
}

const EntityData = createEntityData(EntityDataPointer)

export function note() {
    const spawnTime = EntityMemory.to(0)

    const preprocess = spawnTime.set(Subtract(EntityData.time, 1))

    const spawnOrder = Add(spawnTime, 1000)

    const shouldSpawn = GreaterOr(Time, spawnTime)

    return {
        preprocess,
        spawnOrder,
        shouldSpawn,
    }
}
