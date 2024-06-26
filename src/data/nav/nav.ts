// import nav1 from "@/assets/nav/nav1.jpg";
import nav2 from "@/assets/nav/navbar2.png";
import nav3 from "@/assets/nav/navbar3.png";
import nav4 from "@/assets/nav/navbar4.png";
import nav5 from "@/assets/nav/navbar5.png";
import nav6 from "@/assets/nav/navbar6.png";
import nav1 from "@/assets/nav/navbar1.png";

export const navbarList = [
  { name: "Početna", href: "/", image: nav1 },
  { name: "Event", href: "/event", image: nav2 },
  { name: "Sponzori", href: "/sponzori", image: nav3 },
  { name: "Informacije", href: "/tehnical-informations", image: nav4 },
  { name: "Lokacija", href: "/#lokacija", image: nav5 },
  { name: "Kontakt", href: "/contact", image: nav6 },
];

export const navbarList2 = (locale: string) => {
  return [
    { name: locale === "en" ? "Home" : "Početna", href: "/", image: nav1 },
    { name: "Event", href: "/#event", image: nav2 },
    {
      name: locale === "en" ? "Sponsors" : "Sponzori",
      href: "/#sponzori",
      image: nav3,
    },
    {
      name: locale === "en" ? "Informations" : "Informacije",
      href: "/tehnical-informations",
      image: nav4,
    },
    {
      name: locale === "en" ? "Location" : "Lokacija",
      href: "/#lokacija",
      image: nav5,
    },
    {
      name: locale === "en" ? "Contact" : "Kontakt",
      href: "/contact",
      image: nav6,
    },
  ];
};
