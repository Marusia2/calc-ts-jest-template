import {User} from "../src/user";
import {Processor} from "../src/processor";
describe('Test for consent', () => {
    let user: User
    let processor: Processor

    beforeEach(() => {
        user = new User("Jack", "Donald", "+3723343535", "Tallinn", 20)
        processor = new Processor()
    })

    test('Initially have undefined consent', () => {
        expect(user.consentGiven).toBeUndefined()
    })

    test('Processor can give consent to user', () => {
        processor.giveConsent(user)
        expect(user.consentGiven).toBe(true)
    })

    test('Verify fail consent when it is not given', () => {
        expect(processor.checkConsent(user)).toBe(false)
    })

    // # 6.1 A user younger than 18 cannot give consent (the method returns false).
    test('Verify if a user is younger than 18', () => {
        user.age = 17;
        expect(processor.checkAge(user)).toBe(false)

    })
    // # 6.2 A user older than 18 can successfully give consent (the method returns true)
    test('Verify if a user is older than 18', () => {
        user.age = 19;
        expect(processor.checkAge(user)).toBe(true)
    })
    test('Revoke consent', () => {
        processor.giveConsent(user);
        processor.revokeConsent(user);
        expect(user.consentGiven).toBe(false);
    })
})

