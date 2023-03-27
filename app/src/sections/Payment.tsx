import Box from "@/components/Box";
import Button from "@/components/Button";
import { ErrorMsg } from "@/components/ErrorMsg";
import { payment } from "@/utils/connectors";
import { useState } from "react";
import { MdPayment } from "react-icons/md";

export default function Payment({ user }: any) {
  const [isPayed, setIsPayed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <div className="max-w-[30rem] mx-auto text-center leading-8">
      <Box reverse={true}>
        <div>
          You’re about to pay {user.amount} $ Paid in : $TICKER From The Wallet
          :
        </div>
        <div>
          0x58z6f4z86fz474fz656fz4f45 Token will be sent to this adress :
        </div>
        <div>
          0x58z6f4z86fz474fz656fz4f45Average amount of token bought : XXXXXXXXX
        </div>
        <div>$CRUNH</div>
      </Box>
      {error.includes("insufficient funds") && (
        <ErrorMsg
          msg={
            "Insufficient funds: Please make sure your wallet contains the selected amount"
          }
        />
      )}
      <Button
        text={"Pay"}
        onClick={() =>
          payment({
            setError,
            setIsPayed,
            addr: process.env.ACCOUNT,
            ether: user.amount,
          })
        }
        reverse={true}
        icon={<MdPayment />}
      />
    </div>
  );
}
