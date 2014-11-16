;(function(){
  'use strict';

  describe('Subtracting Decimals', function(){
    describe('1.1 - 0.1', function(){
      it('should be 1', function(){
        var a = new Decimal('1.1');
        var b = new Decimal('0.1');
        var result = a.minus(b);
        assert.strictEqual(result.toString(), '1');
      });
    });
    describe('0.1 - 1.0', function(){
      it('should be -0.9', function(){
        var a = new Decimal('0.1');
        var b = new Decimal('1.0');
        var result = a.minus(b);
        assert.strictEqual(result.toString(), '-0.9');
      });
    });
  });
  describe('Dividing Decimals', function(){
    describe('.3 / .1 =', function(){
      it("should be 3", function(){
        var a = new Decimal('0.3');
        var b = new Decimal('0.1');
        var result = a.dividedBy(b);
        assert.strictEqual(result.toString(), '3');
      });
    });
    describe('22 / 7 =', function(){
      it("should be 3.14...", function(){
        var a = new Decimal('22');
        var b = new Decimal('7');
        var result = a.dividedBy(b);
        assert.strictEqual(result.toString(), '3.142857143');
      });
    });
    describe('10 / 3 =', function(){
      it("should be 3.333...", function(){
        var a = new Decimal('10');
        var b = new Decimal('3');
        var result = a.dividedBy(b);
        assert.strictEqual(result.toString(), '3.333333333');
      });
    });
    describe('.1 * 3 / 100000 =', function(){
      it("should be 0.000003", function(){
        var a = new Decimal(.1);
        var b = new Decimal(3);
        var c = new Decimal(100000);
        var result = a.times(b).dividedBy(c);
        assert.strictEqual(result.toString(), '0.000003');
      });
    });
    describe('.1 * 3 / 1000000 =', function(){
      it("should be 3e-7", function(){
        var a = new Decimal('.1');
        var b = new Decimal('3');
        var c = new Decimal('1000000');
        var result = a.times(b).dividedBy(c);
        assert.equal(result.toString(), '3e-7');
      });
    });
  });
  describe('Signed decimals', function(){
  });
  describe('Creating a Decimal from a float', function(){
  });

  describe('Multiplying Decimals', function(){
    describe('2 * 3', function(){
      it('should be 6', function(){
        var a = new Decimal('2');
        var b = new Decimal('3');
        var result = a.times(b);
        assert.strictEqual(result.toString(), '6');
      });
    });

    describe('1 * . 2 = .2', function(){
      it('should be .2', function(){
        var a = new Decimal('1');
        var b = new Decimal('.2');
        var result = a.times(b);
        assert.strictEqual(result.toString(), '0.2');
      });
    });

    describe('. 1 2 5 * . 5 =', function(){
      it('should be .0625', function(){
        var a = new Decimal('.125');
        var b = new Decimal('.5');
        var result = a.times(b);
        assert.strictEqual(result.toString(), '0.0625');
      });
    });

    describe('0 * 3 =', function(){
      it('should be .0', function(){
        var a = new Decimal('0');
        var b = new Decimal('3');
        var result = a.times(b);
        assert.strictEqual(result.toString(), '0');
      });
    });

    describe('3 . 1 4 * 0 =', function(){
      it('should be .0', function(){
        var a = new Decimal('3.14');
        var b = new Decimal('0');
        var result = a.times(b);
        assert.strictEqual(result.toString(), '0');
      });
    });

    describe('3 . 1 4 * . 0 =', function(){
      it('should be 0', function(){
        var a = new Decimal('3.14');
        var b = new Decimal('0');
        var result = a.times(b);
        assert.strictEqual(result.toString(), '0');
      });
    });

    describe('3 * 4 * 2 =', function(){
      it('should be 24', function(){
        var a = new Decimal('3');
        var b = new Decimal('4');
        var c = new Decimal('2');
        var result = a.times(b).times(c);
        assert.strictEqual(result.toString(), '24');
      });
    });

    describe('3 * 4 + 2 =', function(){
      it('should be 14', function(){
        var a = new Decimal('3');
        var b = new Decimal('4');
        var c = new Decimal('2');
        var result = a.times(b).plus(c);
        assert.strictEqual(result.toString(), '14');
      });
    });

    describe('7 + 6 * 5 =', function(){
      it('should be 65', function(){
        var a = new Decimal('7');
        var b = new Decimal('6');
        var c = new Decimal('5');
        var result = a.plus(b).times(c);
        assert.strictEqual(result.toString(), '65');
      });
    });

    describe('3 * 0 * 2 =', function(){
      it('should be 0', function(){
        var a = new Decimal('3');
        var b = new Decimal('0');
        var c = new Decimal('2');
        var result = a.times(b).times(c);
        assert.strictEqual(result.toString(), '0');
      });
    });

    describe('9999 * 9999 * 9999 =', function(){
      it('should be 999970000299999', function(){
        var a = new Decimal(999999);
        var b = new Decimal(999999);
        var c = new Decimal(999999);
        var result = a.times(b).times(c);
        assert.strictEqual(result.toString(), 'Error');
      });
    });
  });

  describe('String representation of Decimal', function(){
    describe("'3'", function(){
      it('should be 3', function(){
        var decimal = new Decimal("3");
        assert.strictEqual(decimal.toString(), "3");
      });
    });
    describe("'4.05'", function(){
      it('should be 4.05', function(){
        var decimal = new Decimal("4.05");
        assert.strictEqual(decimal.toString(), "4.05");
      });
    });
    describe("3", function(){
      it('should be 3', function(){
        var decimal = new Decimal(3);
        assert.strictEqual(decimal.toString(), "3");
      });
    });
    describe("4.05", function(){
      it('should be 4.05', function(){
        var decimal = new Decimal(4.05);
        assert.strictEqual(decimal.toString(), "4.05");
      });
    });
  });
  describe('Mantissa', function(){
    describe('1', function(){
      it('should be 0', function(){
        var decimal = new Decimal('1');
        assert.equal(decimal.mantissa, 0);
      });
    });
    describe('1.0', function(){
      it('should be 1', function(){
        var decimal = new Decimal('1.0');
        assert.equal(decimal.mantissa, 1);
      });
    });
    describe('0.22222222', function(){
      it('should be 8', function(){
        var decimal = new Decimal('0.22222222');
        assert.equal(decimal.mantissa, 8);
      });
    });
    describe('.678', function(){
      it('should be 3', function(){
        var decimal = new Decimal('.678');
        assert.equal(decimal.mantissa, 3);
      });
    });
  });
  describe('Adding Decimals', function(){
    describe('1 + 1 =', function(){
      it('should be 2', function () {
        var a = new Decimal('1');
        var b = new Decimal('1');
        var result = a.plus(b);
        assert.strictEqual(result.toString(), '2');
      });
    });
    describe('1 + 0 =', function(){
      it('should be 1', function () {
        var a = new Decimal('1');
        var b = new Decimal('0');
        var result = a.plus(b);
        assert.strictEqual(result.toString(), '1');
      });
    });
    describe('.9 + .1 =', function(){
      it('should be 1', function () {
        var a = new Decimal('.9');
        var b = new Decimal('.1');
        var result = a.plus(b);
        assert.strictEqual(result.toString(), '1');
      });
    });
    describe('. 1 + . 2 =', function(){
      it('should be 0.3', function () {
        var a = new Decimal('.1');
        var b = new Decimal('.2');
        var result = a.plus(b);
        assert.strictEqual(result.toString(), '0.3');
      });
    });
    describe('. 1 1 1 1 1 1 1 1 + . 2 2 2 2 2 2 2 2 =', function(){
      it('should be 0.3', function () {
        var a = new Decimal('.11111111');
        var b = new Decimal('.22222222');
        var result = a.plus(b);
        assert.strictEqual(result.toString(), '0.33333333');
      });
    });
    describe('. 1 1 1  + . 2 2 2 2 2 2 2 2 =', function(){
      it('should be 0.3', function () {
        var a = new Decimal('.111');
        var b = new Decimal('.22222222');
        var result = a.plus(b);
        assert.strictEqual(result.toString(), '0.33322222');
      });
    });
    describe('. 2 2 2 2 2 2 2 2 + . 1 1 1 ', function(){
      it('should be 0.3', function () {
        var a = new Decimal('.22222222');
        var b = new Decimal('.111');
        var result = a.plus(b);
        assert.strictEqual(result.toString(), '0.33322222');
      });
    });
    describe('7 . 8 9 + 1 + 2 =', function(){
      it('should be 10.89', function () {
        var a = new Decimal('7.89');
        var b = new Decimal('1');
        var c = new Decimal('2');
        var result = a.plus(b).plus(c);
        assert.strictEqual(result.toString(), '10.89');
      });
    });
    describe('7 . 8 9 + 4 + 2 =', function(){
      it('should be 13.89', function () {
        var a = new Decimal('7.89');
        var b = new Decimal('4');
        var c = new Decimal('2');
        var result = a.plus(b).plus(c);
        assert.strictEqual(result.toString(), '13.89');
      });
    });
    describe('7 . 8 9 + 1 . 0 5 + 2 =', function(){
      it('should be 10.94', function () {
        var a = new Decimal('7.89');
        var b = new Decimal('1.05');
        var c = new Decimal('2');
        var result = a.plus(b).plus(c);
        assert.strictEqual(result.toString(), '10.94');
      });
    });
    describe('7 . 8 9 + 1 . 0 0 + 2 =', function(){
      it('should be 10.89', function () {
        var a = new Decimal('7.89');
        var b = new Decimal('1.00');
        var c = new Decimal('2');
        var result = a.plus(b).plus(c);
        assert.strictEqual(result.toString(), '10.89');
      });
    });
    describe('0 1 1 + 1 =', function(){
      it('should be 12', function () {
        var a = new Decimal('011');
        var b = new Decimal('1');
        var result = a.plus(b);
        assert.strictEqual(result.toString(), '12');
      });
    });
  });
})();
