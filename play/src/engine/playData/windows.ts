export const windows = {
    perfect: Range.one.mul(0.05),
    great: Range.one.mul(0.1),
    good: Range.one.mul(0.2),
}

const toMs = ({ min, max }: Range) => new Range(Math.round(min * 1000), Math.round(max * 1000))

export const bucketWindows = {
    perfect: toMs(windows.perfect),
    great: toMs(windows.great),
    good: toMs(windows.good),
}
