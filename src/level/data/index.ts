import { readFileSync } from 'fs'
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
        ...readFileSync(__dirname + '/chart.txt', 'utf-8')
            .split('\n')
            .map((time) => ({
                archetype: archetypes.noteIndex,
                data: {
                    index: 0,
                    values: [+time],
                },
            })),
    ],
}
