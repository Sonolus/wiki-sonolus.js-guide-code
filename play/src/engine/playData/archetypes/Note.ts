export class Note extends Archetype {
    data = this.defineData({
        time: { name: 'time', type: Number },
    })

    updateParallel() {
        debug.log(this.data.time)
    }
}
