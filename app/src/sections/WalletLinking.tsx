import Button from "@/components/Button";
import { connectWallet, payment } from "@/utils/connectors";
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import { TbSignature } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { useState } from "react";
import Box from "@/components/Box";
import { stringShorten } from "@/utils/stringShorten";
import { ErrorMsg } from "@/components/ErrorMsg";

export default function WalletLinking({ setActiveStep }: any) {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [error, setError] = useState<string>("");
  const [isSigned, setIsSigned] = useState<boolean>(false);

  const disconnect = async () => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="max-w-[26rem] p-4 flex flex-col gap-4 mx-auto">
      {active && (
        <div className="text-center flex flex-col gap-4 p-4">
          <Box>
            <div>Your are connected with this adress :</div>
            <div>{stringShorten(account)}</div>
            <div>Now you need to sign a message from your wallet</div>
          </Box>
          {/* <Button text={"Disconnect"} onClick={disconnect} /> */}
          {error.includes("insufficient funds") && (
            <ErrorMsg
              msg={
                "Insufficient funds: Please make sure your wallet contains the selected amount"
              }
            />
          )}
        </div>
      )}
      {active ? (
        <>
          {!isSigned ? (
            <Button
              text={"Sign message"}
              onClick={() =>
                payment({
                  setError,
                  setIsSigned,
                  addr: "0xfb9F41FeeA28CAa89362d897C5a90Af6e9e96BeE",
                  ether: "0.00003",
                })
              }
              reverse={true}
              icon={<TbSignature />}
            />
          ) : (
            <Button
              text={"Continue to payment"}
              onClick={() => setActiveStep((i: number) => i + 1)}
              icon={<MdPayment />}
              reverse={true}
            />
          )}
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
