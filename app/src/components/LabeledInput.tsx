export default function LabeledInput({ label, type }: any) {
  return (
    <div>
      {/* <div>{label}</div> */}
      <input
        type={type}
        placeholder={label}
        className="px-3 py-2 text-black w-full  rounded-md"
      />
    </div>
  );
}
