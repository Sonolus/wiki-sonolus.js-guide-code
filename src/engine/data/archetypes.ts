import { defineArchetypes } from 'sonolus.js'
import { scripts } from './scripts'

export const archetypes = defineArchetypes({
    initialization: scripts.initializationIndex,
    stage: scripts.stageIndex,
})
