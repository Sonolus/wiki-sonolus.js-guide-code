import { readFileSync } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { archetypes } from '../../engine/data/archetypes.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const levelData = {
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
