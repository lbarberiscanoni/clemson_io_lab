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

var Collaborator = function (_React$Component) {
    _inherits(Collaborator, _React$Component);

    function Collaborator(props) {
        _classCallCheck(this, Collaborator);

        return _possibleConstructorReturn(this, (Collaborator.__proto__ || Object.getPrototypeOf(Collaborator)).call(this, props));
    }

    _createClass(Collaborator, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "panel panel-default" },
                _react2.default.createElement(
                    "div",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                        "h3",
                        null,
                        " ",
                        this.props.projectName,
                        " "
                    ),
                    _react2.default.createElement(
                        "h3",
                        { className: "panel-title" },
                        " ",
                        this.props.author,
                        " "
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "panel-body" },
                    " ",
                    this.props.description,
                    " "
                )
            );
        }
    }]);

    return Collaborator;
}(_react2.default.Component);

exports.default = Collaborator;