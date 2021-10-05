import { Code, compile, Multiply, visualize } from 'sonolus.js'

console.log(Multiply(Math.PI, 5, 5))

const environment = { nodes: [] }
compile(Multiply(Math.PI, 5, 5), environment)
console.log(environment.nodes)

function calculateCircleArea(radius: Code<number>) {
    return Multiply(Math.PI, radius, radius)
}

console.log(visualize(calculateCircleArea(5)))
