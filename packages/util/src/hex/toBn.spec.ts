// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { hexToBn } from '.';

describe('hexToBn', (): void => {
  it('converts prefixed hex values to BN', (): void => {
    expect(
      hexToBn(0x81).toString(16)
    ).toBe('81');
  });

  it('converts null values to BN(0)', (): void => {
    expect(
      hexToBn(null).toNumber()
    ).toBe(0);
  });

  it('converts 0x values to BN(0)', (): void => {
    expect(
      hexToBn('0x').toNumber()
    ).toBe(0);
  });

  it('should convert with Big Endian by default', (): void => {
    expect(
      hexToBn('0x0100').toNumber()
    ).toBe(256);
  });

  it('converts 0x values to BN(0) (LE)', (): void => {
    expect(
      hexToBn('0x', { isLe: true }).toNumber()
    ).toBe(0);
  });

  it('converts little-endian', (): void => {
    expect(
      hexToBn('0x4500000000000000', { isLe: true }).toNumber()
    ).toBe(69);
  });

  it('handles negative numbers (LE)', (): void => {
    expect(
      hexToBn('0x2efb', { isLe: true, isNegative: true }).toNumber()
    ).toBe(-1234);
  });

  it('handles negative numbers (BE)', (): void => {
    expect(
      hexToBn('0xfb2e', { isLe: false, isNegative: true }).toNumber()
    ).toBe(-1234);
  });

  it('handles starting zeros correctly (BE)', (): void => {
    expect(
      hexToBn('0x0000000000000100', { isLe: false }).toNumber()
    ).toBe(256);
  });

  it('handles starting zeros correctly (LE)', (): void => {
    expect(
      hexToBn('0x0001000000000000', { isLe: true }).toNumber()
    ).toBe(256);
  });

  it('handles backwards compatibility', (): void => {
    expect(
      hexToBn('0x0001000000000000', false).eq(
        hexToBn('0x0001000000000000', { isLe: false })
      )
    ).toBe(true);
    expect(
      hexToBn('0x0001000000000000', true).eq(
        hexToBn('0x0001000000000000', { isLe: true })
      )
    ).toBe(true);
  });
});
