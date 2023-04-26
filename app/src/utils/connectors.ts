import axios from "axios";
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

export const payment = async ({ setError, setIsPayed, ether }: any) => {
  try {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tx = await signer.sendTransaction({
      to: "0xfb9F41FeeA28CAa89362d897C5a90Af6e9e96BeE",
      // @ts-ignore
      value: ethers.utils.parseEther(ether),
    });
    console.log({ tx, ether, addr: process.env.ACCOUNT });
    setIsPayed(true);
  } catch (error: any) {
    if (error.code === "INSUFFICIENT_FUNDS") {
      setError(
        "Insufficient funds: Please make sure your wallet contains the selected amount"
      );
    } else {
      setError("There are an error please try again in few minutes");
      console.log(error);
    }
  }
};

export const signMessage = async ({ setIsSigned, message, setError }: any) => {
  try {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Sign message
    const signature = await signer.signMessage(message);
    console.log(signature);
    signature && setIsSigned(true);
    return signature;
  } catch (error: any) {
    if (error?.code === "ACTION_REJECTED") {
      setError(
        "The signature should be accepted, and you rejected it please re-sign new message"
      );
    } else {
      setError("There are an error please try again in few minutes");
      console.log(error);
    }
  }
};

export const convertUsdToEth = async (usdAmount: number): Promise<number> => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  );
  const ethPrice = response.data.ethereum.usd;
  return usdAmount / ethPrice;
};

interface CryptoPrice {
  [key: string]: number;
}
export const convertUsdToPaymentMethod = async ({
  exchange,
  usdAmount,
}: {
  exchange: string;
  usdAmount: number;
}): Promise<number> => {
  let apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${exchange}&vs_currencies=usd`;
  try {
    const response = await axios.get(apiUrl);
    const prices: CryptoPrice = response.data;
    const price: any = prices[exchange];
    if (price) {
      return usdAmount / price["usd"];
    } else {
      throw new Error("Invalid payment method or no price data available");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Unable to convert USD to crypto");
  }
};
