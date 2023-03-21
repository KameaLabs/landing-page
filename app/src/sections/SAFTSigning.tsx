import Button from "@/components/Button";
import { MdPayment } from "react-icons/md";
import SignaturePad from "react-signature-canvas";

export default function SAFTSigning({ setActiveStep }: any) {
  return (
    <div className="max-w-[30rem] mx-auto">
      <div>Contract:</div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        voluptates eveniet illo culpa? Aliquid aspernatur beatae consequuntur
        animi molestias quibusdam. Ea debitis cum dolorem harum, sed enim minima
        architecto provident?
      </div>
      <div className="pt-6">Signature:</div>
      <div className="border border-primary">
        <SignaturePad
          penColor="black"
          canvasProps={{ width: 300, height: 100, className: "sigCanvas" }}
        />
      </div>
      <div className="p-4 ">
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
