export default function LabeledInput({ label, type }: any) {
  return (
    <div className="flex items-center whitespace-nowrap gap-2">
      <div>{label}:</div>
      <input
        type={type}
        className="px-3  text-primary w-full border-b border-primary outline-none"
      />
    </div>
  );
}
