import { OptionName } from 'sonolus-core'
import { defineOptions } from 'sonolus.js'

export const options = defineOptions({
    speed: {
        name: OptionName.LevelSpeed,
        standard: true,
        type: 'slider',
        def: 1,
        min: 0.5,
        max: 2,
        step: 0.05,
        display: 'percentage',
    },
    random: {
        name: OptionName.Random,
        standard: true,
        type: 'toggle',
        def: 0,
    },
})
