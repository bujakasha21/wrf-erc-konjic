import "@/styles/global.css";
import LayoutWrapper from "@/components/utils/LayoutWrapper";
import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";

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
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
