import { defineScripts } from 'sonolus.js'
import { initialization } from './initialization'
import { note } from './note'
import { stage } from './stage'

export const scripts = defineScripts({
    initialization,
    stage,
    note,
})
