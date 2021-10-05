import { GreaterOr, Subtract, Time, visualize } from 'sonolus.js'

console.log(visualize(Subtract(5, 2)))

console.log(visualize(GreaterOr(Time, 5)))

console.log(visualize([Subtract(5, 2), GreaterOr(Time, 5)]))
