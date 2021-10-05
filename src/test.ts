import { EngineConfigurationUI } from 'sonolus-core'
import {
    build,
    defineArchetypes,
    defineBuckets,
    defineOptions,
    defineScripts,
    HorizontalAlign,
    ScreenAspectRatio,
    serve,
    Subtract,
    UIMenu,
} from 'sonolus.js'

const options = defineOptions({})

const ui: EngineConfigurationUI = {
    primaryMetric: 'arcade',
    secondaryMetric: 'life',
    menuVisibility: {
        alpha: 1,
        scale: 1,
    },
    judgmentVisibility: {
        alpha: 1,
        scale: 1,
    },
    comboVisibility: {
        alpha: 1,
        scale: 1,
    },
    primaryMetricVisibility: {
        alpha: 1,
        scale: 1,
    },
    secondaryMetricVisibility: {
        alpha: 1,
        scale: 1,
    },
    judgmentAnimation: {
        scale: {
            from: 1,
            to: 1,
            duration: 0,
            ease: 'Linear',
        },
        alpha: {
            from: 1,
            to: 1,
            duration: 0,
            ease: 'Linear',
        },
    },
    comboAnimation: {
        scale: {
            from: 1,
            to: 1,
            duration: 0,
            ease: 'Linear',
        },
        alpha: {
            from: 1,
            to: 1,
            duration: 0,
            ease: 'Linear',
        },
    },
    judgmentErrorStyle: 'none',
    judgmentErrorPlacement: 'both',
    judgmentErrorMin: 0,
}

const engineConfiguration = {
    options,
    ui,
}

const buckets = defineBuckets({})

const scripts = defineScripts({
    initialization: () => ({
        preprocess: {
            code: UIMenu.set(
                Subtract(0.05, ScreenAspectRatio),
                0.95,
                0,
                1,
                0.15,
                0.15,
                0,
                1,
                HorizontalAlign.Center,
                true
            ),
        },
    }),
})

const archetypes = defineArchetypes({
    initialization: {
        script: scripts.initializationIndex,
    },
})

const engineData = {
    buckets,
    archetypes,
    scripts,
}

const levelData = {
    entities: [
        {
            archetype: archetypes.initializationIndex,
        },
    ],
}

const buildOutput = build({
    engine: {
        configuration: engineConfiguration,
        data: engineData,
    },

    level: {
        data: levelData,
    },
})

serve(buildOutput)
