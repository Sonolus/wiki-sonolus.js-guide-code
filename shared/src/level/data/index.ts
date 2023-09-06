import { EngineArchetypeDataName, EngineArchetypeName, LevelData } from 'sonolus-core'
import { chart } from './chart.js'

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

        ...chart.timeScales.map(({ beat, timeScale }) => ({
            archetype: EngineArchetypeName.TimeScaleChange,
            data: [
                {
                    name: EngineArchetypeDataName.Beat,
                    value: beat,
                },
                {
                    name: EngineArchetypeDataName.TimeScale,
                    value: timeScale,
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
