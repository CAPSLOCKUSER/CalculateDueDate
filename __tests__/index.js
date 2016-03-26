jest.unmock('../index');
var calculateDueDate;
var monday;
var friday;

describe('CalculateDueDate', function () {
  beforeEach(function () {
    calculateDueDate = require('../index');
  });

  describe('Starts on Monday', function () {
    beforeEach(function () {
      monday = new Date(2016, 2, 14, 13, 45);
    });

    it('should be Monday', function() {
      expect(monday.getDay()).toBe(1);
    });

    it('should work with 8 hours', function () {
      var result = calculateDueDate(monday, 8);
      var tomorrow = new Date(2016, 2, 15, 13, 45);
      expect(result).toEqual(tomorrow);
    });
    it('should work with two days', function () {
      var result = calculateDueDate(monday, 16);
      var twoDays = new Date(2016, 2, 16, 13, 45);
      expect(result).toEqual(twoDays);
    });
    it('should work with 10 hours', function () {
      var result = calculateDueDate(monday, 10);
      var tenHours = new Date(2016, 2, 15, 15, 45);
      expect(result).toEqual(tenHours);
    });
    it('should work with 3 hours', function () {
      var result = calculateDueDate(monday, 3);
      var threeHours = new Date(2016, 2, 14, 16, 45);
      expect(result).toEqual(threeHours);
    });
  });

  describe('Starts on Friday', function () {
    beforeEach(function () {
      friday = new Date(2016, 2, 18, 13, 45);
    });

    it('should be Friday', function() {
      expect(friday.getDay()).toBe(5);
    });

    it('should work with 8 hours', function () {
      var result = calculateDueDate(friday, 8);
      var nextMonday = new Date(2016, 2, 21, 13, 45);
      expect(result).toEqual(nextMonday);
    });
    it('should work with 40 hours', function () {
      var result = calculateDueDate(friday, 40);
      var nextFriday = new Date(2016, 2, 25, 13, 45);
      expect(result).toEqual(nextFriday);
    });
    it('should work with 41 hours', function () {
      var result = calculateDueDate(friday, 41);
      var nextFridaySometime = new Date(2016, 2, 25, 14, 45);
      expect(result).toEqual(nextFridaySometime);
    });
    it('should work with 80 hours', function () {
      var result = calculateDueDate(friday, 80);
      var aprilFirst = new Date(2016, 3, 1, 13, 45);
      expect(result).toEqual(aprilFirst);
    });
  });
});
