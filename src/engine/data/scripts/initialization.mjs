import {
    HorizontalAlign,
    Multiply,
    ScreenAspectRatio,
    Subtract,
    UIComboText,
    UIComboValue,
    UIJudgment,
    UIMenu,
} from 'sonolus.js'

export function initialization() {
    const preprocess = [
        UIMenu.set(
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
        UIJudgment.set(
            0,
            -0.4,
            0.5,
            0,
            0,
            0.15,
            0,
            1,
            HorizontalAlign.Center,
            false
        ),
        UIComboValue.set(
            Multiply(ScreenAspectRatio, 0.7),
            0,
            0.5,
            0,
            0,
            0.2,
            0,
            1,
            HorizontalAlign.Center,
            false
        ),
        UIComboText.set(
            Multiply(ScreenAspectRatio, 0.7),
            0,
            0.5,
            1,
            0,
            0.12,
            0,
            1,
            HorizontalAlign.Center,
            false
        ),
    ]
    const spawnOrder = 0

    const updateSequential = true

    return {
        preprocess,
        spawnOrder,
        updateSequential,
    }
}
