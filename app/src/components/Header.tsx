import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex-auto">
        Welcome to Crunch DAO Kamea Labs Primary Sale
      </div>
      <div className="flex-[1_1_50%]">
        <Image src={"/svg/new-logo.svg"} alt="Logo" height={80} width={200} />
      </div>
    </div>
  );
}
