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

var Student = function (_React$Component) {
    _inherits(Student, _React$Component);

    function Student(props) {
        _classCallCheck(this, Student);

        return _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, props));
    }

    _createClass(Student, [{
        key: "render",
        value: function render() {
            var stylesheet = {
                width: "30rem"
            };

            return _react2.default.createElement(
                "div",
                { className: "card", style: stylesheet },
                _react2.default.createElement("img", { className: "card-img-top img-thumbnail", src: this.props.path, alt: "Card image cap" }),
                _react2.default.createElement(
                    "div",
                    { className: "card-body" },
                    _react2.default.createElement(
                        "h4",
                        { className: "card-title" },
                        this.props.name
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "card-text" },
                        this.props.description
                    )
                ),
                _react2.default.createElement(
                    "button",
                    { className: "card-link btn btn-primary", href: this.props.cv, target: "_blank" },
                    "Curriculum Vitae"
                )
            );
        }
    }]);

    return Student;
}(_react2.default.Component);

exports.default = Student;