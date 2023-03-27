import Button from "@/components/Button";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdWallet } from "react-icons/md";
import Synaps from "@synaps-io/react-verify";

export default function SynapsKYC({ setActiveStep }: any) {
  const [isVerified, setIsVerified] = useState<boolean>(false);

  return (
    <div className="max-w-[40rem] mx-auto">
      <div className="flex items-center pb-2 gap-2 text-gray-600 text-sm p-2">
        <span>
          <FaInfoCircle />
        </span>
        <span>Only one official document is needed.</span>
      </div>
      <div className="flex justify-center p-2 bg-slate-200 w-full">
        <Synaps
          sessionId={"521a5d09-d4acf38e-8c24ce3e-a4146eb1"}
          service={"individual"}
          lang={"en"}
          onReady={() => console.log("component ready")}
          onFinish={() => console.log("user finish process")}
          color={{
            primary: "212b39",
            secondary: "ffffff",
          }}
          withFinishButton={true}
        />
      </div>

      {isVerified ? (
        <Button
          text={"Connect your wallet"}
          onClick={() => setActiveStep((i: number) => i + 1)}
          icon={<MdWallet />}
          reverse={true}
        />
      ) : (
        <div className="flex items-center gap-2 text-gray-600 text-sm pt-2">
          <span>
            <FaInfoCircle />
          </span>
          <span>You are able to continue when the document verified.</span>
        </div>
      )}
    </div>
  );
}
