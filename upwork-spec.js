//test1 for login
describe('angularjs homepage test for login if user is not registered', function() {
    it('should add a todo', function() {
      browser.get('http://localhost:8080');

      var uname = element(by.id('username'));
      var pass = element(by.id('password'));
      var log = element(by.css('[class ="btn btn-primary"]'));
      uname.sendKeys('nick1');
      pass.sendKeys('nick1');
      log.click();
   
    });
  });


  //test2
describe('test if register button works', function() {
  it('should go to registration page', function() {
    browser.get('http://localhost:8080');

    
    var log = element(by.id('reg'));
    var reg = element(by.id('register'));
    log.click();
    expect(reg.getText()).toEqual('Register');
 
  });
});

//test 3 
describe('no pass input should not allow user to login', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    var uname = element(by.id('username'));
    var pass = element(by.id('password'));
    var log = element(by.css('[class ="btn btn-primary"]'));
    uname.sendKeys('nick');
    log.click();
 
  });
});

//test 4

describe('check with valid password but invalid username', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    var uname = element(by.id('username'));
    var pass = element(by.id('password'));
    var log = element(by.css('[class ="btn btn-primary"]'));
    uname.sendKeys('nick1');
    pass.sendKeys('nick');
    log.click();
 
  });
});

//test 5

describe('check with invalid password but valid username', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    var uname = element(by.id('username'));
    var pass = element(by.id('password'));
    var log = element(by.css('[class ="btn btn-primary"]'));
    uname.sendKeys('nick');
    pass.sendKeys('nick2');
    log.click();
 
  });
});

//test 6
describe('angularjs homepage test for login if user is not registered', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    var uname = element(by.id('username'));
    var pass = element(by.id('password'));
    var log = element(by.css('[class ="btn btn-primary"]'));
    uname.sendKeys('nick');
    pass.sendKeys('nick');
    log.click();
 
  });
});


//test 1 for registration
describe('test if register button works', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    
    var log = element(by.css('[class ="btn btn-link"]'));
    log.click();
    var fname = element(by.id('firstName'));
    var lname = element(by.id('Text1'));
    var uname = element(by.id('username'));
    var pass = element(by.id('password'));
    var reg = element(by.css('[class ="btn btn-primary"]'));

    fname.sendKeys('nick');
    lname.sendKeys('nick');
    uname.sendKeys('nick');
    pass.sendKeys('12345678');
    reg.click();
 
  });
});

//test 2 for registration
describe('test if register button works', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    
    var log = element(by.css('[class ="btn btn-link"]'));
    log.click();
    var fname = element(by.id('firstName'));
    var lname = element(by.id('Text1'));
    var uname = element(by.id('username'));
    var pass = element(by.id('password'));
    var reg = element(by.css('[class ="btn btn-primary"]'));

    fname.sendKeys('akshat');
    lname.sendKeys('bajaj');
    uname.sendKeys('bajaj');
    pass.sendKeys('bajaj');
    reg.click();
 
  });
});

//test 3 for registration
describe('test if register button works', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    
    var log = element(by.css('[class ="btn btn-link"]'));
    log.click();
    var fname = element(by.id('firstName'));
    var lname = element(by.id('Text1'));
    var uname = element(by.id('username'));
    var pass = element(by.id('password'));
    var reg = element(by.css('[class ="btn btn-primary"]'));

    uname.sendKeys('nick');
    pass.sendKeys('nick');
    reg.click();

    reg.click();
 
  });
});

//test 4 for registration
describe('test if register button works', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    
    var log = element(by.css('[class ="btn btn-link"]'));
    log.click();
    var fname = element(by.id('firstName'));
    var lname = element(by.id('Text1'));
    var uname = element(by.id('username'));
    var pass = element(by.id('password'));
    var reg = element(by.css('[class ="btn btn-primary"]'));

    fname.sendKeys('nick');
    lname.sendKeys('nick');
    uname.sendKeys('nick');
    pass.sendKeys('12345678');
    reg.click();
    var alert = element(by.css('[class = "alert"]'));
    expect(alert.getText()).toEqual('Alphanumerical characters needed');
 
  });
});

//test 5 for registration
describe('test if register button works', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    
    var log = element(by.css('[class ="btn btn-link"]'));
     log.click();
    var fname = element(by.id('firstName'));
    var lname = element(by.id('Text1'));
    var uname = element(by.id('username'));
    var pass = element(by.id('password'));
    var reg = element(by.css('[class ="btn btn-primary"]'));
    fname.sendKeys('nick');
    lname.sendKeys('nick');
    uname.sendKeys('nick');
    pass.sendKeys('Pass12345');
    reg.click();
    var alert = element(by.css('[class = "alert"]'));
    expect(alert.getText()).toEqual('Alphanumerical characters needed');

 
  });
});
  