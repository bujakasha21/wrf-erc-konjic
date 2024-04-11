import "@/styles/global.css";
import LayoutWrapper from "@/components/utils/LayoutWrapper";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const locales = ["en", "bs"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// export async function generateMetadata({
//   params: { locale },
// }: Omit<LocaleLayoutProps, "children">) {
//   const t = await getTranslations({ locale, namespace: "LocaleLayout" });

//   return {
//     title: t("title"),
//   };
// }

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayoutProps>) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
