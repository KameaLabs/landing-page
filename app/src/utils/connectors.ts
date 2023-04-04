import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 137, 11155111],
});

export const connectWallet = async ({ activate, url, walletName }: any) => {
  const isWalletInstalled = () => {
    switch (walletName) {
      case "Metamask":
        // @ts-ignore
        return Boolean(!!window.ethereum && window.ethereum.isMetaMask);
      case "Talisman":
        // @ts-ignore
        return Boolean(!!window.Talisman);
      default:
        return false;
    }
  };
  if (!isWalletInstalled()) window.open(url, "_blank");
  else {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
};

export const payment = async ({ setError, setIsSigned, ether }: any) => {
  try {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tx = await signer.sendTransaction({
      to: process.env.ACCOUNT,
      // @ts-ignore
      value: ethers.utils.parseEther(ether),
    });
    console.log({ tx, ether, addr: process.env.ACCOUNT });
    setIsSigned(true);
  } catch (err: any) {
    setError(err.message);
  }
};
