import { EngineArchetypeDataName, EngineArchetypeName } from 'sonolus-core'
import { chart } from './chart.js'

/** @type {import('sonolus-core').LevelData} */
export const data = {
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

        ...chart.bpms.map(({ beat, bpm }) => ({
            archetype: EngineArchetypeName.BpmChange,
            data: [
                {
                    name: EngineArchetypeDataName.Beat,
                    value: beat,
                },
                {
                    name: EngineArchetypeDataName.Bpm,
                    value: bpm,
                },
            ],
        })),

        ...chart.notes.map((beat) => ({
            archetype: 'Note',
            data: [
                {
                    name: EngineArchetypeDataName.Beat,
                    value: beat,
                },
            ],
        })),
    ],
}
