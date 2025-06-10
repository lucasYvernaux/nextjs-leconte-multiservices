//test michou
"use client";

async function pedro() {
  const iframe = document.querySelector("iframe");
  const iframeContent = iframe?.contentWindow?.document;
  await setTimeout(() => {
    console.log("hehe");
    console.log(iframeContent?.querySelectorAll("img"));
    const mapPicture = iframeContent?.querySelectorAll(
      ".worldmap-map-container img"
    );
    mapPicture?.forEach((picture) => {
      picture.addEventListener("click", function () {
        const value =
          iframeContent?.querySelector("div.bg-accent div")?.innerHTML;
        console.log("dofus : " + value);
      });
    });
  }, 5000);
}

export function AvisGoogle() {
  const urlWidget = "https://ce79abddbb7c47919b7efa777a053aee.elf.site";
  const urlDofus = "https://dofusdb.fr/fr/tools/map";

  pedro();

  return (
    <>
      <iframe
        className="z-1 w-auto"
        style={{ width: "inherit", height: "inherit", zIndex: 1 }}
        src={urlWidget}
      />
      <iframe
        className="hidden"
        style={{ width: "inherit", height: "inherit" }}
        src={urlDofus}
      />
    </>
  );
}
