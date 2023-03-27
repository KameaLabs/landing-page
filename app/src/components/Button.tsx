export default function Button({ text, onClick, reverse, icon }: any) {
  return (
    <div className="pt-4">
      <button
        className={`flex items-center justify-center gap-3 mx-auto
      ${
        reverse
          ? "bg-secoundary text-white  border-secoundary"
          : "bg-white text-secoundary border-primary"
      } border  rounded-md p-2 min-w-[20rem] max-w-[30rem]`}
        onClick={onClick}
      >
        <span>{icon}</span> {text}
      </button>
    </div>
  );
}
