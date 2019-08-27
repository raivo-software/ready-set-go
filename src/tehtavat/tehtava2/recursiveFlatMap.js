/*
  TOTEUTA recursiveFlatMap FUNKTIO:
  Toteuta rekursiivinen flatMap -funktio, joka ottaa parametrinaan taulukon,
  minkä arvot voivat olla joko objekteja tai taulukkoja.
  Funktio palauttaa uuden taulun, joka sisältää kaikki parametrina saadun taulun sisältämät objektit,
  mukaan lukien ali-taulukoiden sisältämät objektit.
  Rekursio käy kuitenkin läpi pelkkiä sisäkkäisiä tauluja, mutta ei objekteja.

  Esimerkki:
  Jos funktio saa parametrikseen seuraava taulun:
  [
    { id: 1, name: 'somename' },
    { id: 2, array: ['some item'] },
    [
      [
        { id: 4, name: 'somename' },
        { id: 5, name: 'asd' },
      ],
      { id: 6, name: 'cecec' },
    ]
  ]

  pitäisi funktion palauttaa seuraava taulu:
  [
    { id: 1, name: 'somename' },
    { id: 2, array: ['some item'] },
    { id: 4, name: 'somename' },
    { id: 5, name: 'asd' },
    { id: 6, name: 'cecec' }
  ]

  VINKKI:
  - Tunnistat taulun muista objekteista mm. funktiolla: Array.isArray(arr)
*/
function recursiveFlatMap(array) {
  
}
export default recursiveFlatMap;
