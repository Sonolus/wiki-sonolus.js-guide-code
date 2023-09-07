import { panel } from './panel.js'
import { skin } from './skin.js'

export const print = (value, time, format, decimalPlaces, color, side) =>
    canvas.print({
        value,
        format,
        decimalPlaces,
        anchor: getAnchor(panel.getPos(time).translate(side === 'left' ? -1.5 : 1.5, 0)),
        pivot: { x: side === 'left' ? 1 : 0, y: 0.5 },
        size: { x: screen.h / 10, y: screen.h / 20 },
        rotation: 0,
        color,
        alpha: 1,
        horizontalAlign: side === 'left' ? HorizontalAlign.Right : HorizontalAlign.Left,
        background: false,
    })

const getAnchor = (pos) => {
    const anchor = pos.transform(skin.transform)
    anchor.y = Math.clamp(anchor.y, screen.b + screen.h / 40, screen.t - screen.h / 40)

    return anchor
}
