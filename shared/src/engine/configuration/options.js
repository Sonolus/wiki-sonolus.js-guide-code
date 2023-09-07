import { NameText, UnitText } from 'sonolus-core'

/** @satisfies {Record<string, import('sonolus-core').EngineConfigurationOption>} */
export const optionsDefinition = {
    speed: {
        name: NameText.LevelSpeed,
        standard: true,
        type: 'slider',
        def: 1,
        min: 0.5,
        max: 2,
        step: 0.05,
        unit: UnitText.Percentage,
    },
    noteSize: {
        name: NameText.NoteSize,
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 2,
        step: 0.05,
        unit: UnitText.Percentage,
    },
}
