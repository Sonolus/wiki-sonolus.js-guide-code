import { EngineConfigurationUI } from 'sonolus-core'

export const ui: EngineConfigurationUI = {
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
