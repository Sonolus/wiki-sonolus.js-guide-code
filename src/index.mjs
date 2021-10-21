import { build } from 'sonolus.js'
import { engine } from './engine/index.mjs'
import { level } from './level/index.mjs'

export const buildOutput = build({
    engine,
    level,
})
