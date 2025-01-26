"use strict";
var a = 18;
let arr = [1, 2, 3, 4, 5];
let tuple = ["Air", 10];
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPERADMIN"] = "superadmin";
})(userRoles || (userRoles = {}));
userRoles.ADMIN;
var statusCodes;
(function (statusCodes) {
    statusCodes["ABANDOND"] = "abandonded status code 500";
    statusCodes["NOTFOUND"] = "Status code not found";
})(statusCodes || (statusCodes = {}));
statusCodes.NOTFOUND;
// console.log(a);
