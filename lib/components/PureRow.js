"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * Form row.
 */
var PureRow = /** @class */ (function (_super) {
    __extends(PureRow, _super);
    function PureRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PureRow.prototype.render = function () {
        return React.createElement("div", null, "Test");
    };
    return PureRow;
}(React.PureComponent));
exports.PureRow = PureRow;
exports.default = PureRow;
//# sourceMappingURL=PureRow.js.map