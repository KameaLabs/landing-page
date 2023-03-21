import Layout from "@/sections/Layout";
import Payment from "@/sections/Payment";
import PresentationForm from "@/sections/PresentationForm";
import SAFTSigning from "@/sections/SAFTSigning";
import SynapsKYC from "@/sections/SynapsKYC";
import WalletLinking from "@/sections/WalletLinking";

export default function SectionContainer({ activeStep, setActiveStep }: any) {
  return (
    <Layout>
      {activeStep === 0 && <PresentationForm setActiveStep={setActiveStep} />}
      {activeStep === 1 && <SynapsKYC />}
      {activeStep === 2 && <WalletLinking setActiveStep={setActiveStep} />}
      {activeStep === 3 && <SAFTSigning setActiveStep={setActiveStep} />}
      {activeStep === 4 && <Payment />}
    </Layout>
  );
}
