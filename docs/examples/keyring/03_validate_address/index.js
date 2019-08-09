/* eslint-disable @typescript-eslint/no-var-requires */
const { encodeAddress, decodeAddress } = require('@plugnet/keyring');
const { isHex, hexToU8a } = require('@plugnet/util');

const address = '5GrpknVvGGrGH3EFuURXeMrWHvbpj3VfER1oX5jFtuGbfzCE';

const isValidAddressPolkadotAddress = () => {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));
    return true;
  } catch (error) {
    return false;
  }
};

const isValid = isValidAddressPolkadotAddress();

console.log(isValid);
