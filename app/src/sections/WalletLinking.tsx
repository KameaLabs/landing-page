import Button from "@/components/Button";
import { connectWallet, signMessage } from "@/utils/connectors";
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import { TbSignature } from "react-icons/tb";
import { useState, useEffect } from "react";
import Box from "@/components/Box";
import { stringShorten } from "@/utils/stringShorten";
import { ErrorMsg } from "@/components/ErrorMsg";

export default function WalletLinking({ setActiveStep }: any) {
  const { active, account, activate } = useWeb3React();
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSigned, setIsSigned] = useState<boolean>(false);

  useEffect(() => {
    isSigned && setActiveStep((i: any) => i + 1);
  }, [isSigned]);

  return (
    <div className="max-w-[30rem] p-4 flex flex-col gap-4 mx-auto leading-6">
      {active && (
        <div className="text-center flex flex-col gap-4 p-4">
          <Box>
            <div>Your are connected with this adress :</div>
            <div>{stringShorten(account)}</div>
            <div>Add a message bellow to sign it in your wallet</div>
          </Box>
          {error && <ErrorMsg msg={error} />}
        </div>
      )}
      {active ? (
        <>
          <input
            type="text"
            value={message}
            placeholder="Message"
            onChange={(e: any) => setMessage(e.target.value)}
            className="border border-primary py-1 px-2 rounded-sm"
          />
          <Button
            text={"Sign an acceptance"}
            onClick={() => signMessage({ setIsSigned, message, setError })}
            reverse={true}
            icon={<TbSignature />}
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
