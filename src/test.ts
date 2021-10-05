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

const time = LevelData.to<number>(0)

console.log(visualize(Add(time, 1)))

const screenAspectRatio = LevelData.to<number>(2)

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
    public get time() {
        return this.to<number>(0)
    }

    public get isSilent() {
        return this.to<boolean>(1)
    }
}

const EntityData = createEntityData(EntityDataPointer)

console.log(visualize([EntityData.isSilent, EntityData.of(5).isSilent]))
