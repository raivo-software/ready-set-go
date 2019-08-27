/*
TOTEUTA searchFields FUNKTIO:
Hae kaikki parametrina annetun stringin nimiset kentät objektin sisältä rekursiivisesti, ja palauta ne taulukossa.

Esimerkki:
Jos funktio saa parametrina seuraavan objektin ja fieldNamen:
obj = {
  id: 'testId1',
  someField: 'some string',
  someChild: {
    id: 'testId2',
    children: [
      {id: 'testId3', anystring: 'asd'},
      {anystring: 'asd', anynumber: 0}
    ]
  }
}

fieldName = 'id'

niin funktion tulisi palauttaa taulu:
[ 'testId1', 'testId2', 'testId3' ]

VINKIT:
- Tunnistat objektin muista arvoista esim. näin:
if(obj instanceof Object)
  //Tee jotain

- Voit käyttää mm. Object.entries ja Object.values -funktioita objektin kenttien läpikäyntiin

*/
function searchFields(obj, fieldName) {

}
export default searchFields;
