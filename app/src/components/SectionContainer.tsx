import PresentationForm from "@/sections/PresentationForm";

export default function SectionContainer({ activeStep }: any) {
  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="p-6 pb-12">
        Logion is building the safe digital ownership infrastructure for a Web3
        era. You may contribute to this project by pre-buy future logion's token
        (LGNT). As it's an early stage project, this opportunity is restricted
        to investors who understand all related risks - you can lose the entire
        invested amount - of such investment.
      </div>
      {activeStep === 0 && <PresentationForm />}
      {activeStep === 1 && "Synaps KYC"}

      <div>
        Logion is building the safe digital ownership infrastructure for a Web3
        era. You may contribute to this project by pre-buy future logion's token
        (LGNT). As it's an early stage project, this opportunity is restricted
        to investors who understand all related risks - you can lose the entire
        invested amount - of such investment.
      </div>
    </div>
  );
}
