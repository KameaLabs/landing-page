import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex justify-center items-center p-6 gap-10">
        <div>
          <Image
            src={"/svg/kamea-logo.svg"}
            alt="Logo"
            height={80}
            width={120}
          />
        </div>
        <div>
          <Image
            src={"/svg/crunch-dao-logo.svg"}
            alt="Logo"
            height={80}
            width={120}
          />
        </div>
      </div>
      <div className="bg-primary text-white text-center p-2">
        Welcome to Crunch DAO Kamea Labs Primary Sale
      </div>
    </>
  );
}
