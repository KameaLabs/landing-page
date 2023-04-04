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
          <Image src={"/png/logo.png"} alt="Logo" height={60} width={100} />
        </div>
      </div>
      <div className="bg-primary text-white text-center p-2">
        Welcome to the Logion/ Kamea Labs Primary sale
      </div>
    </>
  );
}
