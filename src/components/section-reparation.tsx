import { ListStepRepa, SectionReparationProps } from "@/lib/type";
const placeholderList: ListStepRepa[] = [
  {
    title: "Diagnostic",
    description:
      "J'identifie précisément la panne et vous fourni un devis transparent",
  },
  {
    title: "Réparation",
    description: "J'effectue la réparation sur place avec des pièces d'origine",
  },
  {
    title: "Tests & Garantie",
    description: "Je teste le bon fonctionnement et garantis mon intervention",
  },
];
export default function SectionReparation({
  title,
  listRepa = placeholderList,
}: SectionReparationProps) {
  return (
    <>
      <section className="section-deroule-reparation">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">{title}</h2>
        <div className="flex flex-col gap-6 md:flex-row">
          {listRepa.map((step, index) => (
            <div
              key={`step-${index + 1}`}
              className="flex-1 rounded-xl border bg-card text-card-foreground shadow text-center"
            >
              <div className="p-6 pt-6">
                <div className="size-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
