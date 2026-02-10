// Normaliser les noms de régions (ex: "ben arous" -> "benarous", "mednin" -> "medenine")
function normalizeRegion(region) {
  const map = { "ben arous": "benarous", "mednin": "medenine" };
  return (map[region] || region).trim();
}

function showInfo(region) {
  const modal = document.getElementById("regionModal");
  const modalBody = document.getElementById("modalBody");
  const r = normalizeRegion(region);

  if (r === "tunis") {
  modalBody.innerHTML = `
    <h2>Tunis</h2>
    <p>
      Tunis est la capitale de la Tunisie et le principal centre politique,
      administratif et économique du pays. Située au nord, elle joue un rôle
      central dans la prise de décisions nationales. La ville est connue pour sa
      médina classée au patrimoine mondial de l’UNESCO, ainsi que pour son
      dynamisme culturel. Tunis est également un important pôle universitaire et
      économique.
    </p>
    <img src="images/tunis.jpg" alt="Tunis">
  `;
}

if (r === "ariana") {
  modalBody.innerHTML = `
    <h2>Ariana</h2>
    <p>
      L’Ariana est un gouvernorat de la banlieue nord de Tunis. Il se caractérise
      par une urbanisation rapide et une forte croissance démographique. Sa
      proximité avec l’aéroport international de Tunis-Carthage en fait une zone
      stratégique. L’Ariana abrite également plusieurs établissements
      universitaires et zones résidentielles modernes.
    </p>
    <img src="images/ariana.jpg" alt="Ariana">
  `;
}

if (r === "benarous") {
  modalBody.innerHTML = `
    <h2>Ben Arous</h2>
    <p>
      Ben Arous est un gouvernorat situé au sud de la capitale Tunis. Il se
      distingue par son caractère industriel et économique. La région accueille
      plusieurs zones industrielles importantes et joue un rôle clé dans le
      développement économique du Grand Tunis. Ben Arous combine activités
      industrielles et zones résidentielles.
    </p>
    <img src="images/benarous.jpg" alt="Ben Arous">
  `;
}

if (r === "manouba") {
  modalBody.innerHTML = `
    <h2>La Manouba</h2>
    <p>
      La Manouba est un gouvernorat du Grand Tunis, créé en 2000, abritant environ
      418 354 habitants. Connue pour son riche patrimoine beylical, ses vergers,
      et son pôle universitaire (Université de la Manouba), elle allie tradition
      et modernité. Le gouvernorat dispose d’un tissu industriel actif, notamment
      le parc El Fejja, ainsi qu’un artisanat renommé, en particulier à DenDen.
    </p>
    <img src="images/manouba.jpg" alt="La Manouba">
  `;
}

if (r === "nabeul") {
  modalBody.innerHTML = `
    <h2>Nabeul</h2>
    <p>
      Nabeul est un gouvernorat du nord-est de la Tunisie, situé dans la péninsule
      du Cap Bon. Il est réputé pour son artisanat traditionnel, notamment la
      poterie et la céramique. La région est également connue pour son activité
      touristique et agricole. Nabeul joue un rôle important dans la production
      d’agrumes et de produits artisanaux.
    </p>
    <img src="images/nabeul.jpg" alt="Nabeul">
  `;
}

if (r === "zaghouan") {
  modalBody.innerHTML = `
    <h2>Zaghouan</h2>
    <p>
      Zaghouan est un gouvernorat situé au nord-est de la Tunisie, caractérisé par
      un relief montagneux. Il est connu pour ses ressources en eau et son
      importance historique, notamment l’aqueduc romain. La région possède une
      activité agricole notable. Zaghouan joue également un rôle environnemental
      important.
    </p>
    <img src="images/zaghouan.jpg" alt="Zaghouan">
  `;
}

if (r === "bizerte") {
  modalBody.innerHTML = `
    <h2>bizerte</h2>
    <p>
      Bizerte est un gouvernorat situé à l’extrême nord de la Tunisie. Il est connu
      pour son port stratégique et son ouverture sur la Méditerranée. La région
      combine activités portuaires, industrielles et agricoles. Bizerte possède
      également un patrimoine naturel important, notamment le lac de Bizerte.
    </p>
    <img src="images/bizerte.jpg" alt="bizerte">
  `;
}

if (r === "beja") {
  modalBody.innerHTML = `
    <h2>Béja</h2>
    <p>
      Béja est un gouvernorat du nord-ouest tunisien, reconnu pour son potentiel
      agricole. La région est l’un des principaux bassins céréaliers du pays.
      Béja joue un rôle clé dans la sécurité alimentaire nationale. Elle possède
      également un patrimoine historique et rural important.
    </p>
    <img src="images/beja.jpg" alt="Béja">
  `;
}

if (r === "jendouba") {
  modalBody.innerHTML = `
    <h2>Jendouba</h2>
    <p>
      Jendouba est un gouvernorat du nord-ouest caractérisé par un climat humide et
      des paysages verdoyants. Il est connu pour ses forêts et ses ressources
      naturelles. La région possède une activité agricole importante. Jendouba
      contribue au développement rural et environnemental du pays.
    </p>
    <img src="images/jendouba.jpg" alt="Jendouba">
  `;
}

if (r === "kef") {
  modalBody.innerHTML = `
    <h2>Le Kef</h2>
    <p>
      Le Kef est un gouvernorat du nord-ouest tunisien, proche de la frontière
      algérienne. Il est connu pour son patrimoine historique et culturel. La
      région se distingue par son relief montagneux. Le Kef possède également une
      identité culturelle riche et ancienne.
    </p>
    <img src="images/kef.jpg" alt="Le Kef">
  `;
}

if (r === "siliana") {
  modalBody.innerHTML = `
    <h2>Siliana</h2>
    <p>
      Siliana est un gouvernorat du centre-nord de la Tunisie. Il se caractérise
      par une activité agricole dominante, notamment la céréaliculture. La région
      possède également des ressources naturelles importantes. Siliana contribue
      au développement agricole national.
    </p>
    <img src="images/siliana.jpg" alt="Siliana">
  `;
}

if (r === "sousse") {
  modalBody.innerHTML = `
    <h2>Sousse</h2>
    <p>
      Sousse est un gouvernorat du Sahel tunisien, reconnu pour son importance
      touristique. La région attire de nombreux visiteurs grâce à ses plages et
      sa médina classée à l’UNESCO. Sousse est également un centre industriel et
      commercial. Elle combine patrimoine historique et développement moderne.
    </p>
    <img src="images/sousse.jpg" alt="Sousse">
  `;
}

if (r === "monastir") {
  modalBody.innerHTML = `
    <h2>Monastir</h2>
    <p>
      Monastir est un gouvernorat côtier du Sahel tunisien. Il est connu pour son
      ribat historique et son activité touristique. La région joue également un
      rôle important dans l’enseignement supérieur. Monastir combine histoire,
      tourisme et développement urbain.
    </p>
    <img src="images/monastir.jpg" alt="Monastir">
  `;
}

if (r === "mahdia") {
  modalBody.innerHTML = `
    <h2>Mahdia</h2>
    <p>
      Mahdia est un gouvernorat côtier du centre-est de la Tunisie. Il est connu
      pour la pêche, le tourisme et son patrimoine historique. La région possède
      une tradition maritime ancienne. Mahdia contribue à l’économie locale par
      ses activités portuaires.
    </p>
    <img src="images/mahdia.jpg" alt="Mahdia">
  `;
}

if (r === "kairouan") {
  modalBody.innerHTML = `
    <h2>Kairouan</h2>
    <p>
      Kairouan est un gouvernorat du centre tunisien, considéré comme un haut lieu
      religieux et historique. La ville de Kairouan est classée au patrimoine
      mondial de l’UNESCO. La région joue également un rôle agricole important.
      Kairouan combine spiritualité et traditions locales.
    </p>
    <img src="images/kairouan.jpg" alt="Kairouan">
  `;
}

if (r === "kasserine") {
  modalBody.innerHTML = `
    <h2>Kasserine</h2>
    <p>
      Kasserine est un gouvernorat de l’ouest tunisien, caractérisé par un relief
      montagneux. La région possède des ressources naturelles importantes. Elle
      joue un rôle agricole et minier. Kasserine est également riche en sites
      archéologiques.
    </p>
    <img src="images/kasserine.jpg" alt="Kasserine">
  `;
}

if (r === "sidibouzid") {
  modalBody.innerHTML = `
    <h2>Sidi Bouzid</h2>
    <p>
      Sidi Bouzid est un gouvernorat du centre de la Tunisie. Il est connu pour son
      activité agricole, notamment la production de fruits et légumes. La région
      a joué un rôle historique important dans la vie politique récente. Sidi
      Bouzid contribue fortement à l’agriculture nationale.
    </p>
    <img src="images/sidibouzid.jpg" alt="Sidi Bouzid">
  `;
}

if (r === "sfax") {
  modalBody.innerHTML = `
    <h2>Sfax</h2>
    <p>
      Sfax est un gouvernorat du sud-est de la Tunisie et constitue un pôle
      économique majeur. La région est reconnue pour son dynamisme industriel et
      commercial. Sfax joue un rôle important dans l’exportation. Elle est aussi
      connue pour son esprit entrepreneurial.
    </p>
    <img src="images/sfax.jpg" alt="Sfax">
  `;
}

if (r === "gafsa") {
  modalBody.innerHTML = `
    <h2>Gafsa</h2>
    <p>
      Gafsa est un gouvernorat du sud-ouest tunisien, connu pour son bassin
      minier. La région possède une activité industrielle liée aux phosphates.
      Gafsa dispose également d’un patrimoine historique important. Elle joue un
      rôle clé dans l’économie nationale.
    </p>
    <img src="images/gafsa.jpg" alt="Gafsa">
  `;
}

if (r === "tozeur") {
  modalBody.innerHTML = `
    <h2>Tozeur</h2>
    <p>
      Tozeur est un gouvernorat du sud tunisien, célèbre pour ses oasis et son
      architecture traditionnelle. La région est un centre important du
      tourisme saharien. Tozeur se distingue par son patrimoine naturel et
      culturel. Elle attire de nombreux visiteurs chaque année.
    </p>
    <img src="images/tozeur.jpg" alt="Tozeur">
  `;
}

if (r === "kebili") {
  modalBody.innerHTML = `
    <h2>Kébili</h2>
    <p>
      Kébili est un gouvernorat du sud tunisien, caractérisé par un climat
      désertique. La région est connue pour ses oasis et la production de dattes.
      Kébili joue un rôle important dans l’agriculture saharienne. Elle possède
      également une identité culturelle forte.
    </p>
    <img src="images/kebili.jpg" alt="Kébili">
  `;
}

if (r === "gabes") {
  modalBody.innerHTML = `
    <h2>Gabès</h2>
    <p>
      Gabès est un gouvernorat du sud-est de la Tunisie, connu pour son oasis
      maritime unique. La région joue un rôle important dans l’industrie
      chimique. Gabès combine activités industrielles et agricoles. Elle conserve
      un patrimoine naturel remarquable.
    </p>
    <img src="images/gabes.jpg" alt="Gabès">
  `;
}

if (r === "medenine") {
  modalBody.innerHTML = `
    <h2>Médenine</h2>
    <p>
      Médenine est un gouvernorat du sud-est tunisien, connu pour ses ksour
      traditionnels. La région possède une culture saharienne riche. Médenine
      joue un rôle important dans le commerce et le tourisme. Elle est un lien
      entre le nord et le sud du pays.
    </p>
    <img src="images/medenine.jpg" alt="Médenine">
  `;
}

if (r === "tataouine") {
  modalBody.innerHTML = `
    <h2>Tataouine</h2>
    <p>
      Tataouine est un gouvernorat du sud de la Tunisie, caractérisé par un
      environnement désertique. La région est connue pour ses paysages et ses
      villages traditionnels. Tataouine possède une identité culturelle forte.
      Elle est également liée au tourisme saharien.
    </p>
    <img src="images/tataouine.jpg" alt="Tataouine">
  `;
}

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  document.addEventListener("keydown", handleModalEscape);
}

function closeModal() {
  const modal = document.getElementById("regionModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", handleModalEscape);
}

function handleModalEscape(e) {
  if (e.key === "Escape") closeModal();
}

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("regionModal");
  const overlay = modal.querySelector(".modal-overlay");
  overlay.addEventListener("click", closeModal);
});
