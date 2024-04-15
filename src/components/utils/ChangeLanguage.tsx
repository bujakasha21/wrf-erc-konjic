import { useLocale } from "next-intl";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";

export default function ChangeLanguage({ isActive }: { isActive: boolean }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const activeLocal = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLang = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLang}`);
    });
  };

  return (
    <div className="xl:ml-20">
      <label className="rounded">
        <select
          className={`${
            !isActive ? "text-white" : "text-textColor"
          } text-xl  bg-transparent cursor-pointer duration-500 ease-linear font-thin`}
          defaultValue={activeLocal}
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option className="text-textColor" value="bs">
            <div className="w-full h-full">BS</div>
          </option>
          <option className="text-textColor" value="en">
            EN
          </option>
        </select>
      </label>
    </div>
  );
}
