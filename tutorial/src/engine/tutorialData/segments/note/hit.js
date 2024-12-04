import { effect } from '../../effect.js'

export const noteHit = {
    enter() {
        effect.clips.perfect.play(0)
    },
}
