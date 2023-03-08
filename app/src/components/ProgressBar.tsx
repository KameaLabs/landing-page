export default function ProgressBar({ activeStep, setActiveStep }: any) {
  return (
    <div className="flex flex-col gap-2 pl-4 pt-32 select-none min-w-[14rem]">
      {progressSteps.map((step, i) => (
        <div
          key={i}
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => setActiveStep(i)}
        >
          <div
            className={`flex justify-center items-center rounded-full w-16 h-16 min-w-[4rem] min-h-[4rem]  text-2xl border border-white ${
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

const progressSteps = [
  "Presentation from",
  "Synaps KYC",
  "SAFT Signing",
  "Wallet linking",
  "Payment",
];
