import ifEmoji from '../src/index.js'

describe('Check the emoji', () => {
  it('Text is not Emoji', () => {
    expect(false).toEqual(ifEmoji('蛤'))
    expect(false).toEqual(ifEmoji('+1s'))
    expect(false).toEqual(ifEmoji('𠮷'))
  })

  it('Texts is emoji', () => {
    expect(true).toEqual(ifEmoji('🐸'))
    expect(true).toEqual(ifEmoji('🇨🇳'))
    expect(true).toEqual(ifEmoji('😀'))
  })
})