import { LevelData } from '@sonolus/core'

export const data: LevelData = {
    bgmOffset: 0,
    entities: [
        {
            archetype: 'Initialization',
            data: [],
        },
        {
            archetype: 'Stage',
            data: [],
        },
        {
            archetype: 'Note',
            data: [
                {
                    name: 'time',
                    value: 2,
                },
            ],
        },
    ],
}
