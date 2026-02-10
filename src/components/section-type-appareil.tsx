import { ListTypeApp, SectionTypeAppProps } from "@/lib/type";
import Link from "next/link";

const placeholderListApp: ListTypeApp[] = [
  {
    title: "Lave-linge",
    picto: "🧺",
    url: "/depannage/reparation-lave-linge-paris",
  },
  {
    title: "réfrigérateur",
    picto: "❄️",
    url: "/depannage/reparation-refrigerateur-paris",
  },
  {
    title: "Lave-vaisselle",
    picto: "🍽️",
    url: "/depannage/reparation-lave-vaisselle-paris",
  },
  {
    title: "four",
    picto: "🔥",
    url: "/depannage/reparation-four-paris",
  },
  {
    title: "plaque cuisson",
    picto: "♨️",
    url: "/depannage/reparation-four-paris",
  },
];

export default function SectionTypeAppareil({
  title,
  listApp = placeholderListApp,
  center,
}: SectionTypeAppProps) {
  return (
    <section>
      <h2
        className={`text-3xl font-bold ${center ? "sm:text-center" : ""} mb-10 `}
      >
        {title}
      </h2>
      <div className="flex gap-6 flex-col md:flex-row">
        {listApp.map((app, index) => (
          <Link
            key={index}
            href={app.url}
            className="flex-1 rounded-xl bg-card text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-leconte-primary cursor-pointer h-full"
          >
            <div className="p-6 text-center">
              <div className="text-5xl mb-4">
                {typeof app.picto === "string" ? app.picto : ""}
              </div>
              <h3 className="font-bold text-lg mb-2 capitalize">{app.title}</h3>
              <p className="text-leconte-primary text-sm">
                en savoir plus &rarr;
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
