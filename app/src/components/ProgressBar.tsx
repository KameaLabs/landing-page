import { progressSteps } from "@/pages";

export default function ProgressBar({ activeStep, setActiveStep }: any) {
  return (
    <div className="flex items-center justify-center gap-8 py-4 overflow-auto scrollbar-hide select-none">
      {progressSteps.map((step, i) => (
        <div
          key={i}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setActiveStep(i)}
        >
          <div
            className={`flex justify-center items-center rounded-full w-[3.4rem] h-[3.4rem] min-w-[3.4rem] min-h-[3.4rem] text-2xl border border-white ${
              activeStep === i
                ? "text-white bg-secoundary"
                : "text-white bg-gray-300"
            }`}
          >
            {i + 1}
          </div>
          <div
            className={`${
              activeStep === i ? "text-secoundary" : "text-gray-300"
            }`}
          >
            {step}
          </div>
        </div>
      ))}
    </div>
  );
}
