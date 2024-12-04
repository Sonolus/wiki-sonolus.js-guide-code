const usedTouchIds = levelMemory(Collection(16, TouchId))

export const isUsed = (touch) => usedTouchIds.has(touch.id)

export const markAsUsed = (touch) => usedTouchIds.add(touch.id)

export class InputManager extends SpawnableArchetype({}) {
    touch() {
        usedTouchIds.clear()
    }
}
