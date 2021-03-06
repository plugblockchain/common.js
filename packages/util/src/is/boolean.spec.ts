// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isBoolean } from '.';

describe('isBoolean', (): void => {
  it('returns true on false', (): void => {
    expect(
      isBoolean(false)
    ).toEqual(true);
  });

  it('returns true on true', (): void => {
    expect(
      isBoolean(true)
    ).toEqual(true);
  });

  it('returns false on invalid booleans', (): void => {
    expect(
      isBoolean('notABool')
    ).toEqual(false);
  });
});
