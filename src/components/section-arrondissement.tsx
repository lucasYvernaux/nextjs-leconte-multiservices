import { SectionArrondissementProps } from "@/lib/type";

export default function SectionArrandissement({
  num,
  listQuartier,
}: SectionArrondissementProps) {
  const suffixNum = num == 1 ? "er" : "ème";
  return (
    <section className="rounded-xl bg-white shadow overflow-hidden border-2 border-leconte-primary">
      <div
        className="content-title flex items-center gap-2  p-6"
        style={{ background: "rgb(57, 174, 229,0.2)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className=" text-leconte-primary"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx={12} cy={10} r={3} />
        </svg>

        <h2 className="text-2xl tracking-tight font-semibold">
          Zones d'intervention dans le {num + suffixNum}
        </h2>
      </div>
      <div className="content p-6 space-y-4">
        <p>
          J'interviens dans tous les quartiers du {num + suffixNum}{" "}
          arrondissement :
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {listQuartier.map((el, index) => (
            <div key={index} className="flex items-center gap-2 capitalize">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-leconte-primary shrink-0"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              {el}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
