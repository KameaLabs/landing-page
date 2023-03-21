import Button from "@/components/Button";
import LabeledInput from "@/components/LabeledInput";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { useRef, useState } from "react";
import validation from "@/utils/validation";
import ErrorMsgs from "@/components/ErrorMsg";
import RadioGroup from "@/components/RadioGroup";

export default function PresentationForm({ setActiveStep }: any) {
  const nameRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [msgs, setMsgs] = useState({});

  const handleClick = () => {
    const userInput = {
      name: nameRef.current?.value,
      mail: mailRef.current?.value,
      amount: amountRef.current?.value,
      paymentMethod,
    };
    const valid = validation(userInput);
    if (valid !== true) return setMsgs(valid);
    // if storing the data needed should start from this point
    // localStorage.setItem("userInput", JSON.stringify(userInput));
    setActiveStep((i: number) => i + 1);
  };

  return (
    <div className="max-w-[40rem] mx-auto">
      <div className="flex flex-col gap-4 p-2">
        <LabeledInput label={"Name"} icon={<FaUser />} inputRef={nameRef} />
        <LabeledInput label={"Mail"} icon={<MdEmail />} inputRef={mailRef} />
        <LabeledInput
          label={"Amount to invest"}
          icon={<GiCash />}
          inputRef={amountRef}
          type={"number"}
        />
        <RadioGroup
          title={"Payment Method:"}
          icon={<BsBank />}
          setValue={setPaymentMethod}
          radioList={radioList}
        />
        <ErrorMsgs msgs={msgs} />

        <div className="mx-auto w-fit">
          <Button
            text={"Continue to KYC"}
            onClick={handleClick}
            reverse={true}
          />
        </div>
      </div>
    </div>
  );
}

const radioList = [
  { groupName: "paymentMethod", value: "Eth" },
  { groupName: "paymentMethod", value: "USDC (erc-20)" },
  { groupName: "paymentMethod", value: "DOT" },
  { groupName: "paymentMethod", value: "Bank Transfer" },
];
