import { chart } from './chart.js'

export const panel = {
    w: 7,
    h: 2,

    get count() {
        return Math.ceil(chart.duration / this.h)
    },
}
