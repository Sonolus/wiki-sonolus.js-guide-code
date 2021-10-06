import { serve } from 'sonolus.js'
import { buildOutput } from '.'

const sonolus = serve(buildOutput)

const level = sonolus.db.levels[0]
level.cover = {
    type: 'LevelCover',
    hash: '',
    url: 'https://sonolus.com/assets/jacket066.png',
}
level.bgm = {
    type: 'LevelBgm',
    hash: '',
    url: 'https://sonolus.com/assets/bgm066.mp3',
}
