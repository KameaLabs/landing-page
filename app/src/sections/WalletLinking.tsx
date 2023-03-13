import Button from "@/components/Button";
import { injected } from "@/utils/connectors";
import { useWeb3React } from "@web3-react/core";

export default function WalletLinking({ setActiveStep }: any) {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

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
          <Button text={"Sign message"} onClick={sign} />
          <Button
            text={"Continue to payment"}
            onClick={() => setActiveStep((i: number) => i + 1)}
          />
        </>
      ) : (
        <>
          <Button text={"Connect Metamask"} onClick={connect} />
          <Button text={"Connect Talisman"} />
          <Button text={"Connect Nova Wallet"} />
        </>
      )}
    </div>
  );
}
