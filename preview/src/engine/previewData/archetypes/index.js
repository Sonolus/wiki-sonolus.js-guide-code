import { EngineArchetypeName } from 'sonolus-core'
import { BpmChange } from './BpmChange.js'
import { Initialization } from './Initialization.js'
import { Note } from './Note.js'
import { Stage } from './Stage.js'

export const archetypes = defineArchetypes({
    Initialization,
    Stage,
    Note,
    [EngineArchetypeName.BpmChange]: BpmChange,
})
