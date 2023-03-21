import Button from "@/components/Button";
import { MdPayment } from "react-icons/md";

export default function SynapsKYC({ setActiveStep }: any) {
  return (
    <div className="max-w-[40rem] mx-auto">
      <div className="h-80 p-4 bg-slate-200 w-full">Synaps KYC</div>
      <div className="pt-4">
        <Button
          text={"Continue to payment"}
          onClick={() => setActiveStep((i: number) => i + 1)}
          icon={<MdPayment />}
          reverse={true}
        />
      </div>
    </div>
  );
}
