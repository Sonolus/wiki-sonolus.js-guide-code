/** @type {import('@sonolus/core').EngineConfigurationUI} */
export const ui = {
    primaryMetric: 'arcade',
    secondaryMetric: 'life',
    menuVisibility: {
        scale: 1,
        alpha: 1,
    },
    judgmentVisibility: {
        scale: 1,
        alpha: 1,
    },
    comboVisibility: {
        scale: 1,
        alpha: 1,
    },
    primaryMetricVisibility: {
        scale: 1,
        alpha: 1,
    },
    secondaryMetricVisibility: {
        scale: 1,
        alpha: 1,
    },
    progressVisibility: {
        scale: 1,
        alpha: 1,
    },
    tutorialNavigationVisibility: {
        scale: 1,
        alpha: 1,
    },
    tutorialInstructionVisibility: {
        scale: 1,
        alpha: 1,
    },
    judgmentAnimation: {
        scale: {
            from: 1,
            to: 1,
            duration: 0,
            ease: 'none',
        },
        alpha: {
            from: 1,
            to: 0,
            duration: 0.2,
            ease: 'outCubic',
        },
    },
    comboAnimation: {
        scale: {
            from: 1.2,
            to: 1,
            duration: 0.2,
            ease: 'inCubic',
        },
        alpha: {
            from: 1,
            to: 1,
            duration: 0,
            ease: 'none',
        },
    },
    judgmentErrorStyle: 'none',
    judgmentErrorPlacement: 'center',
    judgmentErrorMin: 0,
}
