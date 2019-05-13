var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

var _templateObject = _taggedTemplateLiteralLoose(
    [
      "\n  position: absolute;\n  width: ",
      "px;\n  height: ",
      "px;\n  background: ",
      ";\n",
    ],
    [
      "\n  position: absolute;\n  width: ",
      "px;\n  height: ",
      "px;\n  background: ",
      ";\n",
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(50%) rotateZ(45deg);\n  bottom: 100%;\n  left: 50%;\n  border-left: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ],
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(50%) rotateZ(45deg);\n  bottom: 100%;\n  left: 50%;\n  border-left: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  top: 100%;\n  left: 50%;\n  border-right: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ],
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  top: 100%;\n  left: 50%;\n  border-right: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject4 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  transform: translateX(50%) translateY(-50%) rotateZ(45deg);\n  right: 100%;\n  top: 50%;\n  border-left: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ],
    [
      "\n  ",
      ";\n  transform: translateX(50%) translateY(-50%) rotateZ(45deg);\n  right: 100%;\n  top: 50%;\n  border-left: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject5 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  left: 100%;\n  top: 50%;\n  border-right: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ],
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  left: 100%;\n  top: 50%;\n  border-right: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ]
  )

function _objectWithoutProperties(obj, keys) {
  var target = {}
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }
  return target
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

/** @jsx jsx */
import PropTypes from "prop-types"
import {css, jsx} from "@emotion/core"

var Base = function Base(props) {
  return css(_templateObject, props.width, props.width, props.background)
}

var Up = function Up(props) {
  return css(_templateObject2, Base(props), props.border, props.border)
}
var Down = function Down(props) {
  return css(_templateObject3, Base(props), props.border, props.border)
}
var Left = function Left(props) {
  return css(_templateObject4, Base(props), props.border, props.border)
}

var Right = function Right(props) {
  return css(_templateObject5, Base(props), props.border, props.border)
}

var BaseArrow = function BaseArrow(_ref) {
  var fn = _ref.fn,
    props = _objectWithoutProperties(_ref, ["fn"])

  return jsx("div", {css: fn(props)})
}

BaseArrow.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        fn: PropTypes.func.isRequired,
        background: PropTypes.string.isRequired,
        border: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
      }
    : {}

var arrows = {
  left: function left(props) {
    return BaseArrow(_extends({fn: Right}, props))
  },
  top: function top(props) {
    return BaseArrow(_extends({fn: Down}, props))
  },
  right: function right(props) {
    return BaseArrow(_extends({fn: Left}, props))
  },
  bottom: function bottom(props) {
    return BaseArrow(_extends({fn: Up}, props))
  },
}

var Arrow = function Arrow(_ref2) {
  var background = _ref2.background,
    border = _ref2.border,
    placement = _ref2.placement,
    width = _ref2.width

  var Component = arrows[placement] || arrows.top
  return (
    width > 0 &&
    jsx(Component, {background: background, border: border, width: width})
  )
}

Arrow.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        background: PropTypes.string.isRequired,
        border: PropTypes.string.isRequired,
        placement: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
      }
    : {}

export default Arrow
