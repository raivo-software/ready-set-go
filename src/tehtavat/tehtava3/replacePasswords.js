/*
  TOTEUTA replacePasswords FUNKTIO:
  Kuvitellaan, että olet onnistunut asentamaan pahaa aavistamattoman henkilön selaimeen oman laajennuksesi,
  jonka läpi olet onnistunut reitittämään kaiken lähtevän tietoliikenteen.
  Toteuta kuvitteellista laajennusta varten funktio, joka ottaa vastaan JSON-muotoisen stringin, sekä uuden salasanan.
  Funktio purkaa stringin objektimuotoon, etsii sen sisältä rekursiivisesti kenttiä nimeltä "password",
  vaihtaa kaikkien tällaisten kenttien arvoksi parametrina saadun salasanan,
  ja lopuksi muuttaa objektin takaisin stringi-muotoon ja palauttaa sen.
  Mikäli JSON-objekti ei sisällä yhtäkään "password" kenttää,
  tulisi palautettavan stringin olla identtinen parametrina saadun stringin kanssa.

  Tarkoituksena on siis yliajaa kaikki salasanat, joita kohdehenkilön lähtevä tietoliikenne sisältää.
  Kun henkilö sitten rekisteröityy kaikenlaisiin palveluihinsa, hän tietämättään rekisteröi ne sinun määrittelemällä salasanalla,
  jolloin voit ottaa palvelut tarvittaessa haltuun.
  Näin siis, jos henkilö on paha rikollinen, ja sinä teet töitä white hat hackkerina.
*/
function replacePasswords(json, newPassword) {

}
export default replacePasswords;
