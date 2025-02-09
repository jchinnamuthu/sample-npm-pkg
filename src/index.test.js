const sampleFunction = require('./index');

test('sampleFunction returns the correct greeting', () => {
  expect(sampleFunction()).toBe("Hello, welcome to my npm package!");
});