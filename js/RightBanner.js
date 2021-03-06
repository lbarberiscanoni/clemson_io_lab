"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightBanner = function (_React$Component) {
    _inherits(RightBanner, _React$Component);

    function RightBanner(props) {
        _classCallCheck(this, RightBanner);

        return _possibleConstructorReturn(this, (RightBanner.__proto__ || Object.getPrototypeOf(RightBanner)).call(this, props));
    }

    _createClass(RightBanner, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    "Fall 2018 News"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Dr. Shuffler will be accepting MS and PhD students for the Fall of 2018."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "If you have questions about program admission requirements, please visit the ",
                    _react2.default.createElement(
                        "a",
                        { href: "https://www.clemson.edu/cbshs/departments/psychology/" },
                        " Clemson Psychology Department website "
                    ),
                    " for more details."
                ),
                _react2.default.createElement(
                    "a",
                    { href: "mailto:mshuffl@clemson.edu", className: "text-primary" },
                    "mshuffl@clemson.edu"
                ),
                _react2.default.createElement(
                    "a",
                    { href: "http://newsstand.clemson.edu/mediarelations/psychology-researcher-to-use-grant-to-improve-teamwork-across-disciplines/", target: "_blank" },
                    _react2.default.createElement(
                        "h3",
                        null,
                        "NSF CAREER Grant Awarded to DIGITAL Lab!"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "embed-responsive embed-responsive-4by3" },
                    _react2.default.createElement("iframe", { className: "embed-responsive-item", src: "assets/research_rock_stars.mp4" })
                )
            );
        }
    }]);

    return RightBanner;
}(_react2.default.Component);

exports.default = RightBanner;