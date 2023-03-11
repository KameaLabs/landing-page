import { progressSteps } from "@/pages";
import Layout from "@/sections/Layout";
import Payment from "@/sections/Payment";
import PresentationForm from "@/sections/PresentationForm";
import SAFTSigning from "@/sections/SAFTSigning";
import SynapsKYC from "@/sections/SynapsKYC";
import WalletLinking from "@/sections/WalletLinking";

export default function SectionContainer({ activeStep, setActiveStep }: any) {
  return (
    <Layout>
      <h1 className="text-4xl p-2 pb-6 text-center">
        {progressSteps[activeStep]}
      </h1>
      {activeStep === 0 && <PresentationForm setActiveStep={setActiveStep} />}
      {activeStep === 1 && <SynapsKYC />}
      {activeStep === 2 && <SAFTSigning />}
      {activeStep === 3 && <WalletLinking />}
      {activeStep === 4 && <Payment />}
    </Layout>
  );
}
