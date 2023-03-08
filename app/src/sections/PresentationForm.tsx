import Button from "@/components/Button";
import LabeledInput from "@/components/LabeledInput";
import RadioBtn from "@/components/RadioBtn";

export default function PresentationForm() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl">Presentation form</h1>
        <div className="flex flex-col gap-4 p-6">
          <LabeledInput label={"Full Name"} />
          <LabeledInput label={"Mail"} />
          <LabeledInput label={"Amount to invest"} />
          <RadioBtn name={"PaymentMethod"} value={"Eth"} />
          <RadioBtn name={"PaymentMethod"} value={"USDC (erc-20)"} />
          <RadioBtn name={"PaymentMethod"} value={"DOT"} />
          <RadioBtn name={"PaymentMethod"} value={"Bank Transfer"} />
          <Button text={"Continue to KYC"} />
        </div>
      </div>
    </>
  );
}
