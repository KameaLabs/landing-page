import { progressSteps } from "@/pages";
import Image from "next/image";

export default function ProgressBar({ activeStep, setActiveStep }: any) {
  return (
    <div className="max-w-fit py-4 mx-auto">
      <div className="flex gap-8 overflow-auto scrollbar-hide select-none px-2">
        {progressSteps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 relative text-center cursor-pointer w-20"
            onClick={() => setActiveStep(i)}
          >
            <div
              className={`flex justify-center items-center rounded-full w-[3.4rem] h-[3.4rem] min-w-[3.4rem] min-h-[3.4rem] text-2xl border border-white text-white ${
                activeStep === i
                  ? " bg-secondary"
                  : i > activeStep
                  ? " bg-gray-300"
                  : "bg-primary"
              }`}
            >
              {i + 1}
            </div>
            <Image
              className="absolute top-[1.6rem]"
              src="/svg/arrow.svg"
              alt=""
              width={69}
              height={69}
            />
            <div
              className={`leading-tight ${
                activeStep === i
                  ? "text-secondary"
                  : i > activeStep
                  ? " text-gray-300"
                  : "text-primary"
              }`}
            >
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
