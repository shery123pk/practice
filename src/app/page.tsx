import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-[24px]">logo</h1>
      <ul className="px-5">
        <li >
          Home
          About
          Contact Us
        </li>
      </ul>
      
    </div>
  );
}
