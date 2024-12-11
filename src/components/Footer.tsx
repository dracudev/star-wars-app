import { Social } from "./Social";

export function Footer() {
  return (
    <div className="bg-zinc-1000 flex w-full flex-col items-center justify-center border-t-[0.3px] border-solid border-zinc-700">
      <Social className="mt-6 flex space-x-3"></Social>
      <p className="my-6 text-sm">TM & © Lucasfilm Ltd. All Rights Reserved</p>
    </div>
  );
}
