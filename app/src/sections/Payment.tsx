import Box from "@/components/Box";
import Button from "@/components/Button";
import { ErrorMsg } from "@/components/ErrorMsg";
import { convertUsdToEth, payment } from "@/utils/connectors";
import { stringShorten } from "@/utils/stringShorten";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

export default function Payment({ user }: any) {
  const [isPayed, setIsPayed] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [eth, setEth] = useState<number>(0);

  useEffect(() => {
    convertUsdToEth(user.amount).then((res) => setEth(res));
  }, []);

  return (
    <div className="max-w-[30rem] mx-auto text-center leading-8">
      {!isPayed ? (
        <>
          <Box>
            <div>You’re about to pay {user.amount} $ Paid in eth</div>
            <div>
              From the wallet :{" "}
              {stringShorten("0xfb9F41FeeA28CAa89362d897C5a90Af6e9e96BeE")}
            </div>
            <div>
              Amount : {eth} {user.paymentMethod}
            </div>
            <div>
              To the wallet :{" "}
              {stringShorten("0xfb9F41FeeA28CAa89362d897C5a90Af6e9e96BeE")}
            </div>
            {/* <div>Average amount of token bought : XXXXXXXXX</div>
            <div>$CRUNH</div> */}
          </Box>
          {error && <ErrorMsg msg={error} />}
          <Button
            text={"Pay"}
            onClick={() =>
              payment({
                setError,
                setIsPayed,
                addr: process.env.ACCOUNT,
                ether: eth.toString(),
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
