const user = {
  name: 'Usuario de pruebas',
  age: 23,
  job: 'Developer'
}

test('user matches', () => {
  const userString = "{\"name\":\"Usuario de pruebas\",\"age\":23,\"job\":\"Developer\"}";
  expect(user).toMatchSnapshot()
})