import {
    Add,
    createEntityData,
    EntityInfo,
    HorizontalAlign,
    LevelData,
    Pointer,
    ScreenAspectRatio,
    Subtract,
    Time,
    UIMenu,
    visualize,
} from 'sonolus.js'

console.log(visualize(LevelData))

const time = LevelData.to(0)

console.log(visualize(Add(time, 1)))

const screenAspectRatio = LevelData.to(2)

console.log(visualize(screenAspectRatio))

console.log(visualize(Add(Time, 1)))

console.log(
    visualize(
        UIMenu.set(
            Subtract(0.05, ScreenAspectRatio),
            0.95,
            0,
            1,
            0.15,
            0.15,
            0,
            1,
            HorizontalAlign.Center,
            true
        )
    )
)

console.log(visualize([EntityInfo.state, EntityInfo.of(5).state]))

class EntityDataPointer extends Pointer {
    get time() {
        return this.to(0)
    }

    get isSilent() {
        return this.to(1)
    }
}

const EntityData = createEntityData(EntityDataPointer)

console.log(visualize([EntityData.isSilent, EntityData.of(5).isSilent]))
