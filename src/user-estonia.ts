import { BaseBalticUser } from './base-baltic-user'

export class UserEstonia extends BaseBalticUser {
  mobileIDAuthorization: undefined | boolean

  constructor(
    name: string,
    surname: string,
    age: number,
    personalCode: number,
    phone: string,
    address: string,
  ) {
    super(name, surname, age, personalCode, phone, address)
    this.mobileIDAuthorization = undefined
  }

  activateMobileID() {
    this.mobileIDAuthorization = true // Activate Mobile ID
  }

  isMobileIDAuthorized() {
    return this.mobileIDAuthorization // Check if Mobile ID is authorized
  }
}
