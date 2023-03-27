import Layout from "@/sections/Layout";
import Payment from "@/sections/Payment";
import PresentationForm from "@/sections/PresentationForm";
import SAFTSigning from "@/sections/SAFTSigning";
import SynapsKYC from "@/sections/SynapsKYC";
import WalletLinking from "@/sections/WalletLinking";
import { useState } from "react";

export default function SectionContainer({ activeStep, setActiveStep }: any) {
  const [user, setUser] = useState<any>(
    JSON.parse(
      (typeof window !== "undefined" && localStorage.getItem("userInput")) ||
        "{}"
    )
  );

  return (
    <Layout>
      {activeStep === 0 && (
        <PresentationForm
          setActiveStep={setActiveStep}
          setUser={setUser}
          user={user}
        />
      )}
      {activeStep === 1 && <SynapsKYC setActiveStep={setActiveStep} />}
      {activeStep === 2 && (
        <WalletLinking setActiveStep={setActiveStep} user={user} />
      )}
      {activeStep === 3 && <SAFTSigning setActiveStep={setActiveStep} />}
      {activeStep === 4 && <Payment user={user} />}
    </Layout>
  );
}
