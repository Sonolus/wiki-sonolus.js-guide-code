import { SkinSpriteName } from 'sonolus-core'
import { panel } from './panel.js'

export const skin = defineSkin({
    sprites: {
        stageMiddle: SkinSpriteName.StageMiddle,
        stageLeftBorder: SkinSpriteName.StageLeftBorder,
        stageRightBorder: SkinSpriteName.StageRightBorder,
        note: SkinSpriteName.NoteHeadCyan,

        beatLine: SkinSpriteName.GridNeutral,
        bpmChangeLine: SkinSpriteName.GridPurple,
        timeScaleChangeLine: SkinSpriteName.GridYellow,
    },
})

export const line = (sprite, beat, a) => {
    const pos = panel.getPos(bpmChanges.at(beat).time)

    sprite.draw(Rect.one.scale(1.5, 0.005).add(pos), 1, a)
}
