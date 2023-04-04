import Button from "@/components/Button";
import { connectWallet } from "@/utils/connectors";
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import { TbSignature } from "react-icons/tb";
import { useState } from "react";
import Box from "@/components/Box";
import { stringShorten } from "@/utils/stringShorten";
import { ErrorMsg } from "@/components/ErrorMsg";

export default function WalletLinking({ setActiveStep }: any) {
  const { active, account, activate } = useWeb3React();

  const [error, setError] = useState<string>("");

  return (
    <div className="max-w-[30rem] p-4 flex flex-col gap-4 mx-auto leading-6">
      {active && (
        <div className="text-center flex flex-col gap-4 p-4">
          <Box>
            <div>Your are connected with this adress :</div>
            <div>{stringShorten(account)}</div>
          </Box>
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
        <Button
          text={"Sign an acceptance"}
          onClick={() => setActiveStep((i: number) => i + 1)}
          reverse={true}
          icon={<TbSignature />}
        />
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
