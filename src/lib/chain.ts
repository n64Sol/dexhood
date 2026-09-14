export const CHAIN = {
  id: 4663,
  hex: "0x1237",
  slug: "robinhood",
  name: "Robinhood Chain",
  symbol: "ETH",
  rpc: "https://rpc.mainnet.chain.robinhood.com",
  explorer: "https://robinhoodchain.blockscout.com",
  dexscreener: "https://dexscreener.com/robinhood",
  weth: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73",
  usdg: "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
} as const;

export function isAddress(value: string) {
  return /^0x[a-fA-F0-9]{40}$/.test(value);
}

export function explorerAddress(address: string) {
  if (isAddress(address)) return `${CHAIN.explorer}/address/${address}`;
  return `${CHAIN.dexscreener}/${address}`;
}

export function explorerTx(hash: string) {
  return `${CHAIN.explorer}/tx/${hash}`;
}

export function stripStockSuffix(name: string) {
  return name.replace(/\s*[•|]\s*Robinhood Token\s*$/i, "").trim();
}
