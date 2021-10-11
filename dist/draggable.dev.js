"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var draggable =
/*#__PURE__*/
function () {
  function draggable(options) {
    _classCallCheck(this, draggable);

    this.setuplist(options);
  }

  _createClass(draggable, [{
    key: "setuplist",
    value: function setuplist(options) {
      var list = options.list,
          element = options.el,
          template = options.template;
      if (!element) throw Error('this is not available');
      if (!list) throw Error('this is not available');
      if (!Array.isArray(list)) throw Error('the list is not array');
      if (!template) throw Error('please add tempale');
      if (typeof template !== "function") throw Error('please add function tempale');
      list.foreach(function (item) {
        return console.log(item);
      });
    }
  }]);

  return draggable;
}();