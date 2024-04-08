"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

const ChangeLanguage = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocal = e.target.value;
    router.replace(`/${nextLocal}`);
  };

  return (
    <label className="border-2 p-4 rounded">
      <select
        className="bg-transparent"
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="bs">BS</option>
        <option value="en">EN</option>
      </select>
    </label>
  );
};

export default ChangeLanguage;
