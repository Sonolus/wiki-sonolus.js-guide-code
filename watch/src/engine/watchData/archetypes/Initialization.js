export class Initialization extends Archetype {
    preprocess() {
        ui.menu.set({
            anchor: safeArea.rect.lt.add(new Vec(0.05, -0.05)),
            pivot: { x: 0, y: 1 },
            size: new Vec(0.15, 0.15).mul(ui.configuration.menu.scale),
            rotation: 0,
            alpha: ui.configuration.menu.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: true,
        })

        ui.progress.bar.set({
            anchor: safeArea.rect.lb.add(new Vec(0.05, 0.05)),
            pivot: { x: 0, y: 0 },
            size: { x: safeArea.rect.w - 0.1, y: 0.15 * ui.configuration.progress.scale },
            rotation: 0,
            alpha: ui.configuration.progress.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: true,
        })
        ui.progress.graph.set({
            anchor: safeArea.rect.lb
                .add(new Vec(0.05, 0.1))
                .add(new Vec(0, 0.15 * ui.configuration.progress.scale)),
            pivot: { x: 0, y: 0 },
            size: { x: safeArea.rect.w - 0.1, y: 0.3 * ui.configuration.progress.scale },
            rotation: 0,
            alpha: ui.configuration.progress.alpha,
            horizontalAlign: HorizontalAlign.Center,
            background: true,
        })
    }
}
