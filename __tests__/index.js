jest.unmock('../index');
var calculateDueDate;

describe('CalculateDueDate', function () {
  beforeEach(function () {
    calculateDueDate = require('../index');
  });
  it('should work', function () {
    expect(calculateDueDate()).toEqual(new Date(2016, 2, 15, 12, 45));
  });
});
