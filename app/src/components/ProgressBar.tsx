import { progressSteps } from "@/pages";

export default function ProgressBar({ activeStep, setActiveStep }: any) {
  return (
    <div className="flex flex-row gap-8 pl-8 py-4 min-w-[12rem] sm:flex-col overflow-auto scrollbar-hide select-none">
      {progressSteps.map((step, i) => (
        <div
          key={i}
          className="flex gap-4 items-center cursor-pointer"
          onClick={() => setActiveStep(i)}
        >
          <div
            className={`flex justify-center items-center rounded-full w-[3.4rem] h-[3.4rem] min-w-[3.4rem] min-h-[3.4rem] text-2xl border border-white ${
              activeStep === i ? "text-black bg-white" : "text-white bg-black"
            }`}
          >
            {i + 1}
          </div>
          <div>{step}</div>
        </div>
      ))}
    </div>
  );
}
