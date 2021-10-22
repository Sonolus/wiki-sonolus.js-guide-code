import { archetypes } from '../../engine/data/archetypes.mjs'

export const levelData = {
    entities: [
        {
            archetype: archetypes.initializationIndex,
        },
        {
            archetype: archetypes.stageIndex,
        },
        {
            archetype: archetypes.noteIndex,
            data: {
                index: 0,
                values: [2],
            },
        },
    ],
}
