import muzej from "@/assets/gallery/muzej.jpg";
import prenj from "@/assets/gallery/prenj.jpg";
import bunker from "@/assets/gallery/bunker.jpg";
import neretva from "@/assets/gallery/neretva.png";
import oldbridge from "@/assets/gallery/oldbridge.jpg";

export const galleryData = (locale: string) => [
  {
    title: locale === "en" ? "Neretva rafting" : "Rafting Neretvom",
    description:
      locale === "en"
        ? "Konjic is known for its spectacular rivers, especially the Neretva, which offers outstanding opportunities for rafting. Visitors can experience the thrill of running down the rapids and enjoy the beautiful scenery."
        : "Konjic je poznat po svojim spektakularnim rijekama, posebno Neretvi, koja pruža izvanredne mogućnosti za rafting. Posjetitelji mogu doživjeti uzbuđenje bijega niz brzake i uživati u prekrasnom krajoliku.",
    src: neretva,
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
  },
  {
    title: locale === "en" ? "The Old Bridge" : "Stara Ćuprija",
    description:
      locale === "en"
        ? "This beautiful stone bridge over the Neretva River dates back to the Ottoman period and is a symbol of the town of Konjic. The exceptional architecture and surroundings make it a favorite place for visitors and photographers."
        : "Ovaj prelijepi kameni most preko rijeke Neretve datira još iz osmanlijskog perioda i predstavlja simbol grada Konjica. Izuzetna arhitektura i okolina čine ga omiljenim mjestom za posjetitelje i fotografe.",
    src: oldbridge,
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
  },
  {
    title: locale === "en" ? 'Tito"s bunker (ARK D-0)' : "Titov Bunker",
    description:
      locale === "en"
        ? "Fascinating underground bunker built for Josip Broz Tito during the Cold War, and today open for visits. This secret location provides an insight into the history and political situation of the time."
        : "Fascinantni podzemni bunker izgrađen za Josipa Broza Tita tijekom Hladnog rata, a danas otvoren za posjete. Ova tajna lokacija pruža uvid u povijest i političku situaciju tog vremena.",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    src: bunker,
  },
  {
    title: locale === "en" ? "Konjic Museum" : "Muzej grada Konjica",
    description:
      locale === "en"
        ? "The museum offers an insight into the rich history and culture of Konjic, with collections that include archaeological artefacts, works of art and traditional woodworking."
        : "Muzej nudi uvid u bogatu povijest i kulturu Konjica, sa zbirkama koje obuhvaćaju arheološke artefakte, umjetnička djela i tradicionalnu obradu drva.",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    src: muzej,
  },
  {
    title: locale === "en" ? "Prenj mountain" : "Planina prenj",
    description:
      locale === "en"
        ? "For nature lovers, the Prenj mountain offers incredible hiking trails and beautiful viewpoints. Visitors can enjoy untouched nature and beautiful landscapes."
        : "Za ljubitelje prirode, planina Prenj nudi nevjerojatne pješačke staze i prekrasne vidikovce. Posjetitelji mogu uživati u netaknutoj prirodi i prekrasnim pejzažima.",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    src: prenj,
  },
];
