import replacePasswords from "../tehtavat/tehtava3/replacePasswords";

describe('replace passwords in json', () => {


  test("replace in object hierarchy", () => {
    const testObject = {
      id: 1,
      password: 'aaa',
      child: {
        id: 2,
        password: 'bbb'
      },
      name: 'anyname'
    }
    const targetJson = JSON.stringify(testObject);
    const newPassword = 'somestring';
    testObject.password = newPassword;
    testObject.child.password = newPassword;
    const newJson = JSON.stringify(testObject);
    expect(replacePasswords(targetJson, newPassword)).toBe(newJson);
  });

  test("replace in array hierarchy", () => {
    const testObject = [
      {id: 1},
      {password: 'aaa'},
      [
        {id: 2},
        {password: 'bbb'}
      ],
      {name: 'anyname'}
    ]
    const targetJson = JSON.stringify(testObject);
    const newPassword = 'somestring';
    testObject[1].password = newPassword;
    testObject[2][1].password = newPassword;
    const newJson = JSON.stringify(testObject);
    expect(replacePasswords(targetJson, newPassword)).toBe(newJson);
  });

  test("don't replace anything", () => {
    const testObject = {
      id: 1,
      type: 'aaa',
      child: {
        id: 2,
        name: 'bbb'
      },
      name: 'anyname'
    }
    const targetJson = JSON.stringify(testObject);
    const newPassword = 'somestring';
    expect(replacePasswords(targetJson, newPassword)).toBe(targetJson);
  });
});
