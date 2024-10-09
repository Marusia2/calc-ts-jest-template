import { UserEstonia } from './user-estonia'
import { UserLatvia } from './user-latvia'

export class Contract {
  title: string
  signed: boolean

  constructor(title: string) {
    this.title = title
    this.signed = false
  }

  signEstoniaContract(user: UserEstonia) {
    if (user.isMobileIDAuthorized()) {
      this.signed = true
    } else {
      throw new Error('Mobile ID is not activated')
    }
  }

  signLatviaContract(user: UserLatvia) {
    if (user.activateEParakstsForLatvia) {
      this.signed = true
    } else {
      throw new Error('EParaksts is not activated')
    }
  }
}
