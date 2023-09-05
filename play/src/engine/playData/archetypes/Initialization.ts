export class Initialization extends Archetype {
    preprocess() {
        ui.menu.set({
            anchor: screen.rect.lt.add(new Vec(0.05, -0.05)),
            pivot: { x: 0, y: 1 },
            size: new Vec(0.15, 0.15).mul(ui.configuration.menu.scale),
            rotation: 0,
            alpha: ui.configuration.menu.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: true,
        })
    }

    spawnOrder() {
        return 0
    }

    updateSequential() {
        this.despawn = true
    }
}
