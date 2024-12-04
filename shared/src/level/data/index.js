import { EngineArchetypeDataName, EngineArchetypeName } from '@sonolus/core'

/** @type {import('@sonolus/core').LevelData} */
export const data = {
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
            archetype: EngineArchetypeName.BpmChange,
            data: [
                {
                    name: EngineArchetypeDataName.Beat,
                    value: 0,
                },
                {
                    name: EngineArchetypeDataName.Bpm,
                    value: 120,
                },
            ],
        },
        {
            archetype: 'Note',
            data: [
                {
                    name: EngineArchetypeDataName.Beat,
                    value: 4,
                },
            ],
        },
    ],
}
