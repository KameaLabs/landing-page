import Button from "@/components/Button";
import LabeledInput from "@/components/LabeledInput";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { useEffect, useState } from "react";
import validation from "@/utils/validation";
import ErrorMsgs from "@/components/ErrorMsg";
import RadioGroup from "@/components/RadioGroup";

export default function PresentationForm({
  setActiveStep,
  setUser,
  user,
}: any) {
  const [msgs, setMsgs] = useState({});
  const [radioList, setRadioList] = useState(defaultRadioList);

  useEffect(() => {
    setRadioList((prevRadioList) =>
      prevRadioList?.map((item) =>
        item?.exchange === user?.exchange
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
    setUser((user: any) =>
      Object({ ...user, paymentMethod: exchangeToValues[user?.exchange] })
    );
  }, [user.exchange]);

  const handleClick = () => {
    const valid = validation(user);
    if (valid !== true) return setMsgs(valid);
    localStorage.setItem("userInput", JSON.stringify(user));
    setActiveStep((i: number) => i + 1);
  };
  const setValue = ({ itemKey, value }: any) => {
    setUser((user: any) => Object({ ...user, [`${itemKey}`]: value }));
  };

  return (
    <div className="max-w-[40rem] mx-auto">
      <div className="flex flex-col gap-4 p-2">
        <LabeledInput
          label={"Name "}
          itemKey={"name"}
          icon={<FaUser />}
          value={user.name}
          setValue={setValue}
        />
        <LabeledInput
          label={"Mail "}
          itemKey={"mail"}
          icon={<MdEmail />}
          value={user.mail}
          setValue={setValue}
        />
        <LabeledInput
          label={"Amount to invest in USD "}
          itemKey={"amount"}
          icon={<GiCash />}
          value={user.amount}
          setValue={setValue}
          type={"number"}
        />
        <RadioGroup
          title={"Payment Method :"}
          itemKey={"exchange"}
          icon={<BsBank />}
          setValue={setValue}
          radioList={radioList}
        />
        <ErrorMsgs msgs={msgs} />
        <Button
          text={"Verify your Identity"}
          onClick={handleClick}
          reverse={true}
        />
      </div>
    </div>
  );
}

const exchangeToValues: any = {
  ethereum: "Eth",
  "usd-coin": "USDC (erc-20)",
  polkadot: "DOT",
};
const defaultRadioList = [
  {
    groupName: "paymentMethod",
    value: "Eth",
    exchange: "ethereum",
    active: true,
  },
  {
    groupName: "paymentMethod",
    value: "USDC (erc-20)",
    exchange: "usd-coin",
    active: false,
  },
  {
    groupName: "paymentMethod",
    value: "DOT",
    exchange: "polkadot",
    active: false,
  },
  {
    groupName: "paymentMethod",
    value: "Bank Transfer",
    exchange: "",
    active: false,
  },
];
