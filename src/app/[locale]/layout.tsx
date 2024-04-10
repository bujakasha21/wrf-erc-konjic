import "@/styles/global.css";
import ChangeLanguage from "@/components/utils/ChangeLanguage";
import LayoutWrapper from "@/components/utils/LayoutWrapper";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const locales = ["en", "bs"];

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
