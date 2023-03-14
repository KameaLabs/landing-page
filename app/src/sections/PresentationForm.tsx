import Button from "@/components/Button";
import LabeledInput from "@/components/LabeledInput";
import RadioBtn from "@/components/RadioBtn";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { BsBank } from "react-icons/bs";

export default function PresentationForm({ setActiveStep }: any) {
  return (
    <div className="max-w-[40rem] mx-auto">
      <div className="flex flex-col gap-4 p-2">
        <LabeledInput label={"Name"} icon={<FaUser />} />
        <LabeledInput label={"Mail"} icon={<MdEmail />} />
        <LabeledInput label={"Amount to invest"} icon={<GiCash />} />
        <div className="flex pb-4">
          <div className="flex items-center whitespace-nowrap gap-2">
            <div className="flex gap-2">
              <span className="text-primary border-2 border-primary rounded-md p-1">
                {<BsBank />}
              </span>
              Payment Method:
            </div>
            <RadioBtn name={"PaymentMethod"} value={"Eth"} />
            <RadioBtn name={"PaymentMethod"} value={"USDC (erc-20)"} />
            <RadioBtn name={"PaymentMethod"} value={"DOT"} />
            <RadioBtn name={"PaymentMethod"} value={"Bank Transfer"} />
          </div>
        </div>

        <div className="mx-auto w-fit">
          <Button
            text={"Continue to KYC"}
            onClick={() => setActiveStep((i: number) => i + 1)}
            reverse={true}
          />
        </div>
      </div>
    </div>
  );
}
