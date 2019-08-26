import searchFields from "../tehtavat/tehtava1/searchFields";

describe('finding fields from an object', () => {
  const testObject = {
    id: 'testId1',
    someField: 'some string',
    someChild: {
      id: 'testId2',
      someField: null,
      children: [
        {id: 'testId3', anystring: 'asd'},
        {anystring: 'asd', anynumber: 0}
      ]
    },
    someField2: 'some string',
  }

  test("finds id-fields from object", () => {
    expect(searchFields(testObject, 'id')).toEqual(
      expect.arrayContaining(['testId1', 'testId2', 'testId3'])
    )
  });

  test("finds someField-fields from object", () => {
    expect(searchFields(testObject, 'someField')).toEqual(
      expect.arrayContaining(['some string', null])
    )
  });

  test("finds anynumber-fields from object", () => {
    expect(searchFields(testObject, 'anynumber')).toEqual(
      expect.arrayContaining([0])
    )
  });
});

