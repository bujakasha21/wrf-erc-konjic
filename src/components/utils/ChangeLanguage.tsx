import { useLocale } from "next-intl";
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
    <label className="rounded">
      <select
        className="text-secCol text-xl font-semibold bg-transparent"
        defaultValue={activeLocal}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="bs">BS</option>
        <option value="en">EN</option>
      </select>
    </label>
  );
}
