import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const connectWallet = async ({ activate, url, walletName }: any) => {
  const isWalletInstalled = () => {
    switch (walletName) {
      case "Metamask":
        // @ts-ignore
        return Boolean(window.ethereum && window.ethereum.isMetaMask);
      case "Talisman":
        // @ts-ignore
        return Boolean(window.Talisman);
    }
  };
  if (!isWalletInstalled()) return window.open(url, "_blank");
  try {
    await activate(injected);
  } catch (ex) {
    console.log(ex);
  }
};
