import { UserEstonia } from './user-estonia'
import { UserLatvia } from './user-latvia'

export class KycVerification {
  // Estonia specific KYC
  activateMobileIDForEstonia(user: UserEstonia) {
    if (user.age < 16) {
      throw new Error('User is too young')
    } else {
      user.mobileIDAuthorization = true
    }
  }
  // Latvia specific KYC
  activateEParakstsForLatvia(user: UserLatvia) {
    if (user.age < 18) {
      throw new Error('User is too young')
    } else {
      user.activateEParakstsForLatvia = true
    }
  }
}
