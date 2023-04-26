import Box from "@/components/Box";
import Button from "@/components/Button";
import { ErrorMsg } from "@/components/ErrorMsg";
import { convertUsdToPaymentMethod, payment } from "@/utils/connectors";
import { stringShorten } from "@/utils/stringShorten";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

export default function Payment({ user }: any) {
  const [isPayed, setIsPayed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [crypto, setCrypto] = useState<number>(0);

  useEffect(() => {
    user.amount &&
      convertUsdToPaymentMethod({
        exchange: user.exchange,
        usdAmount: user.amount,
      }).then((res) => setCrypto(res));
  }, [user.amount]);

  return (
    <div className="max-w-[30rem] mx-auto leading-8">
      {!isPayed ? (
        <>
          <Box>
            <div className="max-w-fit mx-auto text-left">
              <div>
                <span className="text-secondary">You’re about to pay</span>{" "}
                {user.amount} $ Paid in {user.paymentMethod}
              </div>
              <div>
                <span className="text-secondary">From the wallet : </span>
                {stringShorten("0xfb9F41FeeA28CAa89362d897C5a90Af6e9e96BeE")}
              </div>
              <div>
                <span className="text-secondary">Amount :</span> {crypto}{" "}
                {user.paymentMethod}
              </div>
              <div>
                <span className="text-secondary">To the wallet :</span>{" "}
                {stringShorten("0xfb9F41FeeA28CAa89362d897C5a90Af6e9e96BeE")}
              </div>
            </div>
          </Box>
          {error && <ErrorMsg msg={error} />}
          <Button
            text={"Pay"}
            onClick={() =>
              payment({
                setError,
                setIsPayed,
                addr: process.env.ACCOUNT,
                ether: crypto.toString(),
              })
            }
            reverse={true}
            icon={<MdPayment />}
          />
        </>
      ) : (
        <Box>
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="bg-green-500 text-white w-20 h-20 rounded-full text-4xl flex justify-center items-center">
              <FaCheck />
            </div>
            <div>Payment Succesfully done</div>
          </div>
        </Box>
      )}
    </div>
  );
}
