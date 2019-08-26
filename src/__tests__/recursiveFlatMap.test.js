import recursiveFlatMap from "../tehtavat/tehtava2/recursiveFlatMap";

describe('making array hierarchy flat', () => {
  test("flatten complex array hierarchy", () => {
    const testObject = [
      { id: 1, name: 'somename' },
      { id: 2, array: ['some item'] },
      [
        [
          { id: 4, name: 'somename' },
          { id: 5, name: 'asd' },
        ],
        { id: 6, name: 'cecec' },
        [
          { id: 7, name: 'dfgsdfv' },
          [
            { id: 8, name: 'ecadcsc' },
          ]
        ]
      ],
      { id: 3, name: null },
      [
        [],
        { id: 9, name: 'asodnda' },
      ]
    ]
    expect(recursiveFlatMap(testObject).map(x => x.id)).toEqual(
      expect.arrayContaining([1,2,3,4,5,6,7,8,9])
    )
  });

  test("flatten empty array", () => {
    const testObject = [];
    expect(recursiveFlatMap(testObject)).toEqual(
      expect.arrayContaining([])
    )
  });

  test("flatten single-level hierarchy", () => {
    const testObject = [ 1, 2 ,3, 4];
    expect(recursiveFlatMap(testObject)).toEqual(
      expect.arrayContaining([1,2,3,4])
    )
  });

  test("flatten two-level hierarchy", () => {
    const testObject = [ [1], [2] ,3, [4]];
    expect(recursiveFlatMap(testObject)).toEqual(
      expect.arrayContaining([1,2,3,4])
    )
  });
});

