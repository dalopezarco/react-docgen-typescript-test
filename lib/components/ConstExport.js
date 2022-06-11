"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * test
 *
 */
exports.test = function (one) {
    return one;
};
exports.myObj = {
    foo: 'bar'
};
/**
 * Form row.
 */
exports.ConstExportRow = function (props) {
    var innerFunc = function (props) {
        return React.createElement("span", null, "Inner Func");
    };
    var innerNonExportedFunc = function (props) {
        return React.createElement("span", null, "Inner Func");
    };
    return React.createElement("div", null, "Test");
};
var nonExportedFunc = function (props) {
    return React.createElement("div", null, "No Export");
};
exports.default = exports.ConstExportRow;
//# sourceMappingURL=ConstExport.js.map