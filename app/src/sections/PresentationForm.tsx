import Button from "@/components/Button";
import LabeledInput from "@/components/LabeledInput";
import RadioBtn from "@/components/RadioBtn";

export default function PresentationForm({ setActiveStep }: any) {
  return (
    <div className="max-w-[22rem] mx-auto ">
      <div className="flex flex-col gap-4 p-2">
        <LabeledInput label={"Full Name"} />
        <LabeledInput label={"Mail"} />
        <LabeledInput label={"Amount to invest"} />
        <div className="flex flex-wrap pb-4">
          <RadioBtn name={"PaymentMethod"} value={"Eth"} />
          <RadioBtn name={"PaymentMethod"} value={"USDC (erc-20)"} />
          <RadioBtn name={"PaymentMethod"} value={"DOT"} />
          <RadioBtn name={"PaymentMethod"} value={"Bank Transfer"} />
        </div>
        <Button
          text={"Continue to KYC"}
          onClick={() => setActiveStep((i: number) => i + 1)}
        />
      </div>
    </div>
  );
}
