import { UnitText } from 'sonolus-core'
import { skin } from './skin.js'

export const buckets = defineBuckets({
    note: {
        sprites: [
            {
                id: skin.sprites.note.id,
                x: 0,
                y: 0,
                w: 2,
                h: 2,
                rotation: 0,
            },
        ],
        unit: UnitText.Millisecond,
    },
})
