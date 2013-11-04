describe('Array.prototype.forEach', function () {

  document.getElementById('array').innerHTML = Array.prototype.forEach.toString();

  var testArray = [9, 6, 4, 1, 3, '2'], forEach, cb = function(el, index, orgArrayRef){};
  
  beforeEach(function () {
    forEach = Array.prototype.forEach;
  });

  it('should be defined inside `Array.prototype`', function () {
    expect('forEach' in Array.prototype).toBe(true);
  });

  it('should be different from the native implementation because this is an interview question', function () {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    expect(iframe.contentWindow.Array.prototype.forEach.toString()).not.toEqual(forEach.toString());
    expect(forEach.toString()).not.toContain("native code");
  });

  it('should have only 1 argument which should be a callback function', function () {
    expect(forEach.length).toEqual(1);
  });

  describe('The callback invocation', function () {

    var sampleArray = [1];

    it('should be invoked when passed in', function () {
      var cb = jasmine.createSpy('CALLBACK_SPY');
      sampleArray.forEach(cb);

      expect(cb).toHaveBeenCalled();
    });
    
    it('should receive 3 arguments', function() {
      var cb = jasmine.createSpy('CALLBACK_SPY');
      sampleArray.forEach(cb);

      expect(cb.mostRecentCall.args.length).toBe(3);
    });

    it('should receive the right arguments', function () {
      var cb = jasmine.createSpy('CALLBACK_SPY');
      sampleArray.forEach(cb);

      expect(cb).toHaveBeenCalledWith(1, 0, sampleArray);
    });

    it('should be invoked the same number of times as the length of the given array and must receive the right and different arguments on each iteration', function () {
      var cb = jasmine.createSpy('CALLBACK_SPY');
      testArray.forEach(cb);

      expect(cb).toHaveBeenCalled();
      expect(cb.callCount).toEqual(testArray.length);
      expect(cb.mostRecentCall.args).toEqual(['2', 5, testArray]);
      expect(cb.argsForCall[3]).toEqual([1, 3, testArray]);

      expect(cb.argsForCall[0]).not.toEqual(cb.argsForCall[5]);
    });

  });
  
});