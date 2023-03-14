export default function Button({ text, onClick, reverse, icon }: any) {
  return (
    <button
      className={`flex items-center justify-center gap-3 font-[600]
      ${
        reverse
          ? "bg-secoundary text-white  border-secoundary"
          : "bg-white text-secoundary border-primary"
      } border  rounded-md p-2 min-w-[20rem] max-w-[30rem]`}
      onClick={onClick}
    >
      <span>{icon}</span> {text}
    </button>
  );
}
