import {Contract} from '../src/contract';
import {UserEstonia} from '../src/user-estonia';
import {UserLatvia} from '../src/user-latvia';
import {KycVerification} from '../src/kyc-verification';

describe('Contract', () => {
    let estoniaUser: UserEstonia;
    let latviaUser: UserLatvia;
    let kyc: KycVerification;

    beforeEach(() => {
        estoniaUser = new UserEstonia('Peter', 'Parker', 25, 1111111, '+377788999', 'Tallinn str.');
        latviaUser = new UserLatvia('Sarah', 'Coonor', 19, 222222, '+36777888', 'Ryga str.');
        kyc = new KycVerification();
    });

    test('Signing contracts should be prohibited in Estonia unless authorized with Mobile ID', () => {
        const contract = new Contract('Estonia Contract');
        expect(() => contract.signEstoniaContract(estoniaUser)).toThrow('Mobile ID is not activated');
    });

    test('The possibility to sign contracts should be enabled once Mobile ID for Estonia is activated', () => {
        kyc.activateMobileIDForEstonia(estoniaUser);
        const contract = new Contract('Estonia Contract');
        contract.signEstoniaContract(estoniaUser);
        expect(contract.signed).toBe(true);
    });

    test('Signing contracts in Latvia should be prohibited without using eParaksts', () => {
        const contract = new Contract('Latvia Contract');
        expect(() => contract.signLatviaContract(latviaUser)).toThrow('EParaksts is not activated');
    });

    test('Permission should be granted for signing contracts once eParaksts is activated in Latvia', () => {
        kyc.activateEParakstsForLatvia(latviaUser);
        const contract = new Contract('Latvia Contract');
        contract.signLatviaContract(latviaUser);
        expect(contract.signed).toBe(true);
    });
});
