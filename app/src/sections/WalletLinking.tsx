import Button from "@/components/Button";

export default function WalletLinking() {
  return (
    <div className="max-w-[20rem] p-4 flex flex-col gap-4 mx-auto">
      <Button text={"Connect Metamask"} />
      <Button text={"Connect Talisman"} />
      <Button text={"Connect Nova Wallet"} />
    </div>
  );
}
