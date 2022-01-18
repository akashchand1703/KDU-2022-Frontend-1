// Require the built in 'assertion' library
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert; // these are called utilities

var globalUserNames = [];

function userNameValidator(newUserName) {
  if (typeof newUserName != "string") {
    return false;
  }

  if (globalUserNames.includes(newUserName)) {
    return false;
  } else {
    if (newUserName.length < 8) {
      return false;
    } else {
      if (newUserName.charAt(0) != newUserName.charAt(0).toUpperCase()) {
        return false;
      } else {
        globalUserNames.push(newUserName);
      }
    }
  }
}
describe("userNameValidator", function () {
  let testCount = 1;
  before((done) => {
    globalUserNames.push("Admin@123");
    globalUserNames.push("User@123");
    globalUserNames.push("Guest@123");
    console.log("Testing started - We will test userNameValidator");
    console.log("Appended the test users !");
    console.log(globalUserNames);
    done();
  });

  afterEach((done) => {
    console.log(`Done with test no. ${testCount}`);
    testCount++;
    done();
  });

  it("Check if non string is being rejected", function () {
    assert.equal(userNameValidator(12345), false);
  });

  it("Check if Admin@123 userName already exist inside db", function () {
    assert.isFalse(userNameValidator("Admin@123"));
  });

  it("Check if userName with length less than 8 being rejected", function () {
    expect(userNameValidator("Ray@123")).to.be.false;
  });

  it("Check if userName that doesn't have First Char as Uppercase being rejected", function () {
    assert.equal(userNameValidator("aman@123"), false);
  });

  it("Check if correct user being appended to global userList", function () {
    userNameValidator("Akash@123");
    assert.isTrue(globalUserNames.includes("Akash@123"));
  });

  after((done) => {
    console.log("before cleaning final global userList");
    console.log(globalUserNames);
    globalUserNames = [];
    console.log("Testing finished - Cleaning up the resources");
    assert.equal(globalUserNames.length, 0);
    console.log("after cleaning global userList");
    console.log(globalUserNames);
    done();
  });
});
