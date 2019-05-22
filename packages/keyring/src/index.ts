// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assertSingletonPackage } from '@plugnet/util';

import { decodeAddress, encodeAddress, setAddressPrefix } from './address';
import { default as Keyring } from './keyring';

assertSingletonPackage('@plugnet/keyring');

export default Keyring;

export {
  Keyring,
  decodeAddress,
  encodeAddress,
  setAddressPrefix
};
