import User from './User.js'

describe('User', () => {
    test('name returns full name',() => {
        const user = new User({firstname:'Andres',lastname:'Montes'})
        expect(user.name).toBe('Andres Montes')
    })
})
