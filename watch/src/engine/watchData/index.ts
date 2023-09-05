import { archetypes } from './archetypes/index.js'
import { effect } from './effect.js'
import { particle } from './particle.js'
import { skin } from './skin.js'
import { updateSpawn } from './updateSpawn.js'

export const watchData = {
    skin,
    effect,
    particle,
    archetypes,
    updateSpawn,

    globalResolver: (name: string) => eval(name) as unknown,
}
