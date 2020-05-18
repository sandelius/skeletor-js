import say from '../../lib/index'

describe('index', () => {
  it('that it returns the message', () => {
    expect(say('Hello World')).toEqual('Hello World')
  })

  it('that it returns the message again', () => {
    expect(say('World Hello')).toEqual('World Hello')
  })
})
