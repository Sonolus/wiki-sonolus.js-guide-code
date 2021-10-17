import { bool, DebugLog, Greater, If, visualize } from 'sonolus.js'

console.log(visualize(If(5, DebugLog(true), DebugLog(false))))

console.log(visualize(If(Greater(5, 0), DebugLog(true), DebugLog(false))))

console.log(visualize(If(bool(5), DebugLog(true), DebugLog(false))))
