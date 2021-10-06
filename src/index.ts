import { build } from 'sonolus.js'
import { engine } from './engine'
import { level } from './level'

export const buildOutput = build({
    engine,
    level,
})
