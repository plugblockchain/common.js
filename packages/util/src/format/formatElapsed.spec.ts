// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import formatElapsed from './formatElapsed';

describe('formatElapsed', (): void => {
  const start = 12345678;
  const now = new Date(12345678);

  it('formats a Date', (): void => {
    expect(
      formatElapsed(now, new Date(start + 9700))
    ).toEqual('9.7s');
  });

  it('formats a BN', (): void => {
    expect(
      formatElapsed(now, new BN(start + 42700))
    ).toEqual('42s');
  });

  it('formats a Compact', (): void => {
    expect(
      formatElapsed(now, {
        toBn: (): BN => new BN(start + (5.3 * 60000))
      })
    ).toEqual('5m');
  });

  it('formats a number', (): void => {
    expect(
      formatElapsed(now, start + (42 * 60 * 60000))
    ).toEqual('42h');
  });

  it('formats defaults', (): void => {
    expect(
      formatElapsed()
    ).toEqual('0.0s');
  });
});
