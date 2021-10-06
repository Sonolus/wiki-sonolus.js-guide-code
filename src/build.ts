import { writeFileSync } from 'fs'
import { buildOutput } from '.'

writeFileSync('EngineConfiguration', buildOutput.engine.configuration.buffer)
writeFileSync('EngineData', buildOutput.engine.data.buffer)
writeFileSync('LevelData', buildOutput.level.data.buffer)
