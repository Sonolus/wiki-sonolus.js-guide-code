import { copyFileSync } from 'node:fs'

/** @type {import('sonolus.js').SonolusCLIConfig} */
export default {
    type: 'watch',

    devServer(sonolus) {
        copyFileSync('./shared/src/level/cover.jpg', './.dev/cover.jpg')
        copyFileSync('./shared/src/level/bgm.mp3', './.dev/bgm.mp3')

        const level = sonolus.db.levels[0]
        level.title = { en: 'Patience' }
        level.artists = { en: 'More Plastic & VinDon' }
        level.author = { en: 'ntsu' }
        level.description = {
            en: 'Song: More Plastic & VinDon - Patience\nMusic provided by NoCopyrightSounds\nFree Download/Stream: http://NCS.io/Patience\nWatch: http://youtu.be/',
        }
        level.cover = {
            type: 'LevelCover',
            hash: '1f61011aed62393798d6d9f95b8547115688c6fa',
            url: '/cover.jpg',
        }
        level.bgm = {
            type: 'LevelBgm',
            hash: 'dbe1aa934c6922875a4571208e1a4410996a9911',
            url: '/bgm.mp3',
        }
    },
}
