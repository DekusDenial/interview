

describe('Special Camel Case', function() {

  document.getElementById('specialCamelCase').innerHTML = String.prototype.specialCamelCase ? String.prototype.specialCamelCase.toString() : 'undefined';
  
  beforeEach(function () {
    
  });

  it('should be defined inside `String.prototype`', function () {
    expect('specialCamelCase' in String.prototype).toBe(true);
  });

  it('should return a string', function () {
    expect(typeof ('a-b'.specialCamelCase())).toBe('string');
  });

  it('should make no difference in transforming with `-` and `_`', function() {
    expect("no-difference".specialCamelCase()).toBe("no_difference".specialCamelCase());
  });

  it("should do what it's supposed to do", function () {
    expect("total-count".specialCamelCase()).toBe("totalCount");
    expect("list-item_count".specialCamelCase()).toBe("listItemCCount");
    expect("what_is-going-on_here".specialCamelCase()).toBe("whatIsGGoingOOOnHHHHere");
  });

  it('should do the advanced featured with "*"', function () {
    expect("_xml_http_request".specialCamelCase()).toBe("XmlHHttpRRRequest");
    expect("_simple*http-server".specialCamelCase()).toBe("SimpleHTTPSServer");
    expect("*html5".specialCamelCase()).toBe("HTML5");
    expect("*html5-rocks".specialCamelCase()).toBe("HTML5Rocks");
  });
})