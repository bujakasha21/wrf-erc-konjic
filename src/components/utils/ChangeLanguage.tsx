import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";

export default function ChangeLanguage() {
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
    <div className="ml-10">
      <label className="rounded">
        <select
          className="text-white text-xl font-semibold bg-transparent cursor-pointer"
          defaultValue={activeLocal}
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option className="text-black" value="bs">
            <Image
              src={`https://flagcdn.com/256x192/bs.webp`}
              width={50}
              height={50}
              alt="Bosnian"
            />
          </option>
          <option className="text-black" value="en">
            <Image
              src={`https://flagcdn.com/256x192/en.webp`}
              width={50}
              height={50}
              alt="English"
            />
          </option>
        </select>
      </label>
    </div>
  );
}
