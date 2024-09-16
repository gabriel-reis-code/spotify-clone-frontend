'use client'

type SignButtonProps = {
  text: string,
  onClickCallback: () => unknown;
};

export default function SignButton({
  text,
  onClickCallback,
}: SignButtonProps) {


  return (
    <div onClick={onClickCallback} className="
      w-8/12 mt-9 p-4 rounded-full bg-green-spotify flex justify-center items-center
      hover:cursor-pointer hover:brightness-90
      active:brightness-75
      ">
      <span className="text-xl font-semibold text-cente">
        {text}
      </span>
    </div>
  );
}