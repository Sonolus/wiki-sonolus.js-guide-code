import {
    ConsecutiveGreatScore,
    GoodMultiplier,
    GreatMultiplier,
    HorizontalAlign,
    LevelBucket,
    Multiply,
    PerfectMultiplier,
    ScreenAspectRatio,
    Subtract,
    UIComboText,
    UIComboValue,
    UIJudgment,
    UIMenu,
    UIPrimaryMetricBar,
    UIPrimaryMetricValue,
} from 'sonolus.js'
import { buckets } from '../buckets.mjs'

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
        UIPrimaryMetricBar.set(
            Subtract(ScreenAspectRatio, 0.05),
            0.95,
            1,
            1,
            0.75,
            0.15,
            0,
            1,
            HorizontalAlign.Left,
            true
        ),
        UIPrimaryMetricValue.set(
            Subtract(ScreenAspectRatio, 0.085),
            0.915,
            1,
            1,
            0,
            0.08,
            0,
            1,
            HorizontalAlign.Right,
            false
        ),

        LevelBucket.of(buckets.noteIndex).setBucket(50, 100, 200),

        PerfectMultiplier.set(1),
        GreatMultiplier.set(0.75),
        GoodMultiplier.set(0.5),

        ConsecutiveGreatScore.set(0.01, 10, 50),
    ]
    const spawnOrder = 0

    const updateSequential = true

    return {
        preprocess,
        spawnOrder,
        updateSequential,
    }
}
