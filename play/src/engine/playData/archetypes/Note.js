export class Note extends Archetype {
    import = this.defineImport({
        time: { name: 'time', type: Number },
    })

    updateParallel() {
        debug.log(this.import.time)
    }
}
