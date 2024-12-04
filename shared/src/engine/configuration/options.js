import { Text } from '@sonolus/core'

/** @satisfies {Record<string, import('@sonolus/core').EngineConfigurationOption>} */
export const optionsDefinition = {
    speed: {
        name: Text.Speed,
        standard: true,
        type: 'slider',
        def: 1,
        min: 0.5,
        max: 2,
        step: 0.05,
        unit: Text.PercentageUnit,
    },
    noteSize: {
        name: Text.NoteSize,
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 2,
        step: 0.05,
        unit: Text.PercentageUnit,
    },
}
