import { EngineArchetypeDataName, EngineArchetypeName, LevelData } from 'sonolus-core'

export const data: LevelData = {
    bgmOffset: 0,
    entities: [
        {
            archetype: 'Initialization',
            data: [],
        },
        {
            archetype: 'InputManager',
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
