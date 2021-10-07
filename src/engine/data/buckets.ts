import { SkinSprite } from 'sonolus-core'
import { defineBuckets } from 'sonolus.js'

export const buckets = defineBuckets({
    note: {
        sprites: [
            {
                id: SkinSprite.NoteHeadCyan,
                x: 0,
                y: 0,
                w: 2,
                h: 2,
                rotation: 0,
            },
        ],
    },
})
