import Button from "@/components/Button";
import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdWallet } from "react-icons/md";
import Synaps from "@synaps-io/react-verify";
import axios from "axios";

export default function SynapsKYC({ setActiveStep }: any) {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    window &&
      axios
        .post(
          "https://individual-api.synaps.io/v3/session/init",
          {},
          {
            headers: {
              "Client-Id": "S51A06390DE4B114",
              "Api-Key": "JaV2f7VEYeUXbf8lhDTErjv64Y8U3HTt",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => setSessionId(response?.data.session_id));
  }, []);

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
          sessionId={sessionId}
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
