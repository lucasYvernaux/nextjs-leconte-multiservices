import Link from "next/link";

export default function SectionBesoin() {
  return (
    <section>
      <div className="bg-linear-to-r from-leconte-primary to-[#2a9dd6] text-white py-12 px-6 rounded-lg shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un dépannage urgent ?
          </h2>
          <p className="text-xl mb-8">
            Intervention rapide à Paris et en Île-de-France
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Link
              className="inline-flex gap-2 items-center rounded-md font-bold transition-colors shadow text-leconte-primary hover:bg-primary/80 bg-white text-lg py-4 px-8"
              type="button"
              rel=""
              href="tel:0640141937"
              data-page-id="Home"
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
                className="lucide lucide-phone inline w-6 h-6 mr-2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              06 40 14 19 37
            </Link>
            <Link
              className="inline-flex gap-2 items-center rounded-md font-bold transition-colors shadow text-leconte-primary hover:bg-primary/80 bg-white text-lg py-4 px-8"
              type="button"
              rel=""
              href="mailto:leconte.multiservices.idf@gmail.com"
              data-page-id="Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width={20} height={16} x={2} y={4} rx={2} />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Demander un devis
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
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
              className="lucide lucide-clock w-4 h-4"
            >
              <circle cx={12} cy={12} r={10} />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Lundi - Samedi : 8h - 20h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
