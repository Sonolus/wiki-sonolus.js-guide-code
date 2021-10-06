import { LevelData } from 'sonolus-core'
import { archetypes } from '../../engine/data/archetypes'

export const levelData: LevelData = {
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
