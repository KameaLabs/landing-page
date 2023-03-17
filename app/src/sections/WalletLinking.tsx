import Button from "@/components/Button";
import { connectWallet } from "@/utils/connectors";
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import { TbSignature } from "react-icons/tb";
import { MdPayment } from "react-icons/md";

export default function WalletLinking({ setActiveStep }: any) {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const disconnect = async () => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };
  const sign = async () => {};
  return (
    <div className="max-w-[26rem] p-4 flex flex-col gap-4 mx-auto">
      {active && (
        <div className="text-center flex flex-col gap-4 p-4">
          <div>Your are connected with this adress :</div>
          <div> {account}</div>
          <div>Now you need to sign a message from your wallet</div>
          <Button text={"Disconnect"} onClick={disconnect} />
        </div>
      )}
      {active ? (
        <>
          <Button text={"Sign message"} onClick={sign} icon={<TbSignature />} />
          <Button
            text={"Continue to payment"}
            onClick={() => setActiveStep((i: number) => i + 1)}
            icon={<MdPayment />}
          />
        </>
      ) : (
        walletBtnList.map((wallet, i) => (
          <Button
            key={i}
            text={wallet.text}
            onClick={() =>
              connectWallet({
                activate,
                url: wallet.url,
                walletName: wallet.name,
              })
            }
            icon={wallet.icon}
          />
        ))
      )}
    </div>
  );
}

const walletBtnList = [
  {
    name: "Metamask",
    icon: <Image src={"/svg/metamask.svg"} height={25} width={25} alt={""} />,
    text: "Connect Metamask",
    url: "https://metamask.io/download/",
  },
  {
    name: "Talisman",
    icon: <Image src={"/png/talisman.png"} height={25} width={25} alt={""} />,
    text: "Connect Talisman",
    url: "https://www.talisman.xyz/download/",
  },
  {
    walletName: "Nova",
    icon: <Image src={"/png/novawallet.png"} height={25} width={25} alt={""} />,
    text: "Connect Nova Wallet",
    url: "",
  },
];
