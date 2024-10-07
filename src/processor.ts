import {User} from "./user";

export class Processor {

    giveConsent(userInput: User): void {  // it receive instance of User class. Return nothing -> void
        userInput.consentGiven = true  // no return is used, because it's action no return value
    }
    checkConsent(userInput: User): boolean {
        return userInput.consentGiven === true

    }
    revokeConsent(userInput: User): void {
        userInput.consentGiven = false;
    }

    checkAge(userInput: User): boolean {
        return userInput.age > 18;
    }
}