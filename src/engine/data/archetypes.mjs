import { defineArchetypes } from 'sonolus.js'
import { scripts } from './scripts/index.mjs'

export const archetypes = defineArchetypes({
    initialization: scripts.initializationIndex,
    stage: scripts.stageIndex,
    note: {
        script: scripts.noteIndex,
        input: true,
    },
})
