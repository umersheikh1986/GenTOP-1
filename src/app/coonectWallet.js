import React, { createContext, useState } from "react";

// Create the context
export const WalletContext = createContext();

// Create a provider component
export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [signer, setSigner] = useState(
    "{_isSigner: true, provider: Web3Provider, _index: 0, _address: null}provider: Web3Provider {_isProvider: true, _events:  Array(0), _emitted: {…}, disableCcipRead: false, formatter: Formatter, …}anyNetwork: falseconnection: {url: 'metamask'}disableCcipRead: falseformatter: Formatter {formats: {…}}jsonRpcFetchFunc: ƒ (method, params)provider: Proxy(d) {_events: {…}, _eventsCount: 0, _maxListeners: 100, _log: f, _state: {…}, …}_emitted: {block: -2}_eventLoopCache: {detectNetwork: null}_events: []_fastQueryDate: 0_isProvider: true_lastBlockNumber: -2_maxFilterBlockRange: 10_maxInternalBlockNumber: -1024_network: {name: 'bnb', chainId: 56, ensAddress: null, _defaultProvider: null}_networkPromise: Promise {<fulfilled>: {…}}_nextId: 42_pollingInterval: 4000blockNumber: (...)network: (...)polling: (...)pollingInterval: (...)ready: (...)_cache: (...)[[Prototype]]: JsonRpcProvider_address: null_index: 0_isSigner: true[[Prototype]]: Signer"
  );

  return (
    <WalletContext.Provider
      value={{ walletAddress, setWalletAddress, signer, setSigner }}
    >
      {children}
    </WalletContext.Provider>
  );
};
