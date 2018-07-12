(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    exports.JsDiff = factory();
  } else {
    root.JsDiff = factory();
  }
})(this, function() {
  return /** ****/ (function(modules) {
    // webpackBootstrap
    /** ****/ // The module cache
    /** ****/ var installedModules = {}; // The require function

    /** ****/ /** ****/ function __webpack_require__(moduleId) {
      /** ****/ // Check if module is in cache
      /** ****/ if (installedModules[moduleId]) {
        /** ****/ return installedModules[moduleId].exports;
      } // Create a new module (and put it into the cache)

      /** ****/ /** ****/ var module = (installedModules[moduleId] = {
        /** ****/ exports: {},
        /** ****/ id: moduleId,
        /** ****/ loaded: false
        /** ****/
      }); // Execute the module function

      /** ****/ /** ****/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded

      /** ****/ /** ****/ module.loaded = true; // Return the exports of the module

      /** ****/ /** ****/ return module.exports;
      /** ****/
    } // expose the modules object (__webpack_modules__)

    /** ****/ /** ****/ __webpack_require__.m = modules; // expose the module cache

    /** ****/ /** ****/ __webpack_require__.c = installedModules; // __webpack_public_path__

    /** ****/ /** ****/ __webpack_require__.p = ""; // Load entry module and return exports

    /** ****/ /** ****/ return __webpack_require__(0);
    /** ****/
  })(
    /** **********************************************************************/
    /** ****/ [
      /* 0 */
      /** */ function(module, exports, __webpack_require__) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.canonicalize = exports.convertChangesToXML = exports.convertChangesToDMP = exports.merge = exports.parsePatch = exports.applyPatches = exports.applyPatch = exports.createPatch = exports.createTwoFilesPatch = exports.structuredPatch = exports.diffArrays = exports.diffJson = exports.diffCss = exports.diffSentences = exports.diffTrimmedLines = exports.diffLines = exports.diffWordsWithSpace = exports.diffWords = exports.diffChars = exports.Diff = undefined;

        /* istanbul ignore end*/ var /* istanbul ignore start*/ _base = __webpack_require__(
          1
        ) /* istanbul ignore end*/;

        /* istanbul ignore start*/ var _base2 = _interopRequireDefault(_base);

        /* istanbul ignore end*/ var /* istanbul ignore start*/ _character = __webpack_require__(
          2
        ) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _word = __webpack_require__(3) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _line = __webpack_require__(5) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _sentence = __webpack_require__(6) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _css = __webpack_require__(7) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _json = __webpack_require__(8) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _array = __webpack_require__(9) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _apply = __webpack_require__(10) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _parse = __webpack_require__(11) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _merge = __webpack_require__(13) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _create = __webpack_require__(14) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _dmp = __webpack_require__(16) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _xml = __webpack_require__(17) /* istanbul ignore end*/;

        /* istanbul ignore start*/ function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /* See LICENSE file for terms of use */

        /*
	 * Text diff implementation.
	 *
	 * This library supports the following APIS:
	 * JsDiff.diffChars: Character by character diff
	 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
	 * JsDiff.diffLines: Line based diff
	 *
	 * JsDiff.diffCss: Diff targeted at CSS content
	 *
	 * These methods are based on the implementation proposed in
	 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
	 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
	 */
        exports.Diff = _base2.default;
        /* istanbul ignore start*/ exports.diffChars = _character.diffChars;
        /* istanbul ignore start*/ exports.diffWords = _word.diffWords;
        /* istanbul ignore start*/ exports.diffWordsWithSpace = _word.diffWordsWithSpace;
        /* istanbul ignore start*/ exports.diffLines = _line.diffLines;
        /* istanbul ignore start*/ exports.diffTrimmedLines = _line.diffTrimmedLines;
        /* istanbul ignore start*/ exports.diffSentences = _sentence.diffSentences;
        /* istanbul ignore start*/ exports.diffCss = _css.diffCss;
        /* istanbul ignore start*/ exports.diffJson = _json.diffJson;
        /* istanbul ignore start*/ exports.diffArrays = _array.diffArrays;
        /* istanbul ignore start*/ exports.structuredPatch = _create.structuredPatch;
        /* istanbul ignore start*/ exports.createTwoFilesPatch = _create.createTwoFilesPatch;
        /* istanbul ignore start*/ exports.createPatch = _create.createPatch;
        /* istanbul ignore start*/ exports.applyPatch = _apply.applyPatch;
        /* istanbul ignore start*/ exports.applyPatches = _apply.applyPatches;
        /* istanbul ignore start*/ exports.parsePatch = _parse.parsePatch;
        /* istanbul ignore start*/ exports.merge = _merge.merge;
        /* istanbul ignore start*/ exports.convertChangesToDMP = _dmp.convertChangesToDMP;
        /* istanbul ignore start*/ exports.convertChangesToXML = _xml.convertChangesToXML;
        /* istanbul ignore start*/ exports.canonicalize = _json.canonicalize;
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEaWZmIiwiZGlmZkNoYXJzIiwiZGlmZldvcmRzIiwiZGlmZldvcmRzV2l0aFNwYWNlIiwiZGlmZkxpbmVzIiwiZGlmZlRyaW1tZWRMaW5lcyIsImRpZmZTZW50ZW5jZXMiLCJkaWZmQ3NzIiwiZGlmZkpzb24iLCJkaWZmQXJyYXlzIiwic3RydWN0dXJlZFBhdGNoIiwiY3JlYXRlVHdvRmlsZXNQYXRjaCIsImNyZWF0ZVBhdGNoIiwiYXBwbHlQYXRjaCIsImFwcGx5UGF0Y2hlcyIsInBhcnNlUGF0Y2giLCJtZXJnZSIsImNvbnZlcnRDaGFuZ2VzVG9ETVAiLCJjb252ZXJ0Q2hhbmdlc1RvWE1MIiwiY2Fub25pY2FsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3VCQWdCQTs7Ozt1QkFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQWpDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Z0NBa0NFQSxJO3lEQUVBQyxTO3lEQUNBQyxTO3lEQUNBQyxrQjt5REFDQUMsUzt5REFDQUMsZ0I7eURBQ0FDLGE7eURBRUFDLE87eURBQ0FDLFE7eURBRUFDLFU7eURBRUFDLGU7eURBQ0FDLG1CO3lEQUNBQyxXO3lEQUNBQyxVO3lEQUNBQyxZO3lEQUNBQyxVO3lEQUNBQyxLO3lEQUNBQyxtQjt5REFDQUMsbUI7eURBQ0FDLFkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZWUgTElDRU5TRSBmaWxlIGZvciB0ZXJtcyBvZiB1c2UgKi9cblxuLypcbiAqIFRleHQgZGlmZiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBUaGlzIGxpYnJhcnkgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBBUElTOlxuICogSnNEaWZmLmRpZmZDaGFyczogQ2hhcmFjdGVyIGJ5IGNoYXJhY3RlciBkaWZmXG4gKiBKc0RpZmYuZGlmZldvcmRzOiBXb3JkIChhcyBkZWZpbmVkIGJ5IFxcYiByZWdleCkgZGlmZiB3aGljaCBpZ25vcmVzIHdoaXRlc3BhY2VcbiAqIEpzRGlmZi5kaWZmTGluZXM6IExpbmUgYmFzZWQgZGlmZlxuICpcbiAqIEpzRGlmZi5kaWZmQ3NzOiBEaWZmIHRhcmdldGVkIGF0IENTUyBjb250ZW50XG4gKlxuICogVGhlc2UgbWV0aG9kcyBhcmUgYmFzZWQgb24gdGhlIGltcGxlbWVudGF0aW9uIHByb3Bvc2VkIGluXG4gKiBcIkFuIE8oTkQpIERpZmZlcmVuY2UgQWxnb3JpdGhtIGFuZCBpdHMgVmFyaWF0aW9uc1wiIChNeWVycywgMTk4NikuXG4gKiBodHRwOi8vY2l0ZXNlZXJ4LmlzdC5wc3UuZWR1L3ZpZXdkb2Mvc3VtbWFyeT9kb2k9MTAuMS4xLjQuNjkyN1xuICovXG5pbXBvcnQgRGlmZiBmcm9tICcuL2RpZmYvYmFzZSc7XG5pbXBvcnQge2RpZmZDaGFyc30gZnJvbSAnLi9kaWZmL2NoYXJhY3Rlcic7XG5pbXBvcnQge2RpZmZXb3JkcywgZGlmZldvcmRzV2l0aFNwYWNlfSBmcm9tICcuL2RpZmYvd29yZCc7XG5pbXBvcnQge2RpZmZMaW5lcywgZGlmZlRyaW1tZWRMaW5lc30gZnJvbSAnLi9kaWZmL2xpbmUnO1xuaW1wb3J0IHtkaWZmU2VudGVuY2VzfSBmcm9tICcuL2RpZmYvc2VudGVuY2UnO1xuXG5pbXBvcnQge2RpZmZDc3N9IGZyb20gJy4vZGlmZi9jc3MnO1xuaW1wb3J0IHtkaWZmSnNvbiwgY2Fub25pY2FsaXplfSBmcm9tICcuL2RpZmYvanNvbic7XG5cbmltcG9ydCB7ZGlmZkFycmF5c30gZnJvbSAnLi9kaWZmL2FycmF5JztcblxuaW1wb3J0IHthcHBseVBhdGNoLCBhcHBseVBhdGNoZXN9IGZyb20gJy4vcGF0Y2gvYXBwbHknO1xuaW1wb3J0IHtwYXJzZVBhdGNofSBmcm9tICcuL3BhdGNoL3BhcnNlJztcbmltcG9ydCB7bWVyZ2V9IGZyb20gJy4vcGF0Y2gvbWVyZ2UnO1xuaW1wb3J0IHtzdHJ1Y3R1cmVkUGF0Y2gsIGNyZWF0ZVR3b0ZpbGVzUGF0Y2gsIGNyZWF0ZVBhdGNofSBmcm9tICcuL3BhdGNoL2NyZWF0ZSc7XG5cbmltcG9ydCB7Y29udmVydENoYW5nZXNUb0RNUH0gZnJvbSAnLi9jb252ZXJ0L2RtcCc7XG5pbXBvcnQge2NvbnZlcnRDaGFuZ2VzVG9YTUx9IGZyb20gJy4vY29udmVydC94bWwnO1xuXG5leHBvcnQge1xuICBEaWZmLFxuXG4gIGRpZmZDaGFycyxcbiAgZGlmZldvcmRzLFxuICBkaWZmV29yZHNXaXRoU3BhY2UsXG4gIGRpZmZMaW5lcyxcbiAgZGlmZlRyaW1tZWRMaW5lcyxcbiAgZGlmZlNlbnRlbmNlcyxcblxuICBkaWZmQ3NzLFxuICBkaWZmSnNvbixcblxuICBkaWZmQXJyYXlzLFxuXG4gIHN0cnVjdHVyZWRQYXRjaCxcbiAgY3JlYXRlVHdvRmlsZXNQYXRjaCxcbiAgY3JlYXRlUGF0Y2gsXG4gIGFwcGx5UGF0Y2gsXG4gIGFwcGx5UGF0Y2hlcyxcbiAgcGFyc2VQYXRjaCxcbiAgbWVyZ2UsXG4gIGNvbnZlcnRDaGFuZ2VzVG9ETVAsXG4gIGNvbnZlcnRDaGFuZ2VzVG9YTUwsXG4gIGNhbm9uaWNhbGl6ZVxufTtcbiJdfQ==
        /** */
      },
      /* 1 */
      /** */ function(module, exports) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = /* istanbul ignore end*/ Diff;
        function Diff() {}

        Diff.prototype = {
          /* istanbul ignore start*/ /* istanbul ignore end*/ diff: function diff(
            oldString,
            newString
          ) {
            /* istanbul ignore start*/ var /* istanbul ignore end*/ options =
              arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var callback = options.callback;
            if (typeof options === "function") {
              callback = options;
              options = {};
            }
            this.options = options;

            var self = this;

            function done(value) {
              if (callback) {
                setTimeout(function() {
                  callback(undefined, value);
                }, 0);
                return true;
              } else {
                return value;
              }
            }

            // Allow subclasses to massage the input prior to running
            oldString = this.castInput(oldString);
            newString = this.castInput(newString);

            oldString = this.removeEmpty(this.tokenize(oldString));
            newString = this.removeEmpty(this.tokenize(newString));

            var newLen = newString.length,
              oldLen = oldString.length;
            var editLength = 1;
            var maxEditLength = newLen + oldLen;
            var bestPath = [{ newPos: -1, components: [] }];

            // Seed editLength = 0, i.e. the content starts with the same values
            var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
            if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
              // Identity per the equality and tokenizer
              return done([{ value: this.join(newString), count: newString.length }]);
            }

            // Main worker method. checks all permutations of a given edit length for acceptance.
            function execEditLength() {
              for (
                var diagonalPath = -1 * editLength;
                diagonalPath <= editLength;
                diagonalPath += 2
              ) {
                var basePath = /* istanbul ignore start*/ void 0 /* istanbul ignore end*/;
                var addPath = bestPath[diagonalPath - 1],
                  removePath = bestPath[diagonalPath + 1],
                  _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
                if (addPath) {
                  // No one else is going to attempt to use this value, clear it
                  bestPath[diagonalPath - 1] = undefined;
                }

                var canAdd = addPath && addPath.newPos + 1 < newLen,
                  canRemove = removePath && _oldPos >= 0 && _oldPos < oldLen;
                if (!canAdd && !canRemove) {
                  // If this path is a terminal then prune
                  bestPath[diagonalPath] = undefined;
                  continue;
                }

                // Select the diagonal that we want to branch from. We select the prior
                // path whose position in the new string is the farthest from the origin
                // and does not pass the bounds of the diff graph
                if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {
                  basePath = clonePath(removePath);
                  self.pushComponent(basePath.components, undefined, true);
                } else {
                  basePath = addPath; // No need to clone, we've pulled it from the list
                  basePath.newPos++;
                  self.pushComponent(basePath.components, true, undefined);
                }

                _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

                // If we have hit the end of both strings, then we are done
                if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
                  return done(
                    buildValues(
                      self,
                      basePath.components,
                      newString,
                      oldString,
                      self.useLongestToken
                    )
                  );
                } else {
                  // Otherwise track this path as a potential candidate and continue.
                  bestPath[diagonalPath] = basePath;
                }
              }

              editLength++;
            }

            // Performs the length of edit iteration. Is a bit fugly as this has to support the
            // sync and async mode which is never fun. Loops over execEditLength until a value
            // is produced.
            if (callback) {
              (function exec() {
                setTimeout(function() {
                  // This should not happen, but we want to be safe.
                  /* istanbul ignore next */
                  if (editLength > maxEditLength) {
                    return callback();
                  }

                  if (!execEditLength()) {
                    exec();
                  }
                }, 0);
              })();
            } else {
              while (editLength <= maxEditLength) {
                var ret = execEditLength();
                if (ret) {
                  return ret;
                }
              }
            }
          },
          /* istanbul ignore start*/ /* istanbul ignore end*/ pushComponent: function pushComponent(
            components,
            added,
            removed
          ) {
            var last = components[components.length - 1];
            if (last && last.added === added && last.removed === removed) {
              // We need to clone here as the component clone operation is just
              // as shallow array clone
              components[components.length - 1] = {
                count: last.count + 1,
                added: added,
                removed: removed
              };
            } else {
              components.push({ count: 1, added: added, removed: removed });
            }
          },
          /* istanbul ignore start*/ /* istanbul ignore end*/ extractCommon: function extractCommon(
            basePath,
            newString,
            oldString,
            diagonalPath
          ) {
            var newLen = newString.length,
              oldLen = oldString.length,
              newPos = basePath.newPos,
              oldPos = newPos - diagonalPath,
              commonCount = 0;
            while (
              newPos + 1 < newLen &&
              oldPos + 1 < oldLen &&
              this.equals(newString[newPos + 1], oldString[oldPos + 1])
            ) {
              newPos++;
              oldPos++;
              commonCount++;
            }

            if (commonCount) {
              basePath.components.push({ count: commonCount });
            }

            basePath.newPos = newPos;
            return oldPos;
          },
          /* istanbul ignore start*/ /* istanbul ignore end*/ equals: function equals(left, right) {
            return (
              left === right ||
              (this.options.ignoreCase && left.toLowerCase() === right.toLowerCase())
            );
          },
          /* istanbul ignore start*/ /* istanbul ignore end*/ removeEmpty: function removeEmpty(
            array
          ) {
            var ret = [];
            for (var i = 0; i < array.length; i++) {
              if (array[i]) {
                ret.push(array[i]);
              }
            }
            return ret;
          },
          /* istanbul ignore start*/ /* istanbul ignore end*/ castInput: function castInput(value) {
            return value;
          },
          /* istanbul ignore start*/ /* istanbul ignore end*/ tokenize: function tokenize(value) {
            return value.split("");
          },
          /* istanbul ignore start*/ /* istanbul ignore end*/ join: function join(chars) {
            return chars.join("");
          }
        };

        function buildValues(diff, components, newString, oldString, useLongestToken) {
          var componentPos = 0,
            componentLen = components.length,
            newPos = 0,
            oldPos = 0;

          for (; componentPos < componentLen; componentPos++) {
            var component = components[componentPos];
            if (!component.removed) {
              if (!component.added && useLongestToken) {
                var value = newString.slice(newPos, newPos + component.count);
                value = value.map(function(value, i) {
                  var oldValue = oldString[oldPos + i];
                  return oldValue.length > value.length ? oldValue : value;
                });

                component.value = diff.join(value);
              } else {
                component.value = diff.join(newString.slice(newPos, newPos + component.count));
              }
              newPos += component.count;

              // Common case
              if (!component.added) {
                oldPos += component.count;
              }
            } else {
              component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
              oldPos += component.count;

              // Reverse add and remove so removes are output first to match common convention
              // The diffing algorithm is tied to add then remove output and this is the simplest
              // route to get the desired output with minimal overhead.
              if (componentPos && components[componentPos - 1].added) {
                var tmp = components[componentPos - 1];
                components[componentPos - 1] = components[componentPos];
                components[componentPos] = tmp;
              }
            }
          }

          // Special case handle for when one terminal is ignored. For this case we merge the
          // terminal into the prior string and drop the change.
          var lastComponent = components[componentLen - 1];
          if (
            componentLen > 1 &&
            (lastComponent.added || lastComponent.removed) &&
            diff.equals("", lastComponent.value)
          ) {
            components[componentLen - 2].value += lastComponent.value;
            components.pop();
          }

          return components;
        }

        function clonePath(path) {
          return { newPos: path.newPos, components: path.components.slice(0) };
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Jhc2UuanMiXSwibmFtZXMiOlsiRGlmZiIsInByb3RvdHlwZSIsImRpZmYiLCJvbGRTdHJpbmciLCJuZXdTdHJpbmciLCJvcHRpb25zIiwiY2FsbGJhY2siLCJzZWxmIiwiZG9uZSIsInZhbHVlIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImNhc3RJbnB1dCIsInJlbW92ZUVtcHR5IiwidG9rZW5pemUiLCJuZXdMZW4iLCJsZW5ndGgiLCJvbGRMZW4iLCJlZGl0TGVuZ3RoIiwibWF4RWRpdExlbmd0aCIsImJlc3RQYXRoIiwibmV3UG9zIiwiY29tcG9uZW50cyIsIm9sZFBvcyIsImV4dHJhY3RDb21tb24iLCJqb2luIiwiY291bnQiLCJleGVjRWRpdExlbmd0aCIsImRpYWdvbmFsUGF0aCIsImJhc2VQYXRoIiwiYWRkUGF0aCIsInJlbW92ZVBhdGgiLCJjYW5BZGQiLCJjYW5SZW1vdmUiLCJjbG9uZVBhdGgiLCJwdXNoQ29tcG9uZW50IiwiYnVpbGRWYWx1ZXMiLCJ1c2VMb25nZXN0VG9rZW4iLCJleGVjIiwicmV0IiwiYWRkZWQiLCJyZW1vdmVkIiwibGFzdCIsInB1c2giLCJjb21tb25Db3VudCIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsImlnbm9yZUNhc2UiLCJ0b0xvd2VyQ2FzZSIsImFycmF5IiwiaSIsInNwbGl0IiwiY2hhcnMiLCJjb21wb25lbnRQb3MiLCJjb21wb25lbnRMZW4iLCJjb21wb25lbnQiLCJzbGljZSIsIm1hcCIsIm9sZFZhbHVlIiwidG1wIiwibGFzdENvbXBvbmVudCIsInBvcCIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7OzRDQUF3QkEsSTtBQUFULFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTs7QUFFakNBLEtBQUtDLFNBQUwsR0FBaUI7QUFBQSxtREFDZkMsSUFEZSxnQkFDVkMsU0FEVSxFQUNDQyxTQURELEVBQzBCO0FBQUEsd0RBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDdkMsUUFBSUMsV0FBV0QsUUFBUUMsUUFBdkI7QUFDQSxRQUFJLE9BQU9ELE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakNDLGlCQUFXRCxPQUFYO0FBQ0FBLGdCQUFVLEVBQVY7QUFDRDtBQUNELFNBQUtBLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxRQUFJRSxPQUFPLElBQVg7O0FBRUEsYUFBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLFVBQUlILFFBQUosRUFBYztBQUNaSSxtQkFBVyxZQUFXO0FBQUVKLG1CQUFTSyxTQUFULEVBQW9CRixLQUFwQjtBQUE2QixTQUFyRCxFQUF1RCxDQUF2RDtBQUNBLGVBQU8sSUFBUDtBQUNELE9BSEQsTUFHTztBQUNMLGVBQU9BLEtBQVA7QUFDRDtBQUNGOztBQUVEO0FBQ0FOLGdCQUFZLEtBQUtTLFNBQUwsQ0FBZVQsU0FBZixDQUFaO0FBQ0FDLGdCQUFZLEtBQUtRLFNBQUwsQ0FBZVIsU0FBZixDQUFaOztBQUVBRCxnQkFBWSxLQUFLVSxXQUFMLENBQWlCLEtBQUtDLFFBQUwsQ0FBY1gsU0FBZCxDQUFqQixDQUFaO0FBQ0FDLGdCQUFZLEtBQUtTLFdBQUwsQ0FBaUIsS0FBS0MsUUFBTCxDQUFjVixTQUFkLENBQWpCLENBQVo7O0FBRUEsUUFBSVcsU0FBU1gsVUFBVVksTUFBdkI7QUFBQSxRQUErQkMsU0FBU2QsVUFBVWEsTUFBbEQ7QUFDQSxRQUFJRSxhQUFhLENBQWpCO0FBQ0EsUUFBSUMsZ0JBQWdCSixTQUFTRSxNQUE3QjtBQUNBLFFBQUlHLFdBQVcsQ0FBQyxFQUFFQyxRQUFRLENBQUMsQ0FBWCxFQUFjQyxZQUFZLEVBQTFCLEVBQUQsQ0FBZjs7QUFFQTtBQUNBLFFBQUlDLFNBQVMsS0FBS0MsYUFBTCxDQUFtQkosU0FBUyxDQUFULENBQW5CLEVBQWdDaEIsU0FBaEMsRUFBMkNELFNBQTNDLEVBQXNELENBQXRELENBQWI7QUFDQSxRQUFJaUIsU0FBUyxDQUFULEVBQVlDLE1BQVosR0FBcUIsQ0FBckIsSUFBMEJOLE1BQTFCLElBQW9DUSxTQUFTLENBQVQsSUFBY04sTUFBdEQsRUFBOEQ7QUFDNUQ7QUFDQSxhQUFPVCxLQUFLLENBQUMsRUFBQ0MsT0FBTyxLQUFLZ0IsSUFBTCxDQUFVckIsU0FBVixDQUFSLEVBQThCc0IsT0FBT3RCLFVBQVVZLE1BQS9DLEVBQUQsQ0FBTCxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxhQUFTVyxjQUFULEdBQTBCO0FBQ3hCLFdBQUssSUFBSUMsZUFBZSxDQUFDLENBQUQsR0FBS1YsVUFBN0IsRUFBeUNVLGdCQUFnQlYsVUFBekQsRUFBcUVVLGdCQUFnQixDQUFyRixFQUF3RjtBQUN0RixZQUFJQywwQ0FBSjtBQUNBLFlBQUlDLFVBQVVWLFNBQVNRLGVBQWUsQ0FBeEIsQ0FBZDtBQUFBLFlBQ0lHLGFBQWFYLFNBQVNRLGVBQWUsQ0FBeEIsQ0FEakI7QUFBQSxZQUVJTCxVQUFTLENBQUNRLGFBQWFBLFdBQVdWLE1BQXhCLEdBQWlDLENBQWxDLElBQXVDTyxZQUZwRDtBQUdBLFlBQUlFLE9BQUosRUFBYTtBQUNYO0FBQ0FWLG1CQUFTUSxlQUFlLENBQXhCLElBQTZCakIsU0FBN0I7QUFDRDs7QUFFRCxZQUFJcUIsU0FBU0YsV0FBV0EsUUFBUVQsTUFBUixHQUFpQixDQUFqQixHQUFxQk4sTUFBN0M7QUFBQSxZQUNJa0IsWUFBWUYsY0FBYyxLQUFLUixPQUFuQixJQUE2QkEsVUFBU04sTUFEdEQ7QUFFQSxZQUFJLENBQUNlLE1BQUQsSUFBVyxDQUFDQyxTQUFoQixFQUEyQjtBQUN6QjtBQUNBYixtQkFBU1EsWUFBVCxJQUF5QmpCLFNBQXpCO0FBQ0E7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxZQUFJLENBQUNxQixNQUFELElBQVlDLGFBQWFILFFBQVFULE1BQVIsR0FBaUJVLFdBQVdWLE1BQXpELEVBQWtFO0FBQ2hFUSxxQkFBV0ssVUFBVUgsVUFBVixDQUFYO0FBQ0F4QixlQUFLNEIsYUFBTCxDQUFtQk4sU0FBU1AsVUFBNUIsRUFBd0NYLFNBQXhDLEVBQW1ELElBQW5EO0FBQ0QsU0FIRCxNQUdPO0FBQ0xrQixxQkFBV0MsT0FBWCxDQURLLENBQ2lCO0FBQ3RCRCxtQkFBU1IsTUFBVDtBQUNBZCxlQUFLNEIsYUFBTCxDQUFtQk4sU0FBU1AsVUFBNUIsRUFBd0MsSUFBeEMsRUFBOENYLFNBQTlDO0FBQ0Q7O0FBRURZLGtCQUFTaEIsS0FBS2lCLGFBQUwsQ0FBbUJLLFFBQW5CLEVBQTZCekIsU0FBN0IsRUFBd0NELFNBQXhDLEVBQW1EeUIsWUFBbkQsQ0FBVDs7QUFFQTtBQUNBLFlBQUlDLFNBQVNSLE1BQVQsR0FBa0IsQ0FBbEIsSUFBdUJOLE1BQXZCLElBQWlDUSxVQUFTLENBQVQsSUFBY04sTUFBbkQsRUFBMkQ7QUFDekQsaUJBQU9ULEtBQUs0QixZQUFZN0IsSUFBWixFQUFrQnNCLFNBQVNQLFVBQTNCLEVBQXVDbEIsU0FBdkMsRUFBa0RELFNBQWxELEVBQTZESSxLQUFLOEIsZUFBbEUsQ0FBTCxDQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0w7QUFDQWpCLG1CQUFTUSxZQUFULElBQXlCQyxRQUF6QjtBQUNEO0FBQ0Y7O0FBRURYO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsUUFBSVosUUFBSixFQUFjO0FBQ1gsZ0JBQVNnQyxJQUFULEdBQWdCO0FBQ2Y1QixtQkFBVyxZQUFXO0FBQ3BCO0FBQ0E7QUFDQSxjQUFJUSxhQUFhQyxhQUFqQixFQUFnQztBQUM5QixtQkFBT2IsVUFBUDtBQUNEOztBQUVELGNBQUksQ0FBQ3FCLGdCQUFMLEVBQXVCO0FBQ3JCVztBQUNEO0FBQ0YsU0FWRCxFQVVHLENBVkg7QUFXRCxPQVpBLEdBQUQ7QUFhRCxLQWRELE1BY087QUFDTCxhQUFPcEIsY0FBY0MsYUFBckIsRUFBb0M7QUFDbEMsWUFBSW9CLE1BQU1aLGdCQUFWO0FBQ0EsWUFBSVksR0FBSixFQUFTO0FBQ1AsaUJBQU9BLEdBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQTlHYztBQUFBLG1EQWdIZkosYUFoSGUseUJBZ0hEYixVQWhIQyxFQWdIV2tCLEtBaEhYLEVBZ0hrQkMsT0FoSGxCLEVBZ0gyQjtBQUN4QyxRQUFJQyxPQUFPcEIsV0FBV0EsV0FBV04sTUFBWCxHQUFvQixDQUEvQixDQUFYO0FBQ0EsUUFBSTBCLFFBQVFBLEtBQUtGLEtBQUwsS0FBZUEsS0FBdkIsSUFBZ0NFLEtBQUtELE9BQUwsS0FBaUJBLE9BQXJELEVBQThEO0FBQzVEO0FBQ0E7QUFDQW5CLGlCQUFXQSxXQUFXTixNQUFYLEdBQW9CLENBQS9CLElBQW9DLEVBQUNVLE9BQU9nQixLQUFLaEIsS0FBTCxHQUFhLENBQXJCLEVBQXdCYyxPQUFPQSxLQUEvQixFQUFzQ0MsU0FBU0EsT0FBL0MsRUFBcEM7QUFDRCxLQUpELE1BSU87QUFDTG5CLGlCQUFXcUIsSUFBWCxDQUFnQixFQUFDakIsT0FBTyxDQUFSLEVBQVdjLE9BQU9BLEtBQWxCLEVBQXlCQyxTQUFTQSxPQUFsQyxFQUFoQjtBQUNEO0FBQ0YsR0F6SGM7QUFBQSxtREEwSGZqQixhQTFIZSx5QkEwSERLLFFBMUhDLEVBMEhTekIsU0ExSFQsRUEwSG9CRCxTQTFIcEIsRUEwSCtCeUIsWUExSC9CLEVBMEg2QztBQUMxRCxRQUFJYixTQUFTWCxVQUFVWSxNQUF2QjtBQUFBLFFBQ0lDLFNBQVNkLFVBQVVhLE1BRHZCO0FBQUEsUUFFSUssU0FBU1EsU0FBU1IsTUFGdEI7QUFBQSxRQUdJRSxTQUFTRixTQUFTTyxZQUh0QjtBQUFBLFFBS0lnQixjQUFjLENBTGxCO0FBTUEsV0FBT3ZCLFNBQVMsQ0FBVCxHQUFhTixNQUFiLElBQXVCUSxTQUFTLENBQVQsR0FBYU4sTUFBcEMsSUFBOEMsS0FBSzRCLE1BQUwsQ0FBWXpDLFVBQVVpQixTQUFTLENBQW5CLENBQVosRUFBbUNsQixVQUFVb0IsU0FBUyxDQUFuQixDQUFuQyxDQUFyRCxFQUFnSDtBQUM5R0Y7QUFDQUU7QUFDQXFCO0FBQ0Q7O0FBRUQsUUFBSUEsV0FBSixFQUFpQjtBQUNmZixlQUFTUCxVQUFULENBQW9CcUIsSUFBcEIsQ0FBeUIsRUFBQ2pCLE9BQU9rQixXQUFSLEVBQXpCO0FBQ0Q7O0FBRURmLGFBQVNSLE1BQVQsR0FBa0JBLE1BQWxCO0FBQ0EsV0FBT0UsTUFBUDtBQUNELEdBN0ljO0FBQUEsbURBK0lmc0IsTUEvSWUsa0JBK0lSQyxJQS9JUSxFQStJRkMsS0EvSUUsRUErSUs7QUFDbEIsV0FBT0QsU0FBU0MsS0FBVCxJQUNELEtBQUsxQyxPQUFMLENBQWEyQyxVQUFiLElBQTJCRixLQUFLRyxXQUFMLE9BQXVCRixNQUFNRSxXQUFOLEVBRHhEO0FBRUQsR0FsSmM7QUFBQSxtREFtSmZwQyxXQW5KZSx1QkFtSkhxQyxLQW5KRyxFQW1KSTtBQUNqQixRQUFJWCxNQUFNLEVBQVY7QUFDQSxTQUFLLElBQUlZLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsTUFBTWxDLE1BQTFCLEVBQWtDbUMsR0FBbEMsRUFBdUM7QUFDckMsVUFBSUQsTUFBTUMsQ0FBTixDQUFKLEVBQWM7QUFDWlosWUFBSUksSUFBSixDQUFTTyxNQUFNQyxDQUFOLENBQVQ7QUFDRDtBQUNGO0FBQ0QsV0FBT1osR0FBUDtBQUNELEdBM0pjO0FBQUEsbURBNEpmM0IsU0E1SmUscUJBNEpMSCxLQTVKSyxFQTRKRTtBQUNmLFdBQU9BLEtBQVA7QUFDRCxHQTlKYztBQUFBLG1EQStKZkssUUEvSmUsb0JBK0pOTCxLQS9KTSxFQStKQztBQUNkLFdBQU9BLE1BQU0yQyxLQUFOLENBQVksRUFBWixDQUFQO0FBQ0QsR0FqS2M7QUFBQSxtREFrS2YzQixJQWxLZSxnQkFrS1Y0QixLQWxLVSxFQWtLSDtBQUNWLFdBQU9BLE1BQU01QixJQUFOLENBQVcsRUFBWCxDQUFQO0FBQ0Q7QUFwS2MsQ0FBakI7O0FBdUtBLFNBQVNXLFdBQVQsQ0FBcUJsQyxJQUFyQixFQUEyQm9CLFVBQTNCLEVBQXVDbEIsU0FBdkMsRUFBa0RELFNBQWxELEVBQTZEa0MsZUFBN0QsRUFBOEU7QUFDNUUsTUFBSWlCLGVBQWUsQ0FBbkI7QUFBQSxNQUNJQyxlQUFlakMsV0FBV04sTUFEOUI7QUFBQSxNQUVJSyxTQUFTLENBRmI7QUFBQSxNQUdJRSxTQUFTLENBSGI7O0FBS0EsU0FBTytCLGVBQWVDLFlBQXRCLEVBQW9DRCxjQUFwQyxFQUFvRDtBQUNsRCxRQUFJRSxZQUFZbEMsV0FBV2dDLFlBQVgsQ0FBaEI7QUFDQSxRQUFJLENBQUNFLFVBQVVmLE9BQWYsRUFBd0I7QUFDdEIsVUFBSSxDQUFDZSxVQUFVaEIsS0FBWCxJQUFvQkgsZUFBeEIsRUFBeUM7QUFDdkMsWUFBSTVCLFFBQVFMLFVBQVVxRCxLQUFWLENBQWdCcEMsTUFBaEIsRUFBd0JBLFNBQVNtQyxVQUFVOUIsS0FBM0MsQ0FBWjtBQUNBakIsZ0JBQVFBLE1BQU1pRCxHQUFOLENBQVUsVUFBU2pELEtBQVQsRUFBZ0IwQyxDQUFoQixFQUFtQjtBQUNuQyxjQUFJUSxXQUFXeEQsVUFBVW9CLFNBQVM0QixDQUFuQixDQUFmO0FBQ0EsaUJBQU9RLFNBQVMzQyxNQUFULEdBQWtCUCxNQUFNTyxNQUF4QixHQUFpQzJDLFFBQWpDLEdBQTRDbEQsS0FBbkQ7QUFDRCxTQUhPLENBQVI7O0FBS0ErQyxrQkFBVS9DLEtBQVYsR0FBa0JQLEtBQUt1QixJQUFMLENBQVVoQixLQUFWLENBQWxCO0FBQ0QsT0FSRCxNQVFPO0FBQ0wrQyxrQkFBVS9DLEtBQVYsR0FBa0JQLEtBQUt1QixJQUFMLENBQVVyQixVQUFVcUQsS0FBVixDQUFnQnBDLE1BQWhCLEVBQXdCQSxTQUFTbUMsVUFBVTlCLEtBQTNDLENBQVYsQ0FBbEI7QUFDRDtBQUNETCxnQkFBVW1DLFVBQVU5QixLQUFwQjs7QUFFQTtBQUNBLFVBQUksQ0FBQzhCLFVBQVVoQixLQUFmLEVBQXNCO0FBQ3BCakIsa0JBQVVpQyxVQUFVOUIsS0FBcEI7QUFDRDtBQUNGLEtBbEJELE1Ba0JPO0FBQ0w4QixnQkFBVS9DLEtBQVYsR0FBa0JQLEtBQUt1QixJQUFMLENBQVV0QixVQUFVc0QsS0FBVixDQUFnQmxDLE1BQWhCLEVBQXdCQSxTQUFTaUMsVUFBVTlCLEtBQTNDLENBQVYsQ0FBbEI7QUFDQUgsZ0JBQVVpQyxVQUFVOUIsS0FBcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBSTRCLGdCQUFnQmhDLFdBQVdnQyxlQUFlLENBQTFCLEVBQTZCZCxLQUFqRCxFQUF3RDtBQUN0RCxZQUFJb0IsTUFBTXRDLFdBQVdnQyxlQUFlLENBQTFCLENBQVY7QUFDQWhDLG1CQUFXZ0MsZUFBZSxDQUExQixJQUErQmhDLFdBQVdnQyxZQUFYLENBQS9CO0FBQ0FoQyxtQkFBV2dDLFlBQVgsSUFBMkJNLEdBQTNCO0FBQ0Q7QUFDRjtBQUNGOztBQUVEO0FBQ0E7QUFDQSxNQUFJQyxnQkFBZ0J2QyxXQUFXaUMsZUFBZSxDQUExQixDQUFwQjtBQUNBLE1BQUlBLGVBQWUsQ0FBZixLQUNJTSxjQUFjckIsS0FBZCxJQUF1QnFCLGNBQWNwQixPQUR6QyxLQUVHdkMsS0FBSzJDLE1BQUwsQ0FBWSxFQUFaLEVBQWdCZ0IsY0FBY3BELEtBQTlCLENBRlAsRUFFNkM7QUFDM0NhLGVBQVdpQyxlQUFlLENBQTFCLEVBQTZCOUMsS0FBN0IsSUFBc0NvRCxjQUFjcEQsS0FBcEQ7QUFDQWEsZUFBV3dDLEdBQVg7QUFDRDs7QUFFRCxTQUFPeEMsVUFBUDtBQUNEOztBQUVELFNBQVNZLFNBQVQsQ0FBbUI2QixJQUFuQixFQUF5QjtBQUN2QixTQUFPLEVBQUUxQyxRQUFRMEMsS0FBSzFDLE1BQWYsRUFBdUJDLFlBQVl5QyxLQUFLekMsVUFBTCxDQUFnQm1DLEtBQWhCLENBQXNCLENBQXRCLENBQW5DLEVBQVA7QUFDRCIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlmZigpIHt9XG5cbkRpZmYucHJvdG90eXBlID0ge1xuICBkaWZmKG9sZFN0cmluZywgbmV3U3RyaW5nLCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZG9uZSh2YWx1ZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKHVuZGVmaW5lZCwgdmFsdWUpOyB9LCAwKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgc3ViY2xhc3NlcyB0byBtYXNzYWdlIHRoZSBpbnB1dCBwcmlvciB0byBydW5uaW5nXG4gICAgb2xkU3RyaW5nID0gdGhpcy5jYXN0SW5wdXQob2xkU3RyaW5nKTtcbiAgICBuZXdTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChuZXdTdHJpbmcpO1xuXG4gICAgb2xkU3RyaW5nID0gdGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKG9sZFN0cmluZykpO1xuICAgIG5ld1N0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShuZXdTdHJpbmcpKTtcblxuICAgIGxldCBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLCBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoO1xuICAgIGxldCBlZGl0TGVuZ3RoID0gMTtcbiAgICBsZXQgbWF4RWRpdExlbmd0aCA9IG5ld0xlbiArIG9sZExlbjtcbiAgICBsZXQgYmVzdFBhdGggPSBbeyBuZXdQb3M6IC0xLCBjb21wb25lbnRzOiBbXSB9XTtcblxuICAgIC8vIFNlZWQgZWRpdExlbmd0aCA9IDAsIGkuZS4gdGhlIGNvbnRlbnQgc3RhcnRzIHdpdGggdGhlIHNhbWUgdmFsdWVzXG4gICAgbGV0IG9sZFBvcyA9IHRoaXMuZXh0cmFjdENvbW1vbihiZXN0UGF0aFswXSwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIDApO1xuICAgIGlmIChiZXN0UGF0aFswXS5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgLy8gSWRlbnRpdHkgcGVyIHRoZSBlcXVhbGl0eSBhbmQgdG9rZW5pemVyXG4gICAgICByZXR1cm4gZG9uZShbe3ZhbHVlOiB0aGlzLmpvaW4obmV3U3RyaW5nKSwgY291bnQ6IG5ld1N0cmluZy5sZW5ndGh9XSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiB3b3JrZXIgbWV0aG9kLiBjaGVja3MgYWxsIHBlcm11dGF0aW9ucyBvZiBhIGdpdmVuIGVkaXQgbGVuZ3RoIGZvciBhY2NlcHRhbmNlLlxuICAgIGZ1bmN0aW9uIGV4ZWNFZGl0TGVuZ3RoKCkge1xuICAgICAgZm9yIChsZXQgZGlhZ29uYWxQYXRoID0gLTEgKiBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggPD0gZWRpdExlbmd0aDsgZGlhZ29uYWxQYXRoICs9IDIpIHtcbiAgICAgICAgbGV0IGJhc2VQYXRoO1xuICAgICAgICBsZXQgYWRkUGF0aCA9IGJlc3RQYXRoW2RpYWdvbmFsUGF0aCAtIDFdLFxuICAgICAgICAgICAgcmVtb3ZlUGF0aCA9IGJlc3RQYXRoW2RpYWdvbmFsUGF0aCArIDFdLFxuICAgICAgICAgICAgb2xkUG9zID0gKHJlbW92ZVBhdGggPyByZW1vdmVQYXRoLm5ld1BvcyA6IDApIC0gZGlhZ29uYWxQYXRoO1xuICAgICAgICBpZiAoYWRkUGF0aCkge1xuICAgICAgICAgIC8vIE5vIG9uZSBlbHNlIGlzIGdvaW5nIHRvIGF0dGVtcHQgdG8gdXNlIHRoaXMgdmFsdWUsIGNsZWFyIGl0XG4gICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2FuQWRkID0gYWRkUGF0aCAmJiBhZGRQYXRoLm5ld1BvcyArIDEgPCBuZXdMZW4sXG4gICAgICAgICAgICBjYW5SZW1vdmUgPSByZW1vdmVQYXRoICYmIDAgPD0gb2xkUG9zICYmIG9sZFBvcyA8IG9sZExlbjtcbiAgICAgICAgaWYgKCFjYW5BZGQgJiYgIWNhblJlbW92ZSkge1xuICAgICAgICAgIC8vIElmIHRoaXMgcGF0aCBpcyBhIHRlcm1pbmFsIHRoZW4gcHJ1bmVcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VsZWN0IHRoZSBkaWFnb25hbCB0aGF0IHdlIHdhbnQgdG8gYnJhbmNoIGZyb20uIFdlIHNlbGVjdCB0aGUgcHJpb3JcbiAgICAgICAgLy8gcGF0aCB3aG9zZSBwb3NpdGlvbiBpbiB0aGUgbmV3IHN0cmluZyBpcyB0aGUgZmFydGhlc3QgZnJvbSB0aGUgb3JpZ2luXG4gICAgICAgIC8vIGFuZCBkb2VzIG5vdCBwYXNzIHRoZSBib3VuZHMgb2YgdGhlIGRpZmYgZ3JhcGhcbiAgICAgICAgaWYgKCFjYW5BZGQgfHwgKGNhblJlbW92ZSAmJiBhZGRQYXRoLm5ld1BvcyA8IHJlbW92ZVBhdGgubmV3UG9zKSkge1xuICAgICAgICAgIGJhc2VQYXRoID0gY2xvbmVQYXRoKHJlbW92ZVBhdGgpO1xuICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJhc2VQYXRoID0gYWRkUGF0aDsgICAvLyBObyBuZWVkIHRvIGNsb25lLCB3ZSd2ZSBwdWxsZWQgaXQgZnJvbSB0aGUgbGlzdFxuICAgICAgICAgIGJhc2VQYXRoLm5ld1BvcysrO1xuICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB0cnVlLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2xkUG9zID0gc2VsZi5leHRyYWN0Q29tbW9uKGJhc2VQYXRoLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgZGlhZ29uYWxQYXRoKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGhpdCB0aGUgZW5kIG9mIGJvdGggc3RyaW5ncywgdGhlbiB3ZSBhcmUgZG9uZVxuICAgICAgICBpZiAoYmFzZVBhdGgubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgb2xkUG9zICsgMSA+PSBvbGRMZW4pIHtcbiAgICAgICAgICByZXR1cm4gZG9uZShidWlsZFZhbHVlcyhzZWxmLCBiYXNlUGF0aC5jb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgc2VsZi51c2VMb25nZXN0VG9rZW4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgdHJhY2sgdGhpcyBwYXRoIGFzIGEgcG90ZW50aWFsIGNhbmRpZGF0ZSBhbmQgY29udGludWUuXG4gICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoXSA9IGJhc2VQYXRoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVkaXRMZW5ndGgrKztcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtcyB0aGUgbGVuZ3RoIG9mIGVkaXQgaXRlcmF0aW9uLiBJcyBhIGJpdCBmdWdseSBhcyB0aGlzIGhhcyB0byBzdXBwb3J0IHRoZVxuICAgIC8vIHN5bmMgYW5kIGFzeW5jIG1vZGUgd2hpY2ggaXMgbmV2ZXIgZnVuLiBMb29wcyBvdmVyIGV4ZWNFZGl0TGVuZ3RoIHVudGlsIGEgdmFsdWVcbiAgICAvLyBpcyBwcm9kdWNlZC5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIChmdW5jdGlvbiBleGVjKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCB3ZSB3YW50IHRvIGJlIHNhZmUuXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICBpZiAoZWRpdExlbmd0aCA+IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZXhlY0VkaXRMZW5ndGgoKSkge1xuICAgICAgICAgICAgZXhlYygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgICB9KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoZWRpdExlbmd0aCA8PSBtYXhFZGl0TGVuZ3RoKSB7XG4gICAgICAgIGxldCByZXQgPSBleGVjRWRpdExlbmd0aCgpO1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBwdXNoQ29tcG9uZW50KGNvbXBvbmVudHMsIGFkZGVkLCByZW1vdmVkKSB7XG4gICAgbGV0IGxhc3QgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XG4gICAgaWYgKGxhc3QgJiYgbGFzdC5hZGRlZCA9PT0gYWRkZWQgJiYgbGFzdC5yZW1vdmVkID09PSByZW1vdmVkKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIGNsb25lIGhlcmUgYXMgdGhlIGNvbXBvbmVudCBjbG9uZSBvcGVyYXRpb24gaXMganVzdFxuICAgICAgLy8gYXMgc2hhbGxvdyBhcnJheSBjbG9uZVxuICAgICAgY29tcG9uZW50c1tjb21wb25lbnRzLmxlbmd0aCAtIDFdID0ge2NvdW50OiBsYXN0LmNvdW50ICsgMSwgYWRkZWQ6IGFkZGVkLCByZW1vdmVkOiByZW1vdmVkIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudHMucHVzaCh7Y291bnQ6IDEsIGFkZGVkOiBhZGRlZCwgcmVtb3ZlZDogcmVtb3ZlZCB9KTtcbiAgICB9XG4gIH0sXG4gIGV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpIHtcbiAgICBsZXQgbmV3TGVuID0gbmV3U3RyaW5nLmxlbmd0aCxcbiAgICAgICAgb2xkTGVuID0gb2xkU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgbmV3UG9zID0gYmFzZVBhdGgubmV3UG9zLFxuICAgICAgICBvbGRQb3MgPSBuZXdQb3MgLSBkaWFnb25hbFBhdGgsXG5cbiAgICAgICAgY29tbW9uQ291bnQgPSAwO1xuICAgIHdoaWxlIChuZXdQb3MgKyAxIDwgbmV3TGVuICYmIG9sZFBvcyArIDEgPCBvbGRMZW4gJiYgdGhpcy5lcXVhbHMobmV3U3RyaW5nW25ld1BvcyArIDFdLCBvbGRTdHJpbmdbb2xkUG9zICsgMV0pKSB7XG4gICAgICBuZXdQb3MrKztcbiAgICAgIG9sZFBvcysrO1xuICAgICAgY29tbW9uQ291bnQrKztcbiAgICB9XG5cbiAgICBpZiAoY29tbW9uQ291bnQpIHtcbiAgICAgIGJhc2VQYXRoLmNvbXBvbmVudHMucHVzaCh7Y291bnQ6IGNvbW1vbkNvdW50fSk7XG4gICAgfVxuXG4gICAgYmFzZVBhdGgubmV3UG9zID0gbmV3UG9zO1xuICAgIHJldHVybiBvbGRQb3M7XG4gIH0sXG5cbiAgZXF1YWxzKGxlZnQsIHJpZ2h0KSB7XG4gICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0XG4gICAgICB8fCAodGhpcy5vcHRpb25zLmlnbm9yZUNhc2UgJiYgbGVmdC50b0xvd2VyQ2FzZSgpID09PSByaWdodC50b0xvd2VyQ2FzZSgpKTtcbiAgfSxcbiAgcmVtb3ZlRW1wdHkoYXJyYXkpIHtcbiAgICBsZXQgcmV0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFycmF5W2ldKSB7XG4gICAgICAgIHJldC5wdXNoKGFycmF5W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgY2FzdElucHV0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICB0b2tlbml6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zcGxpdCgnJyk7XG4gIH0sXG4gIGpvaW4oY2hhcnMpIHtcbiAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGJ1aWxkVmFsdWVzKGRpZmYsIGNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCB1c2VMb25nZXN0VG9rZW4pIHtcbiAgbGV0IGNvbXBvbmVudFBvcyA9IDAsXG4gICAgICBjb21wb25lbnRMZW4gPSBjb21wb25lbnRzLmxlbmd0aCxcbiAgICAgIG5ld1BvcyA9IDAsXG4gICAgICBvbGRQb3MgPSAwO1xuXG4gIGZvciAoOyBjb21wb25lbnRQb3MgPCBjb21wb25lbnRMZW47IGNvbXBvbmVudFBvcysrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcbiAgICBpZiAoIWNvbXBvbmVudC5yZW1vdmVkKSB7XG4gICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCAmJiB1c2VMb25nZXN0VG9rZW4pIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24odmFsdWUsIGkpIHtcbiAgICAgICAgICBsZXQgb2xkVmFsdWUgPSBvbGRTdHJpbmdbb2xkUG9zICsgaV07XG4gICAgICAgICAgcmV0dXJuIG9sZFZhbHVlLmxlbmd0aCA+IHZhbHVlLmxlbmd0aCA/IG9sZFZhbHVlIDogdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbih2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4obmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KSk7XG4gICAgICB9XG4gICAgICBuZXdQb3MgKz0gY29tcG9uZW50LmNvdW50O1xuXG4gICAgICAvLyBDb21tb24gY2FzZVxuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQpIHtcbiAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG9sZFN0cmluZy5zbGljZShvbGRQb3MsIG9sZFBvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcblxuICAgICAgLy8gUmV2ZXJzZSBhZGQgYW5kIHJlbW92ZSBzbyByZW1vdmVzIGFyZSBvdXRwdXQgZmlyc3QgdG8gbWF0Y2ggY29tbW9uIGNvbnZlbnRpb25cbiAgICAgIC8vIFRoZSBkaWZmaW5nIGFsZ29yaXRobSBpcyB0aWVkIHRvIGFkZCB0aGVuIHJlbW92ZSBvdXRwdXQgYW5kIHRoaXMgaXMgdGhlIHNpbXBsZXN0XG4gICAgICAvLyByb3V0ZSB0byBnZXQgdGhlIGRlc2lyZWQgb3V0cHV0IHdpdGggbWluaW1hbCBvdmVyaGVhZC5cbiAgICAgIGlmIChjb21wb25lbnRQb3MgJiYgY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXS5hZGRlZCkge1xuICAgICAgICBsZXQgdG1wID0gY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXTtcbiAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXSA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcbiAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRQb3NdID0gdG1wO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNwZWNpYWwgY2FzZSBoYW5kbGUgZm9yIHdoZW4gb25lIHRlcm1pbmFsIGlzIGlnbm9yZWQuIEZvciB0aGlzIGNhc2Ugd2UgbWVyZ2UgdGhlXG4gIC8vIHRlcm1pbmFsIGludG8gdGhlIHByaW9yIHN0cmluZyBhbmQgZHJvcCB0aGUgY2hhbmdlLlxuICBsZXQgbGFzdENvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50TGVuIC0gMV07XG4gIGlmIChjb21wb25lbnRMZW4gPiAxXG4gICAgICAmJiAobGFzdENvbXBvbmVudC5hZGRlZCB8fCBsYXN0Q29tcG9uZW50LnJlbW92ZWQpXG4gICAgICAmJiBkaWZmLmVxdWFscygnJywgbGFzdENvbXBvbmVudC52YWx1ZSkpIHtcbiAgICBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDJdLnZhbHVlICs9IGxhc3RDb21wb25lbnQudmFsdWU7XG4gICAgY29tcG9uZW50cy5wb3AoKTtcbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuXG5mdW5jdGlvbiBjbG9uZVBhdGgocGF0aCkge1xuICByZXR1cm4geyBuZXdQb3M6IHBhdGgubmV3UG9zLCBjb21wb25lbnRzOiBwYXRoLmNvbXBvbmVudHMuc2xpY2UoMCkgfTtcbn1cbiJdfQ==
        /** */
      },
      /* 2 */
      /** */ function(module, exports, __webpack_require__) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.characterDiff = undefined;
        exports.diffChars = diffChars;

        var /* istanbul ignore start*/ _base = __webpack_require__(1) /* istanbul ignore end*/;

        /* istanbul ignore start*/ var _base2 = _interopRequireDefault(_base);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /* istanbul ignore end*/ var characterDiff /* istanbul ignore start*/ = (exports.characterDiff = new /* istanbul ignore start*/ _base2.default /* istanbul ignore end*/());
        function diffChars(oldStr, newStr, options) {
          return characterDiff.diff(oldStr, newStr, options);
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2NoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJkaWZmQ2hhcnMiLCJjaGFyYWN0ZXJEaWZmIiwib2xkU3RyIiwibmV3U3RyIiwib3B0aW9ucyIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7OztnQ0FHZ0JBLFMsR0FBQUEsUzs7QUFIaEI7Ozs7Ozt1QkFFTyxJQUFNQyx5RkFBZ0Isd0VBQXRCO0FBQ0EsU0FBU0QsU0FBVCxDQUFtQkUsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUFFLFNBQU9ILGNBQWNJLElBQWQsQ0FBbUJILE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ0MsT0FBbkMsQ0FBUDtBQUFxRCIsImZpbGUiOiJjaGFyYWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlmZiBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgY29uc3QgY2hhcmFjdGVyRGlmZiA9IG5ldyBEaWZmKCk7XG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoYXJzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7IHJldHVybiBjaGFyYWN0ZXJEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpOyB9XG4iXX0=
        /** */
      },
      /* 3 */
      /** */ function(module, exports, __webpack_require__) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.wordDiff = undefined;
        exports.diffWords = diffWords;
        /* istanbul ignore start*/ exports.diffWordsWithSpace = diffWordsWithSpace;

        var /* istanbul ignore start*/ _base = __webpack_require__(1) /* istanbul ignore end*/;

        /* istanbul ignore start*/ var _base2 = _interopRequireDefault(_base);

        /* istanbul ignore end*/ var /* istanbul ignore start*/ _params = __webpack_require__(
          4
        ) /* istanbul ignore end*/;

        /* istanbul ignore start*/ function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        } // Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode //

        /* istanbul ignore end*/ // Ranges and exceptions:
        // Latin-1 Supplement, 0080–00FF
        //  - U+00D7  × Multiplication sign
        //  - U+00F7  ÷ Division sign
        // Latin Extended-A, 0100–017F
        // Latin Extended-B, 0180–024F
        // IPA Extensions, 0250–02AF
        // Spacing Modifier Letters, 02B0–02FF
        //  - U+02C7  ˇ &#711;  Caron
        //  - U+02D8  ˘ &#728;  Breve
        //  - U+02D9  ˙ &#729;  Dot Above
        //  - U+02DA  ˚ &#730;  Ring Above
        //  - U+02DB  ˛ &#731;  Ogonek
        //  - U+02DC  ˜ &#732;  Small Tilde
        //  - U+02DD  ˝ &#733;  Double Acute Accent
        // Latin Extended Additional, 1E00–1EFF
        var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;

        var reWhitespace = /\S/;

        var wordDiff /* istanbul ignore start*/ = (exports.wordDiff = new /* istanbul ignore start*/ _base2.default /* istanbul ignore end*/());
        wordDiff.equals = function(left, right) {
          if (this.options.ignoreCase) {
            left = left.toLowerCase();
            right = right.toLowerCase();
          }
          return (
            left === right ||
            (this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right))
          );
        };
        wordDiff.tokenize = function(value) {
          var tokens = value.split(/(\s+|\b)/);

          // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.
          for (var i = 0; i < tokens.length - 1; i++) {
            // If we have an empty string in the next field and we have only word chars before and after, merge
            if (
              !tokens[i + 1] &&
              tokens[i + 2] &&
              extendedWordChars.test(tokens[i]) &&
              extendedWordChars.test(tokens[i + 2])
            ) {
              tokens[i] += tokens[i + 2];
              tokens.splice(i + 1, 2);
              i--;
            }
          }

          return tokens;
        };

        function diffWords(oldStr, newStr, options) {
          options = /* istanbul ignore start*/ (
            0,
            _params.generateOptions
          ) /* istanbul ignore end*/(options, { ignoreWhitespace: true });
          return wordDiff.diff(oldStr, newStr, options);
        }

        function diffWordsWithSpace(oldStr, newStr, options) {
          return wordDiff.diff(oldStr, newStr, options);
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3dvcmQuanMiXSwibmFtZXMiOlsiZGlmZldvcmRzIiwiZGlmZldvcmRzV2l0aFNwYWNlIiwiZXh0ZW5kZWRXb3JkQ2hhcnMiLCJyZVdoaXRlc3BhY2UiLCJ3b3JkRGlmZiIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsIm9wdGlvbnMiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJpZ25vcmVXaGl0ZXNwYWNlIiwidGVzdCIsInRva2VuaXplIiwidmFsdWUiLCJ0b2tlbnMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJvbGRTdHIiLCJuZXdTdHIiLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Z0NBbURnQkEsUyxHQUFBQSxTO3lEQUtBQyxrQixHQUFBQSxrQjs7QUF4RGhCOzs7O3VCQUNBOzs7O3dCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLG9CQUFvQiwrREFBMUI7O0FBRUEsSUFBTUMsZUFBZSxJQUFyQjs7QUFFTyxJQUFNQywrRUFBVyx3RUFBakI7QUFDUEEsU0FBU0MsTUFBVCxHQUFrQixVQUFTQyxJQUFULEVBQWVDLEtBQWYsRUFBc0I7QUFDdEMsTUFBSSxLQUFLQyxPQUFMLENBQWFDLFVBQWpCLEVBQTZCO0FBQzNCSCxXQUFPQSxLQUFLSSxXQUFMLEVBQVA7QUFDQUgsWUFBUUEsTUFBTUcsV0FBTixFQUFSO0FBQ0Q7QUFDRCxTQUFPSixTQUFTQyxLQUFULElBQW1CLEtBQUtDLE9BQUwsQ0FBYUcsZ0JBQWIsSUFBaUMsQ0FBQ1IsYUFBYVMsSUFBYixDQUFrQk4sSUFBbEIsQ0FBbEMsSUFBNkQsQ0FBQ0gsYUFBYVMsSUFBYixDQUFrQkwsS0FBbEIsQ0FBeEY7QUFDRCxDQU5EO0FBT0FILFNBQVNTLFFBQVQsR0FBb0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNsQyxNQUFJQyxTQUFTRCxNQUFNRSxLQUFOLENBQVksVUFBWixDQUFiOztBQUVBO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE9BQU9HLE1BQVAsR0FBZ0IsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDO0FBQ0EsUUFBSSxDQUFDRixPQUFPRSxJQUFJLENBQVgsQ0FBRCxJQUFrQkYsT0FBT0UsSUFBSSxDQUFYLENBQWxCLElBQ0tmLGtCQUFrQlUsSUFBbEIsQ0FBdUJHLE9BQU9FLENBQVAsQ0FBdkIsQ0FETCxJQUVLZixrQkFBa0JVLElBQWxCLENBQXVCRyxPQUFPRSxJQUFJLENBQVgsQ0FBdkIsQ0FGVCxFQUVnRDtBQUM5Q0YsYUFBT0UsQ0FBUCxLQUFhRixPQUFPRSxJQUFJLENBQVgsQ0FBYjtBQUNBRixhQUFPSSxNQUFQLENBQWNGLElBQUksQ0FBbEIsRUFBcUIsQ0FBckI7QUFDQUE7QUFDRDtBQUNGOztBQUVELFNBQU9GLE1BQVA7QUFDRCxDQWhCRDs7QUFrQk8sU0FBU2YsU0FBVCxDQUFtQm9CLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ2IsT0FBbkMsRUFBNEM7QUFDakRBLFlBQVUsOEVBQWdCQSxPQUFoQixFQUF5QixFQUFDRyxrQkFBa0IsSUFBbkIsRUFBekIsQ0FBVjtBQUNBLFNBQU9QLFNBQVNrQixJQUFULENBQWNGLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCYixPQUE5QixDQUFQO0FBQ0Q7O0FBRU0sU0FBU1Asa0JBQVQsQ0FBNEJtQixNQUE1QixFQUFvQ0MsTUFBcEMsRUFBNENiLE9BQTVDLEVBQXFEO0FBQzFELFNBQU9KLFNBQVNrQixJQUFULENBQWNGLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCYixPQUE5QixDQUFQO0FBQ0QiLCJmaWxlIjoid29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2dlbmVyYXRlT3B0aW9uc30gZnJvbSAnLi4vdXRpbC9wYXJhbXMnO1xuXG4vLyBCYXNlZCBvbiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbl9zY3JpcHRfaW5fVW5pY29kZVxuLy9cbi8vIFJhbmdlcyBhbmQgZXhjZXB0aW9uczpcbi8vIExhdGluLTEgU3VwcGxlbWVudCwgMDA4MOKAkzAwRkZcbi8vICAtIFUrMDBENyAgw5cgTXVsdGlwbGljYXRpb24gc2lnblxuLy8gIC0gVSswMEY3ICDDtyBEaXZpc2lvbiBzaWduXG4vLyBMYXRpbiBFeHRlbmRlZC1BLCAwMTAw4oCTMDE3RlxuLy8gTGF0aW4gRXh0ZW5kZWQtQiwgMDE4MOKAkzAyNEZcbi8vIElQQSBFeHRlbnNpb25zLCAwMjUw4oCTMDJBRlxuLy8gU3BhY2luZyBNb2RpZmllciBMZXR0ZXJzLCAwMkIw4oCTMDJGRlxuLy8gIC0gVSswMkM3ICDLhyAmIzcxMTsgIENhcm9uXG4vLyAgLSBVKzAyRDggIMuYICYjNzI4OyAgQnJldmVcbi8vICAtIFUrMDJEOSAgy5kgJiM3Mjk7ICBEb3QgQWJvdmVcbi8vICAtIFUrMDJEQSAgy5ogJiM3MzA7ICBSaW5nIEFib3ZlXG4vLyAgLSBVKzAyREIgIMubICYjNzMxOyAgT2dvbmVrXG4vLyAgLSBVKzAyREMgIMucICYjNzMyOyAgU21hbGwgVGlsZGVcbi8vICAtIFUrMDJERCAgy50gJiM3MzM7ICBEb3VibGUgQWN1dGUgQWNjZW50XG4vLyBMYXRpbiBFeHRlbmRlZCBBZGRpdGlvbmFsLCAxRTAw4oCTMUVGRlxuY29uc3QgZXh0ZW5kZWRXb3JkQ2hhcnMgPSAvXlthLXpBLVpcXHV7QzB9LVxcdXtGRn1cXHV7RDh9LVxcdXtGNn1cXHV7Rjh9LVxcdXsyQzZ9XFx1ezJDOH0tXFx1ezJEN31cXHV7MkRFfS1cXHV7MkZGfVxcdXsxRTAwfS1cXHV7MUVGRn1dKyQvdTtcblxuY29uc3QgcmVXaGl0ZXNwYWNlID0gL1xcUy87XG5cbmV4cG9ydCBjb25zdCB3b3JkRGlmZiA9IG5ldyBEaWZmKCk7XG53b3JkRGlmZi5lcXVhbHMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZUNhc2UpIHtcbiAgICBsZWZ0ID0gbGVmdC50b0xvd2VyQ2FzZSgpO1xuICAgIHJpZ2h0ID0gcmlnaHQudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gbGVmdCA9PT0gcmlnaHQgfHwgKHRoaXMub3B0aW9ucy5pZ25vcmVXaGl0ZXNwYWNlICYmICFyZVdoaXRlc3BhY2UudGVzdChsZWZ0KSAmJiAhcmVXaGl0ZXNwYWNlLnRlc3QocmlnaHQpKTtcbn07XG53b3JkRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGxldCB0b2tlbnMgPSB2YWx1ZS5zcGxpdCgvKFxccyt8XFxiKS8pO1xuXG4gIC8vIEpvaW4gdGhlIGJvdW5kYXJ5IHNwbGl0cyB0aGF0IHdlIGRvIG5vdCBjb25zaWRlciB0byBiZSBib3VuZGFyaWVzLiBUaGlzIGlzIHByaW1hcmlseSB0aGUgZXh0ZW5kZWQgTGF0aW4gY2hhcmFjdGVyIHNldC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhbiBlbXB0eSBzdHJpbmcgaW4gdGhlIG5leHQgZmllbGQgYW5kIHdlIGhhdmUgb25seSB3b3JkIGNoYXJzIGJlZm9yZSBhbmQgYWZ0ZXIsIG1lcmdlXG4gICAgaWYgKCF0b2tlbnNbaSArIDFdICYmIHRva2Vuc1tpICsgMl1cbiAgICAgICAgICAmJiBleHRlbmRlZFdvcmRDaGFycy50ZXN0KHRva2Vuc1tpXSlcbiAgICAgICAgICAmJiBleHRlbmRlZFdvcmRDaGFycy50ZXN0KHRva2Vuc1tpICsgMl0pKSB7XG4gICAgICB0b2tlbnNbaV0gKz0gdG9rZW5zW2kgKyAyXTtcbiAgICAgIHRva2Vucy5zcGxpY2UoaSArIDEsIDIpO1xuICAgICAgaS0tO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZldvcmRzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywge2lnbm9yZVdoaXRlc3BhY2U6IHRydWV9KTtcbiAgcmV0dXJuIHdvcmREaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlmZldvcmRzV2l0aFNwYWNlKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cbiJdfQ==
        /** */
      },
      /* 4 */
      /** */ function(module, exports) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.generateOptions = generateOptions;
        function generateOptions(options, defaults) {
          if (typeof options === "function") {
            defaults.callback = options;
          } else if (options) {
            for (var name in options) {
              /* istanbul ignore else */
              if (options.hasOwnProperty(name)) {
                defaults[name] = options[name];
              }
            }
          }
          return defaults;
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3BhcmFtcy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZU9wdGlvbnMiLCJvcHRpb25zIiwiZGVmYXVsdHMiLCJjYWxsYmFjayIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Z0NBQWdCQSxlLEdBQUFBLGU7QUFBVCxTQUFTQSxlQUFULENBQXlCQyxPQUF6QixFQUFrQ0MsUUFBbEMsRUFBNEM7QUFDakQsTUFBSSxPQUFPRCxPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2pDQyxhQUFTQyxRQUFULEdBQW9CRixPQUFwQjtBQUNELEdBRkQsTUFFTyxJQUFJQSxPQUFKLEVBQWE7QUFDbEIsU0FBSyxJQUFJRyxJQUFULElBQWlCSCxPQUFqQixFQUEwQjtBQUN4QjtBQUNBLFVBQUlBLFFBQVFJLGNBQVIsQ0FBdUJELElBQXZCLENBQUosRUFBa0M7QUFDaENGLGlCQUFTRSxJQUFULElBQWlCSCxRQUFRRyxJQUFSLENBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsU0FBT0YsUUFBUDtBQUNEIiwiZmlsZSI6InBhcmFtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywgZGVmYXVsdHMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZGVmYXVsdHMuY2FsbGJhY2sgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcbiAgICBmb3IgKGxldCBuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBkZWZhdWx0c1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWZhdWx0cztcbn1cbiJdfQ==
        /** */
      },
      /* 5 */
      /** */ function(module, exports, __webpack_require__) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.lineDiff = undefined;
        exports.diffLines = diffLines;
        /* istanbul ignore start*/ exports.diffTrimmedLines = diffTrimmedLines;

        var /* istanbul ignore start*/ _base = __webpack_require__(1) /* istanbul ignore end*/;

        /* istanbul ignore start*/ var _base2 = _interopRequireDefault(_base);

        /* istanbul ignore end*/ var /* istanbul ignore start*/ _params = __webpack_require__(
          4
        ) /* istanbul ignore end*/;

        /* istanbul ignore start*/ function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /* istanbul ignore end*/ var lineDiff /* istanbul ignore start*/ = (exports.lineDiff = new /* istanbul ignore start*/ _base2.default /* istanbul ignore end*/());
        lineDiff.tokenize = function(value) {
          var retLines = [],
            linesAndNewlines = value.split(/(\n|\r\n)/);

          // Ignore the final empty token that occurs if the string ends with a new line
          if (!linesAndNewlines[linesAndNewlines.length - 1]) {
            linesAndNewlines.pop();
          }

          // Merge the content and line separators into single tokens
          for (var i = 0; i < linesAndNewlines.length; i++) {
            var line = linesAndNewlines[i];

            if (i % 2 && !this.options.newlineIsToken) {
              retLines[retLines.length - 1] += line;
            } else {
              if (this.options.ignoreWhitespace) {
                line = line.trim();
              }
              retLines.push(line);
            }
          }

          return retLines;
        };

        function diffLines(oldStr, newStr, callback) {
          return lineDiff.diff(oldStr, newStr, callback);
        }
        function diffTrimmedLines(oldStr, newStr, callback) {
          var options = /* istanbul ignore start*/ (
            0,
            _params.generateOptions
          ) /* istanbul ignore end*/(callback, { ignoreWhitespace: true });
          return lineDiff.diff(oldStr, newStr, options);
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2xpbmUuanMiXSwibmFtZXMiOlsiZGlmZkxpbmVzIiwiZGlmZlRyaW1tZWRMaW5lcyIsImxpbmVEaWZmIiwidG9rZW5pemUiLCJ2YWx1ZSIsInJldExpbmVzIiwibGluZXNBbmROZXdsaW5lcyIsInNwbGl0IiwibGVuZ3RoIiwicG9wIiwiaSIsImxpbmUiLCJvcHRpb25zIiwibmV3bGluZUlzVG9rZW4iLCJpZ25vcmVXaGl0ZXNwYWNlIiwidHJpbSIsInB1c2giLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7OztnQ0E4QmdCQSxTLEdBQUFBLFM7eURBQ0FDLGdCLEdBQUFBLGdCOztBQS9CaEI7Ozs7dUJBQ0E7Ozs7dUJBRU8sSUFBTUMsK0VBQVcsd0VBQWpCO0FBQ1BBLFNBQVNDLFFBQVQsR0FBb0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNsQyxNQUFJQyxXQUFXLEVBQWY7QUFBQSxNQUNJQyxtQkFBbUJGLE1BQU1HLEtBQU4sQ0FBWSxXQUFaLENBRHZCOztBQUdBO0FBQ0EsTUFBSSxDQUFDRCxpQkFBaUJBLGlCQUFpQkUsTUFBakIsR0FBMEIsQ0FBM0MsQ0FBTCxFQUFvRDtBQUNsREYscUJBQWlCRyxHQUFqQjtBQUNEOztBQUVEO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlKLGlCQUFpQkUsTUFBckMsRUFBNkNFLEdBQTdDLEVBQWtEO0FBQ2hELFFBQUlDLE9BQU9MLGlCQUFpQkksQ0FBakIsQ0FBWDs7QUFFQSxRQUFJQSxJQUFJLENBQUosSUFBUyxDQUFDLEtBQUtFLE9BQUwsQ0FBYUMsY0FBM0IsRUFBMkM7QUFDekNSLGVBQVNBLFNBQVNHLE1BQVQsR0FBa0IsQ0FBM0IsS0FBaUNHLElBQWpDO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSSxLQUFLQyxPQUFMLENBQWFFLGdCQUFqQixFQUFtQztBQUNqQ0gsZUFBT0EsS0FBS0ksSUFBTCxFQUFQO0FBQ0Q7QUFDRFYsZUFBU1csSUFBVCxDQUFjTCxJQUFkO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPTixRQUFQO0FBQ0QsQ0F4QkQ7O0FBMEJPLFNBQVNMLFNBQVQsQ0FBbUJpQixNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNDLFFBQW5DLEVBQTZDO0FBQUUsU0FBT2pCLFNBQVNrQixJQUFULENBQWNILE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCQyxRQUE5QixDQUFQO0FBQWlEO0FBQ2hHLFNBQVNsQixnQkFBVCxDQUEwQmdCLE1BQTFCLEVBQWtDQyxNQUFsQyxFQUEwQ0MsUUFBMUMsRUFBb0Q7QUFDekQsTUFBSVAsVUFBVSw4RUFBZ0JPLFFBQWhCLEVBQTBCLEVBQUNMLGtCQUFrQixJQUFuQixFQUExQixDQUFkO0FBQ0EsU0FBT1osU0FBU2tCLElBQVQsQ0FBY0gsTUFBZCxFQUFzQkMsTUFBdEIsRUFBOEJOLE9BQTlCLENBQVA7QUFDRCIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Z2VuZXJhdGVPcHRpb25zfSBmcm9tICcuLi91dGlsL3BhcmFtcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5lRGlmZiA9IG5ldyBEaWZmKCk7XG5saW5lRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGxldCByZXRMaW5lcyA9IFtdLFxuICAgICAgbGluZXNBbmROZXdsaW5lcyA9IHZhbHVlLnNwbGl0KC8oXFxufFxcclxcbikvKTtcblxuICAvLyBJZ25vcmUgdGhlIGZpbmFsIGVtcHR5IHRva2VuIHRoYXQgb2NjdXJzIGlmIHRoZSBzdHJpbmcgZW5kcyB3aXRoIGEgbmV3IGxpbmVcbiAgaWYgKCFsaW5lc0FuZE5ld2xpbmVzW2xpbmVzQW5kTmV3bGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICBsaW5lc0FuZE5ld2xpbmVzLnBvcCgpO1xuICB9XG5cbiAgLy8gTWVyZ2UgdGhlIGNvbnRlbnQgYW5kIGxpbmUgc2VwYXJhdG9ycyBpbnRvIHNpbmdsZSB0b2tlbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGxpbmUgPSBsaW5lc0FuZE5ld2xpbmVzW2ldO1xuXG4gICAgaWYgKGkgJSAyICYmICF0aGlzLm9wdGlvbnMubmV3bGluZUlzVG9rZW4pIHtcbiAgICAgIHJldExpbmVzW3JldExpbmVzLmxlbmd0aCAtIDFdICs9IGxpbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSkge1xuICAgICAgICBsaW5lID0gbGluZS50cmltKCk7XG4gICAgICB9XG4gICAgICByZXRMaW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRMaW5lcztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmVHJpbW1lZExpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICBsZXQgb3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucyhjYWxsYmFjaywge2lnbm9yZVdoaXRlc3BhY2U6IHRydWV9KTtcbiAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xufVxuIl19
        /** */
      },
      /* 6 */
      /** */ function(module, exports, __webpack_require__) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.sentenceDiff = undefined;
        exports.diffSentences = diffSentences;

        var /* istanbul ignore start*/ _base = __webpack_require__(1) /* istanbul ignore end*/;

        /* istanbul ignore start*/ var _base2 = _interopRequireDefault(_base);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /* istanbul ignore end*/ var sentenceDiff /* istanbul ignore start*/ = (exports.sentenceDiff = new /* istanbul ignore start*/ _base2.default /* istanbul ignore end*/());
        sentenceDiff.tokenize = function(value) {
          return value.split(/(\S.+?[.!?])(?=\s+|$)/);
        };

        function diffSentences(oldStr, newStr, callback) {
          return sentenceDiff.diff(oldStr, newStr, callback);
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3NlbnRlbmNlLmpzIl0sIm5hbWVzIjpbImRpZmZTZW50ZW5jZXMiLCJzZW50ZW5jZURpZmYiLCJ0b2tlbml6ZSIsInZhbHVlIiwic3BsaXQiLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7OztnQ0FRZ0JBLGEsR0FBQUEsYTs7QUFSaEI7Ozs7Ozt1QkFHTyxJQUFNQyx1RkFBZSx3RUFBckI7QUFDUEEsYUFBYUMsUUFBYixHQUF3QixVQUFTQyxLQUFULEVBQWdCO0FBQ3RDLFNBQU9BLE1BQU1DLEtBQU4sQ0FBWSx1QkFBWixDQUFQO0FBQ0QsQ0FGRDs7QUFJTyxTQUFTSixhQUFULENBQXVCSyxNQUF2QixFQUErQkMsTUFBL0IsRUFBdUNDLFFBQXZDLEVBQWlEO0FBQUUsU0FBT04sYUFBYU8sSUFBYixDQUFrQkgsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDQyxRQUFsQyxDQUFQO0FBQXFEIiwiZmlsZSI6InNlbnRlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuXG5leHBvcnQgY29uc3Qgc2VudGVuY2VEaWZmID0gbmV3IERpZmYoKTtcbnNlbnRlbmNlRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgvKFxcUy4rP1suIT9dKSg/PVxccyt8JCkvKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmU2VudGVuY2VzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykgeyByZXR1cm4gc2VudGVuY2VEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTsgfVxuIl19
        /** */
      },
      /* 7 */
      /** */ function(module, exports, __webpack_require__) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.cssDiff = undefined;
        exports.diffCss = diffCss;

        var /* istanbul ignore start*/ _base = __webpack_require__(1) /* istanbul ignore end*/;

        /* istanbul ignore start*/ var _base2 = _interopRequireDefault(_base);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /* istanbul ignore end*/ var cssDiff /* istanbul ignore start*/ = (exports.cssDiff = new /* istanbul ignore start*/ _base2.default /* istanbul ignore end*/());
        cssDiff.tokenize = function(value) {
          return value.split(/([{}:;,]|\s+)/);
        };

        function diffCss(oldStr, newStr, callback) {
          return cssDiff.diff(oldStr, newStr, callback);
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Nzcy5qcyJdLCJuYW1lcyI6WyJkaWZmQ3NzIiwiY3NzRGlmZiIsInRva2VuaXplIiwidmFsdWUiLCJzcGxpdCIsIm9sZFN0ciIsIm5ld1N0ciIsImNhbGxiYWNrIiwiZGlmZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2dDQU9nQkEsTyxHQUFBQSxPOztBQVBoQjs7Ozs7O3VCQUVPLElBQU1DLDZFQUFVLHdFQUFoQjtBQUNQQSxRQUFRQyxRQUFSLEdBQW1CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDakMsU0FBT0EsTUFBTUMsS0FBTixDQUFZLGVBQVosQ0FBUDtBQUNELENBRkQ7O0FBSU8sU0FBU0osT0FBVCxDQUFpQkssTUFBakIsRUFBeUJDLE1BQXpCLEVBQWlDQyxRQUFqQyxFQUEyQztBQUFFLFNBQU9OLFFBQVFPLElBQVIsQ0FBYUgsTUFBYixFQUFxQkMsTUFBckIsRUFBNkJDLFFBQTdCLENBQVA7QUFBZ0QiLCJmaWxlIjoiY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNvbnN0IGNzc0RpZmYgPSBuZXcgRGlmZigpO1xuY3NzRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgvKFt7fTo7LF18XFxzKykvKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmQ3NzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykgeyByZXR1cm4gY3NzRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbiJdfQ==
        /** */
      },
      /* 8 */
      /** */ function(module, exports, __webpack_require__) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.jsonDiff = undefined;

        var _typeof =
          typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };

        exports.diffJson = diffJson;
        /* istanbul ignore start*/ exports.canonicalize = canonicalize;

        var /* istanbul ignore start*/ _base = __webpack_require__(1) /* istanbul ignore end*/;

        /* istanbul ignore start*/ var _base2 = _interopRequireDefault(_base);

        /* istanbul ignore end*/ var /* istanbul ignore start*/ _line = __webpack_require__(
          5
        ) /* istanbul ignore end*/;

        /* istanbul ignore start*/ function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /* istanbul ignore end*/ var objectPrototypeToString = Object.prototype.toString;

        var jsonDiff /* istanbul ignore start*/ = (exports.jsonDiff = new /* istanbul ignore start*/ _base2.default /* istanbul ignore end*/());
        // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
        // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:
        jsonDiff.useLongestToken = true;

        jsonDiff.tokenize = /* istanbul ignore start*/ _line.lineDiff.tokenize;
        jsonDiff.castInput = function(value) {
          /* istanbul ignore start*/ var /* istanbul ignore end*/ undefinedReplacement = this
            .options.undefinedReplacement;

          return typeof value === "string"
            ? value
            : JSON.stringify(
                canonicalize(value),
                function(k, v) {
                  if (typeof v === "undefined") {
                    return undefinedReplacement;
                  }

                  return v;
                },
                "  "
              );
        };
        jsonDiff.equals = function(left, right) {
          return /* istanbul ignore start*/ _base2.default.prototype.equals.call(
            jsonDiff,
            left.replace(/,([\r\n])/g, "$1"),
            right.replace(/,([\r\n])/g, "$1")
          );
        };

        function diffJson(oldObj, newObj, options) {
          return jsonDiff.diff(oldObj, newObj, options);
        }

        // This function handles the presence of circular references by bailing out when encountering an
        // object that is already on the "stack" of items being processed.
        function canonicalize(obj, stack, replacementStack) {
          stack = stack || [];
          replacementStack = replacementStack || [];

          var i = /* istanbul ignore start*/ void 0 /* istanbul ignore end*/;

          for (i = 0; i < stack.length; i += 1) {
            if (stack[i] === obj) {
              return replacementStack[i];
            }
          }

          var canonicalizedObj = /* istanbul ignore start*/ void 0 /* istanbul ignore end*/;

          if (objectPrototypeToString.call(obj) === "[object Array]") {
            stack.push(obj);
            canonicalizedObj = new Array(obj.length);
            replacementStack.push(canonicalizedObj);
            for (i = 0; i < obj.length; i += 1) {
              canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack);
            }
            stack.pop();
            replacementStack.pop();
            return canonicalizedObj;
          }

          if (obj && obj.toJSON) {
            obj = obj.toJSON();
          }

          if (
            /* istanbul ignore start*/ (typeof /* istanbul ignore end*/ obj === "undefined"
              ? "undefined"
              : _typeof(obj)) === "object" &&
            obj !== null
          ) {
            stack.push(obj);
            canonicalizedObj = {};
            replacementStack.push(canonicalizedObj);
            var sortedKeys = [],
              key = /* istanbul ignore start*/ void 0 /* istanbul ignore end*/;
            for (key in obj) {
              /* istanbul ignore else */
              if (obj.hasOwnProperty(key)) {
                sortedKeys.push(key);
              }
            }
            sortedKeys.sort();
            for (i = 0; i < sortedKeys.length; i += 1) {
              key = sortedKeys[i];
              canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack);
            }
            stack.pop();
            replacementStack.pop();
          } else {
            canonicalizedObj = obj;
          }
          return canonicalizedObj;
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2pzb24uanMiXSwibmFtZXMiOlsiZGlmZkpzb24iLCJjYW5vbmljYWxpemUiLCJvYmplY3RQcm90b3R5cGVUb1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwianNvbkRpZmYiLCJ1c2VMb25nZXN0VG9rZW4iLCJ0b2tlbml6ZSIsImNhc3RJbnB1dCIsInZhbHVlIiwidW5kZWZpbmVkUmVwbGFjZW1lbnQiLCJvcHRpb25zIiwiSlNPTiIsInN0cmluZ2lmeSIsImsiLCJ2IiwiZXF1YWxzIiwibGVmdCIsInJpZ2h0IiwiY2FsbCIsInJlcGxhY2UiLCJvbGRPYmoiLCJuZXdPYmoiLCJkaWZmIiwib2JqIiwic3RhY2siLCJyZXBsYWNlbWVudFN0YWNrIiwiaSIsImxlbmd0aCIsImNhbm9uaWNhbGl6ZWRPYmoiLCJwdXNoIiwiQXJyYXkiLCJwb3AiLCJ0b0pTT04iLCJzb3J0ZWRLZXlzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJzb3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Z0NBMkJnQkEsUSxHQUFBQSxRO3lEQUlBQyxZLEdBQUFBLFk7O0FBL0JoQjs7Ozt1QkFDQTs7Ozt1QkFFQSxJQUFNQywwQkFBMEJDLE9BQU9DLFNBQVAsQ0FBaUJDLFFBQWpEOztBQUdPLElBQU1DLCtFQUFXLHdFQUFqQjtBQUNQO0FBQ0E7QUFDQUEsU0FBU0MsZUFBVCxHQUEyQixJQUEzQjs7QUFFQUQsU0FBU0UsUUFBVCxHQUFvQixnRUFBU0EsUUFBN0I7QUFDQUYsU0FBU0csU0FBVCxHQUFxQixVQUFTQyxLQUFULEVBQWdCO0FBQUEsc0RBQzVCQyxvQkFENEIsR0FDSixLQUFLQyxPQURELENBQzVCRCxvQkFENEI7OztBQUduQyxTQUFPLE9BQU9ELEtBQVAsS0FBaUIsUUFBakIsR0FBNEJBLEtBQTVCLEdBQW9DRyxLQUFLQyxTQUFMLENBQWViLGFBQWFTLEtBQWIsQ0FBZixFQUFvQyxVQUFTSyxDQUFULEVBQVlDLENBQVosRUFB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O0FBQ0QsR0FuQkQsTUFtQk87QUFDTEgsdUJBQW1CTCxHQUFuQjtBQUNEO0FBQ0QsU0FBT0ssZ0JBQVA7QUFDRCIsImZpbGUiOiJqc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7bGluZURpZmZ9IGZyb20gJy4vbGluZSc7XG5cbmNvbnN0IG9iamVjdFByb3RvdHlwZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuXG5leHBvcnQgY29uc3QganNvbkRpZmYgPSBuZXcgRGlmZigpO1xuLy8gRGlzY3JpbWluYXRlIGJldHdlZW4gdHdvIGxpbmVzIG9mIHByZXR0eS1wcmludGVkLCBzZXJpYWxpemVkIEpTT04gd2hlcmUgb25lIG9mIHRoZW0gaGFzIGFcbi8vIGRhbmdsaW5nIGNvbW1hIGFuZCB0aGUgb3RoZXIgZG9lc24ndC4gVHVybnMgb3V0IGluY2x1ZGluZyB0aGUgZGFuZ2xpbmcgY29tbWEgeWllbGRzIHRoZSBuaWNlc3Qgb3V0cHV0OlxuanNvbkRpZmYudXNlTG9uZ2VzdFRva2VuID0gdHJ1ZTtcblxuanNvbkRpZmYudG9rZW5pemUgPSBsaW5lRGlmZi50b2tlbml6ZTtcbmpzb25EaWZmLmNhc3RJbnB1dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGNvbnN0IHt1bmRlZmluZWRSZXBsYWNlbWVudH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KGNhbm9uaWNhbGl6ZSh2YWx1ZSksIGZ1bmN0aW9uKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkUmVwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH0sICcgICcpO1xufTtcbmpzb25EaWZmLmVxdWFscyA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gIHJldHVybiBEaWZmLnByb3RvdHlwZS5lcXVhbHMuY2FsbChqc29uRGlmZiwgbGVmdC5yZXBsYWNlKC8sKFtcXHJcXG5dKS9nLCAnJDEnKSwgcmlnaHQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJykpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZKc29uKG9sZE9iaiwgbmV3T2JqLCBvcHRpb25zKSB7IHJldHVybiBqc29uRGlmZi5kaWZmKG9sZE9iaiwgbmV3T2JqLCBvcHRpb25zKTsgfVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIHByZXNlbmNlIG9mIGNpcmN1bGFyIHJlZmVyZW5jZXMgYnkgYmFpbGluZyBvdXQgd2hlbiBlbmNvdW50ZXJpbmcgYW5cbi8vIG9iamVjdCB0aGF0IGlzIGFscmVhZHkgb24gdGhlIFwic3RhY2tcIiBvZiBpdGVtcyBiZWluZyBwcm9jZXNzZWQuXG5leHBvcnQgZnVuY3Rpb24gY2Fub25pY2FsaXplKG9iaiwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2spIHtcbiAgc3RhY2sgPSBzdGFjayB8fCBbXTtcbiAgcmVwbGFjZW1lbnRTdGFjayA9IHJlcGxhY2VtZW50U3RhY2sgfHwgW107XG5cbiAgbGV0IGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHN0YWNrW2ldID09PSBvYmopIHtcbiAgICAgIHJldHVybiByZXBsYWNlbWVudFN0YWNrW2ldO1xuICAgIH1cbiAgfVxuXG4gIGxldCBjYW5vbmljYWxpemVkT2JqO1xuXG4gIGlmICgnW29iamVjdCBBcnJheV0nID09PSBvYmplY3RQcm90b3R5cGVUb1N0cmluZy5jYWxsKG9iaikpIHtcbiAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IG5ldyBBcnJheShvYmoubGVuZ3RoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG4gICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY2Fub25pY2FsaXplZE9ialtpXSA9IGNhbm9uaWNhbGl6ZShvYmpbaV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrKTtcbiAgICB9XG4gICAgc3RhY2sucG9wKCk7XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbiAgfVxuXG4gIGlmIChvYmogJiYgb2JqLnRvSlNPTikge1xuICAgIG9iaiA9IG9iai50b0pTT04oKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcbiAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IHt9O1xuICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcbiAgICBsZXQgc29ydGVkS2V5cyA9IFtdLFxuICAgICAgICBrZXk7XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHNvcnRlZEtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0ZWRLZXlzLnNvcnQoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc29ydGVkS2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAga2V5ID0gc29ydGVkS2V5c1tpXTtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmpba2V5XSA9IGNhbm9uaWNhbGl6ZShvYmpba2V5XSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2spO1xuICAgIH1cbiAgICBzdGFjay5wb3AoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBvYmo7XG4gIH1cbiAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG59XG4iXX0=
        /** */
      },
      /* 9 */
      /** */ function(module, exports, __webpack_require__) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.arrayDiff = undefined;
        exports.diffArrays = diffArrays;

        var /* istanbul ignore start*/ _base = __webpack_require__(1) /* istanbul ignore end*/;

        /* istanbul ignore start*/ var _base2 = _interopRequireDefault(_base);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /* istanbul ignore end*/ var arrayDiff /* istanbul ignore start*/ = (exports.arrayDiff = new /* istanbul ignore start*/ _base2.default /* istanbul ignore end*/());
        arrayDiff.tokenize = arrayDiff.join = function(value) {
          return value.slice();
        };

        function diffArrays(oldArr, newArr, callback) {
          return arrayDiff.diff(oldArr, newArr, callback);
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2FycmF5LmpzIl0sIm5hbWVzIjpbImRpZmZBcnJheXMiLCJhcnJheURpZmYiLCJ0b2tlbml6ZSIsImpvaW4iLCJ2YWx1ZSIsInNsaWNlIiwib2xkQXJyIiwibmV3QXJyIiwiY2FsbGJhY2siLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Z0NBT2dCQSxVLEdBQUFBLFU7O0FBUGhCOzs7Ozs7dUJBRU8sSUFBTUMsaUZBQVksd0VBQWxCO0FBQ1BBLFVBQVVDLFFBQVYsR0FBcUJELFVBQVVFLElBQVYsR0FBaUIsVUFBU0MsS0FBVCxFQUFnQjtBQUNwRCxTQUFPQSxNQUFNQyxLQUFOLEVBQVA7QUFDRCxDQUZEOztBQUlPLFNBQVNMLFVBQVQsQ0FBb0JNLE1BQXBCLEVBQTRCQyxNQUE1QixFQUFvQ0MsUUFBcEMsRUFBOEM7QUFBRSxTQUFPUCxVQUFVUSxJQUFWLENBQWVILE1BQWYsRUFBdUJDLE1BQXZCLEVBQStCQyxRQUEvQixDQUFQO0FBQWtEIiwiZmlsZSI6ImFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNvbnN0IGFycmF5RGlmZiA9IG5ldyBEaWZmKCk7XG5hcnJheURpZmYudG9rZW5pemUgPSBhcnJheURpZmYuam9pbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zbGljZSgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZBcnJheXMob2xkQXJyLCBuZXdBcnIsIGNhbGxiYWNrKSB7IHJldHVybiBhcnJheURpZmYuZGlmZihvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spOyB9XG4iXX0=
        /** */
      },
      /* 10 */
      /** */ function(module, exports, __webpack_require__) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.applyPatch = applyPatch;
        /* istanbul ignore start*/ exports.applyPatches = applyPatches;

        var /* istanbul ignore start*/ _parse = __webpack_require__(11) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _distanceIterator = __webpack_require__(
          12
        ) /* istanbul ignore end*/;

        /* istanbul ignore start*/ var _distanceIterator2 = _interopRequireDefault(
          _distanceIterator
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /* istanbul ignore end*/ function applyPatch(source, uniDiff) {
          /* istanbul ignore start*/ var /* istanbul ignore end*/ options =
            arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          if (typeof uniDiff === "string") {
            uniDiff = /* istanbul ignore start*/ (0, _parse.parsePatch) /* istanbul ignore end*/(
              uniDiff
            );
          }

          if (Array.isArray(uniDiff)) {
            if (uniDiff.length > 1) {
              throw new Error("applyPatch only works with a single input.");
            }

            uniDiff = uniDiff[0];
          }

          // Apply the diff to the input
          var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
            delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
            hunks = uniDiff.hunks,
            compareLine =
              options.compareLine ||
              function(lineNumber, line, operation, patchContent) /* istanbul ignore start*/ {
                return /* istanbul ignore end*/ line === patchContent;
              },
            errorCount = 0,
            fuzzFactor = options.fuzzFactor || 0,
            minLine = 0,
            offset = 0,
            removeEOFNL = /* istanbul ignore start*/ void 0 /* istanbul ignore end*/,
            addEOFNL = /* istanbul ignore start*/ void 0 /* istanbul ignore end*/;

          /**
	   * Checks if the hunk exactly fits on the provided location
	   */
          function hunkFits(hunk, toPos) {
            for (var j = 0; j < hunk.lines.length; j++) {
              var line = hunk.lines[j],
                operation = line[0],
                content = line.substr(1);

              if (operation === " " || operation === "-") {
                // Context sanity check
                if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
                  errorCount++;

                  if (errorCount > fuzzFactor) {
                    return false;
                  }
                }
                toPos++;
              }
            }

            return true;
          }

          // Search best fit offsets for each hunk based on the previous ones
          for (var i = 0; i < hunks.length; i++) {
            var hunk = hunks[i],
              maxLine = lines.length - hunk.oldLines,
              localOffset = 0,
              toPos = offset + hunk.oldStart - 1;

            var iterator = /* istanbul ignore start*/ (
              0,
              _distanceIterator2.default
            ) /* istanbul ignore end*/(toPos, minLine, maxLine);

            for (; localOffset !== undefined; localOffset = iterator()) {
              if (hunkFits(hunk, toPos + localOffset)) {
                hunk.offset = offset += localOffset;
                break;
              }
            }

            if (localOffset === undefined) {
              return false;
            }

            // Set lower text limit to end of the current hunk, so next ones don't try
            // to fit over already patched text
            minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
          }

          // Apply patch hunks
          for (var _i = 0; _i < hunks.length; _i++) {
            var _hunk = hunks[_i],
              _toPos = _hunk.offset + _hunk.newStart - 1;
            if (_hunk.newLines == 0) {
              _toPos++;
            }

            for (var j = 0; j < _hunk.lines.length; j++) {
              var line = _hunk.lines[j],
                operation = line[0],
                content = line.substr(1),
                delimiter = _hunk.linedelimiters[j];

              if (operation === " ") {
                _toPos++;
              } else if (operation === "-") {
                lines.splice(_toPos, 1);
                delimiters.splice(_toPos, 1);
                /* istanbul ignore else */
              } else if (operation === "+") {
                lines.splice(_toPos, 0, content);
                delimiters.splice(_toPos, 0, delimiter);
                _toPos++;
              } else if (operation === "\\") {
                var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
                if (previousOperation === "+") {
                  removeEOFNL = true;
                } else if (previousOperation === "-") {
                  addEOFNL = true;
                }
              }
            }
          }

          // Handle EOFNL insertion/removal
          if (removeEOFNL) {
            while (!lines[lines.length - 1]) {
              lines.pop();
              delimiters.pop();
            }
          } else if (addEOFNL) {
            lines.push("");
            delimiters.push("\n");
          }
          for (var _k = 0; _k < lines.length - 1; _k++) {
            lines[_k] = lines[_k] + delimiters[_k];
          }
          return lines.join("");
        }

        // Wrapper that supports multiple file patches via callbacks.
        function applyPatches(uniDiff, options) {
          if (typeof uniDiff === "string") {
            uniDiff = /* istanbul ignore start*/ (0, _parse.parsePatch) /* istanbul ignore end*/(
              uniDiff
            );
          }

          var currentIndex = 0;
          function processIndex() {
            var index = uniDiff[currentIndex++];
            if (!index) {
              return options.complete();
            }

            options.loadFile(index, function(err, data) {
              if (err) {
                return options.complete(err);
              }

              var updatedContent = applyPatch(data, index, options);
              options.patched(index, updatedContent, function(err) {
                if (err) {
                  return options.complete(err);
                }

                processIndex();
              });
            });
          }
          processIndex();
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9hcHBseS5qcyJdLCJuYW1lcyI6WyJhcHBseVBhdGNoIiwiYXBwbHlQYXRjaGVzIiwic291cmNlIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJFcnJvciIsImxpbmVzIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJodW5rcyIsImNvbXBhcmVMaW5lIiwibGluZU51bWJlciIsImxpbmUiLCJvcGVyYXRpb24iLCJwYXRjaENvbnRlbnQiLCJlcnJvckNvdW50IiwiZnV6ekZhY3RvciIsIm1pbkxpbmUiLCJvZmZzZXQiLCJyZW1vdmVFT0ZOTCIsImFkZEVPRk5MIiwiaHVua0ZpdHMiLCJodW5rIiwidG9Qb3MiLCJqIiwiY29udGVudCIsInN1YnN0ciIsImkiLCJtYXhMaW5lIiwib2xkTGluZXMiLCJsb2NhbE9mZnNldCIsIm9sZFN0YXJ0IiwiaXRlcmF0b3IiLCJ1bmRlZmluZWQiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwiZGVsaW1pdGVyIiwibGluZWRlbGltaXRlcnMiLCJzcGxpY2UiLCJwcmV2aW91c09wZXJhdGlvbiIsInBvcCIsInB1c2giLCJfayIsImpvaW4iLCJjdXJyZW50SW5kZXgiLCJwcm9jZXNzSW5kZXgiLCJpbmRleCIsImNvbXBsZXRlIiwibG9hZEZpbGUiLCJlcnIiLCJkYXRhIiwidXBkYXRlZENvbnRlbnQiLCJwYXRjaGVkIl0sIm1hcHBpbmdzIjoiOzs7OztnQ0FHZ0JBLFUsR0FBQUEsVTt5REErSEFDLFksR0FBQUEsWTs7QUFsSWhCOztBQUNBOzs7Ozs7dUJBRU8sU0FBU0QsVUFBVCxDQUFvQkUsTUFBcEIsRUFBNEJDLE9BQTVCLEVBQW1EO0FBQUEsc0RBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDeEQsTUFBSSxPQUFPRCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CQSxjQUFVLHdFQUFXQSxPQUFYLENBQVY7QUFDRDs7QUFFRCxNQUFJRSxNQUFNQyxPQUFOLENBQWNILE9BQWQsQ0FBSixFQUE0QjtBQUMxQixRQUFJQSxRQUFRSSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLFlBQU0sSUFBSUMsS0FBSixDQUFVLDRDQUFWLENBQU47QUFDRDs7QUFFREwsY0FBVUEsUUFBUSxDQUFSLENBQVY7QUFDRDs7QUFFRDtBQUNBLE1BQUlNLFFBQVFQLE9BQU9RLEtBQVAsQ0FBYSxxQkFBYixDQUFaO0FBQUEsTUFDSUMsYUFBYVQsT0FBT1UsS0FBUCxDQUFhLHNCQUFiLEtBQXdDLEVBRHpEO0FBQUEsTUFFSUMsUUFBUVYsUUFBUVUsS0FGcEI7QUFBQSxNQUlJQyxjQUFjVixRQUFRVSxXQUFSLElBQXdCLFVBQUNDLFVBQUQsRUFBYUMsSUFBYixFQUFtQkMsU0FBbkIsRUFBOEJDLFlBQTlCO0FBQUEsbUNBQStDRixTQUFTRTtBQUF4RDtBQUFBLEdBSjFDO0FBQUEsTUFLSUMsYUFBYSxDQUxqQjtBQUFBLE1BTUlDLGFBQWFoQixRQUFRZ0IsVUFBUixJQUFzQixDQU52QztBQUFBLE1BT0lDLFVBQVUsQ0FQZDtBQUFBLE1BUUlDLFNBQVMsQ0FSYjtBQUFBLE1BVUlDLDZDQVZKO0FBQUEsTUFXSUMsMENBWEo7O0FBYUE7OztBQUdBLFdBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxLQUF4QixFQUErQjtBQUM3QixTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS2pCLEtBQUwsQ0FBV0YsTUFBL0IsRUFBdUNxQixHQUF2QyxFQUE0QztBQUMxQyxVQUFJWixPQUFPVSxLQUFLakIsS0FBTCxDQUFXbUIsQ0FBWCxDQUFYO0FBQUEsVUFDSVgsWUFBWUQsS0FBSyxDQUFMLENBRGhCO0FBQUEsVUFFSWEsVUFBVWIsS0FBS2MsTUFBTCxDQUFZLENBQVosQ0FGZDs7QUFJQSxVQUFJYixjQUFjLEdBQWQsSUFBcUJBLGNBQWMsR0FBdkMsRUFBNEM7QUFDMUM7QUFDQSxZQUFJLENBQUNILFlBQVlhLFFBQVEsQ0FBcEIsRUFBdUJsQixNQUFNa0IsS0FBTixDQUF2QixFQUFxQ1YsU0FBckMsRUFBZ0RZLE9BQWhELENBQUwsRUFBK0Q7QUFDN0RWOztBQUVBLGNBQUlBLGFBQWFDLFVBQWpCLEVBQTZCO0FBQzNCLG1CQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0RPO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPLElBQVA7QUFDRDs7QUFFRDtBQUNBLE9BQUssSUFBSUksSUFBSSxDQUFiLEVBQWdCQSxJQUFJbEIsTUFBTU4sTUFBMUIsRUFBa0N3QixHQUFsQyxFQUF1QztBQUNyQyxRQUFJTCxPQUFPYixNQUFNa0IsQ0FBTixDQUFYO0FBQUEsUUFDSUMsVUFBVXZCLE1BQU1GLE1BQU4sR0FBZW1CLEtBQUtPLFFBRGxDO0FBQUEsUUFFSUMsY0FBYyxDQUZsQjtBQUFBLFFBR0lQLFFBQVFMLFNBQVNJLEtBQUtTLFFBQWQsR0FBeUIsQ0FIckM7O0FBS0EsUUFBSUMsV0FBVyxvRkFBaUJULEtBQWpCLEVBQXdCTixPQUF4QixFQUFpQ1csT0FBakMsQ0FBZjs7QUFFQSxXQUFPRSxnQkFBZ0JHLFNBQXZCLEVBQWtDSCxjQUFjRSxVQUFoRCxFQUE0RDtBQUMxRCxVQUFJWCxTQUFTQyxJQUFULEVBQWVDLFFBQVFPLFdBQXZCLENBQUosRUFBeUM7QUFDdkNSLGFBQUtKLE1BQUwsR0FBY0EsVUFBVVksV0FBeEI7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsUUFBSUEsZ0JBQWdCRyxTQUFwQixFQUErQjtBQUM3QixhQUFPLEtBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0FoQixjQUFVSyxLQUFLSixNQUFMLEdBQWNJLEtBQUtTLFFBQW5CLEdBQThCVCxLQUFLTyxRQUE3QztBQUNEOztBQUVEO0FBQ0EsT0FBSyxJQUFJRixLQUFJLENBQWIsRUFBZ0JBLEtBQUlsQixNQUFNTixNQUExQixFQUFrQ3dCLElBQWxDLEVBQXVDO0FBQ3JDLFFBQUlMLFFBQU9iLE1BQU1rQixFQUFOLENBQVg7QUFBQSxRQUNJSixTQUFRRCxNQUFLSixNQUFMLEdBQWNJLE1BQUtZLFFBQW5CLEdBQThCLENBRDFDO0FBRUEsUUFBSVosTUFBS2EsUUFBTCxJQUFpQixDQUFyQixFQUF3QjtBQUFFWjtBQUFVOztBQUVwQyxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsTUFBS2pCLEtBQUwsQ0FBV0YsTUFBL0IsRUFBdUNxQixHQUF2QyxFQUE0QztBQUMxQyxVQUFJWixPQUFPVSxNQUFLakIsS0FBTCxDQUFXbUIsQ0FBWCxDQUFYO0FBQUEsVUFDSVgsWUFBWUQsS0FBSyxDQUFMLENBRGhCO0FBQUEsVUFFSWEsVUFBVWIsS0FBS2MsTUFBTCxDQUFZLENBQVosQ0FGZDtBQUFBLFVBR0lVLFlBQVlkLE1BQUtlLGNBQUwsQ0FBb0JiLENBQXBCLENBSGhCOztBQUtBLFVBQUlYLGNBQWMsR0FBbEIsRUFBdUI7QUFDckJVO0FBQ0QsT0FGRCxNQUVPLElBQUlWLGNBQWMsR0FBbEIsRUFBdUI7QUFDNUJSLGNBQU1pQyxNQUFOLENBQWFmLE1BQWIsRUFBb0IsQ0FBcEI7QUFDQWhCLG1CQUFXK0IsTUFBWCxDQUFrQmYsTUFBbEIsRUFBeUIsQ0FBekI7QUFDRjtBQUNDLE9BSk0sTUFJQSxJQUFJVixjQUFjLEdBQWxCLEVBQXVCO0FBQzVCUixjQUFNaUMsTUFBTixDQUFhZixNQUFiLEVBQW9CLENBQXBCLEVBQXVCRSxPQUF2QjtBQUNBbEIsbUJBQVcrQixNQUFYLENBQWtCZixNQUFsQixFQUF5QixDQUF6QixFQUE0QmEsU0FBNUI7QUFDQWI7QUFDRCxPQUpNLE1BSUEsSUFBSVYsY0FBYyxJQUFsQixFQUF3QjtBQUM3QixZQUFJMEIsb0JBQW9CakIsTUFBS2pCLEtBQUwsQ0FBV21CLElBQUksQ0FBZixJQUFvQkYsTUFBS2pCLEtBQUwsQ0FBV21CLElBQUksQ0FBZixFQUFrQixDQUFsQixDQUFwQixHQUEyQyxJQUFuRTtBQUNBLFlBQUllLHNCQUFzQixHQUExQixFQUErQjtBQUM3QnBCLHdCQUFjLElBQWQ7QUFDRCxTQUZELE1BRU8sSUFBSW9CLHNCQUFzQixHQUExQixFQUErQjtBQUNwQ25CLHFCQUFXLElBQVg7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBLE1BQUlELFdBQUosRUFBaUI7QUFDZixXQUFPLENBQUNkLE1BQU1BLE1BQU1GLE1BQU4sR0FBZSxDQUFyQixDQUFSLEVBQWlDO0FBQy9CRSxZQUFNbUMsR0FBTjtBQUNBakMsaUJBQVdpQyxHQUFYO0FBQ0Q7QUFDRixHQUxELE1BS08sSUFBSXBCLFFBQUosRUFBYztBQUNuQmYsVUFBTW9DLElBQU4sQ0FBVyxFQUFYO0FBQ0FsQyxlQUFXa0MsSUFBWCxDQUFnQixJQUFoQjtBQUNEO0FBQ0QsT0FBSyxJQUFJQyxLQUFLLENBQWQsRUFBaUJBLEtBQUtyQyxNQUFNRixNQUFOLEdBQWUsQ0FBckMsRUFBd0N1QyxJQUF4QyxFQUE4QztBQUM1Q3JDLFVBQU1xQyxFQUFOLElBQVlyQyxNQUFNcUMsRUFBTixJQUFZbkMsV0FBV21DLEVBQVgsQ0FBeEI7QUFDRDtBQUNELFNBQU9yQyxNQUFNc0MsSUFBTixDQUFXLEVBQVgsQ0FBUDtBQUNEOztBQUVEO0FBQ08sU0FBUzlDLFlBQVQsQ0FBc0JFLE9BQXRCLEVBQStCQyxPQUEvQixFQUF3QztBQUM3QyxNQUFJLE9BQU9ELE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0JBLGNBQVUsd0VBQVdBLE9BQVgsQ0FBVjtBQUNEOztBQUVELE1BQUk2QyxlQUFlLENBQW5CO0FBQ0EsV0FBU0MsWUFBVCxHQUF3QjtBQUN0QixRQUFJQyxRQUFRL0MsUUFBUTZDLGNBQVIsQ0FBWjtBQUNBLFFBQUksQ0FBQ0UsS0FBTCxFQUFZO0FBQ1YsYUFBTzlDLFFBQVErQyxRQUFSLEVBQVA7QUFDRDs7QUFFRC9DLFlBQVFnRCxRQUFSLENBQWlCRixLQUFqQixFQUF3QixVQUFTRyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDMUMsVUFBSUQsR0FBSixFQUFTO0FBQ1AsZUFBT2pELFFBQVErQyxRQUFSLENBQWlCRSxHQUFqQixDQUFQO0FBQ0Q7O0FBRUQsVUFBSUUsaUJBQWlCdkQsV0FBV3NELElBQVgsRUFBaUJKLEtBQWpCLEVBQXdCOUMsT0FBeEIsQ0FBckI7QUFDQUEsY0FBUW9ELE9BQVIsQ0FBZ0JOLEtBQWhCLEVBQXVCSyxjQUF2QixFQUF1QyxVQUFTRixHQUFULEVBQWM7QUFDbkQsWUFBSUEsR0FBSixFQUFTO0FBQ1AsaUJBQU9qRCxRQUFRK0MsUUFBUixDQUFpQkUsR0FBakIsQ0FBUDtBQUNEOztBQUVESjtBQUNELE9BTkQ7QUFPRCxLQWJEO0FBY0Q7QUFDREE7QUFDRCIsImZpbGUiOiJhcHBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQgZGlzdGFuY2VJdGVyYXRvciBmcm9tICcuLi91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0Y2goc291cmNlLCB1bmlEaWZmLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodW5pRGlmZikpIHtcbiAgICBpZiAodW5pRGlmZi5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwcGx5UGF0Y2ggb25seSB3b3JrcyB3aXRoIGEgc2luZ2xlIGlucHV0LicpO1xuICAgIH1cblxuICAgIHVuaURpZmYgPSB1bmlEaWZmWzBdO1xuICB9XG5cbiAgLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG4gIGxldCBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSBzb3VyY2UubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgaHVua3MgPSB1bmlEaWZmLmh1bmtzLFxuXG4gICAgICBjb21wYXJlTGluZSA9IG9wdGlvbnMuY29tcGFyZUxpbmUgfHwgKChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkgPT4gbGluZSA9PT0gcGF0Y2hDb250ZW50KSxcbiAgICAgIGVycm9yQ291bnQgPSAwLFxuICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgbWluTGluZSA9IDAsXG4gICAgICBvZmZzZXQgPSAwLFxuXG4gICAgICByZW1vdmVFT0ZOTCxcbiAgICAgIGFkZEVPRk5MO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGh1bmsgZXhhY3RseSBmaXRzIG9uIHRoZSBwcm92aWRlZCBsb2NhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gaHVua0ZpdHMoaHVuaywgdG9Qb3MpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lWzBdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLnN1YnN0cigxKTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIC8vIENvbnRleHQgc2FuaXR5IGNoZWNrXG4gICAgICAgIGlmICghY29tcGFyZUxpbmUodG9Qb3MgKyAxLCBsaW5lc1t0b1Bvc10sIG9wZXJhdGlvbiwgY29udGVudCkpIHtcbiAgICAgICAgICBlcnJvckNvdW50Kys7XG5cbiAgICAgICAgICBpZiAoZXJyb3JDb3VudCA+IGZ1enpGYWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBodW5rID0gaHVua3NbaV0sXG4gICAgICAgIG1heExpbmUgPSBsaW5lcy5sZW5ndGggLSBodW5rLm9sZExpbmVzLFxuICAgICAgICBsb2NhbE9mZnNldCA9IDAsXG4gICAgICAgIHRvUG9zID0gb2Zmc2V0ICsgaHVuay5vbGRTdGFydCAtIDE7XG5cbiAgICBsZXQgaXRlcmF0b3IgPSBkaXN0YW5jZUl0ZXJhdG9yKHRvUG9zLCBtaW5MaW5lLCBtYXhMaW5lKTtcblxuICAgIGZvciAoOyBsb2NhbE9mZnNldCAhPT0gdW5kZWZpbmVkOyBsb2NhbE9mZnNldCA9IGl0ZXJhdG9yKCkpIHtcbiAgICAgIGlmIChodW5rRml0cyhodW5rLCB0b1BvcyArIGxvY2FsT2Zmc2V0KSkge1xuICAgICAgICBodW5rLm9mZnNldCA9IG9mZnNldCArPSBsb2NhbE9mZnNldDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsT2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgbG93ZXIgdGV4dCBsaW1pdCB0byBlbmQgb2YgdGhlIGN1cnJlbnQgaHVuaywgc28gbmV4dCBvbmVzIGRvbid0IHRyeVxuICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XG4gICAgbWluTGluZSA9IGh1bmsub2Zmc2V0ICsgaHVuay5vbGRTdGFydCArIGh1bmsub2xkTGluZXM7XG4gIH1cblxuICAvLyBBcHBseSBwYXRjaCBodW5rc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGh1bmsgPSBodW5rc1tpXSxcbiAgICAgICAgdG9Qb3MgPSBodW5rLm9mZnNldCArIGh1bmsubmV3U3RhcnQgLSAxO1xuICAgIGlmIChodW5rLm5ld0xpbmVzID09IDApIHsgdG9Qb3MrKzsgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBodW5rLmxpbmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgbGluZSA9IGh1bmsubGluZXNbal0sXG4gICAgICAgICAgb3BlcmF0aW9uID0gbGluZVswXSxcbiAgICAgICAgICBjb250ZW50ID0gbGluZS5zdWJzdHIoMSksXG4gICAgICAgICAgZGVsaW1pdGVyID0gaHVuay5saW5lZGVsaW1pdGVyc1tqXTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgIHRvUG9zKys7XG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIGxpbmVzLnNwbGljZSh0b1BvcywgMSk7XG4gICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKHRvUG9zLCAxKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgIGxpbmVzLnNwbGljZSh0b1BvcywgMCwgY29udGVudCk7XG4gICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKHRvUG9zLCAwLCBkZWxpbWl0ZXIpO1xuICAgICAgICB0b1BvcysrO1xuICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdcXFxcJykge1xuICAgICAgICBsZXQgcHJldmlvdXNPcGVyYXRpb24gPSBodW5rLmxpbmVzW2ogLSAxXSA/IGh1bmsubGluZXNbaiAtIDFdWzBdIDogbnVsbDtcbiAgICAgICAgaWYgKHByZXZpb3VzT3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICByZW1vdmVFT0ZOTCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgIGFkZEVPRk5MID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBFT0ZOTCBpbnNlcnRpb24vcmVtb3ZhbFxuICBpZiAocmVtb3ZlRU9GTkwpIHtcbiAgICB3aGlsZSAoIWxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICBsaW5lcy5wb3AoKTtcbiAgICAgIGRlbGltaXRlcnMucG9wKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFkZEVPRk5MKSB7XG4gICAgbGluZXMucHVzaCgnJyk7XG4gICAgZGVsaW1pdGVycy5wdXNoKCdcXG4nKTtcbiAgfVxuICBmb3IgKGxldCBfayA9IDA7IF9rIDwgbGluZXMubGVuZ3RoIC0gMTsgX2srKykge1xuICAgIGxpbmVzW19rXSA9IGxpbmVzW19rXSArIGRlbGltaXRlcnNbX2tdO1xuICB9XG4gIHJldHVybiBsaW5lcy5qb2luKCcnKTtcbn1cblxuLy8gV3JhcHBlciB0aGF0IHN1cHBvcnRzIG11bHRpcGxlIGZpbGUgcGF0Y2hlcyB2aWEgY2FsbGJhY2tzLlxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0Y2hlcyh1bmlEaWZmLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICB1bmlEaWZmID0gcGFyc2VQYXRjaCh1bmlEaWZmKTtcbiAgfVxuXG4gIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICBmdW5jdGlvbiBwcm9jZXNzSW5kZXgoKSB7XG4gICAgbGV0IGluZGV4ID0gdW5pRGlmZltjdXJyZW50SW5kZXgrK107XG4gICAgaWYgKCFpbmRleCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBvcHRpb25zLmxvYWRGaWxlKGluZGV4LCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHVwZGF0ZWRDb250ZW50ID0gYXBwbHlQYXRjaChkYXRhLCBpbmRleCwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLnBhdGNoZWQoaW5kZXgsIHVwZGF0ZWRDb250ZW50LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9jZXNzSW5kZXgoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHByb2Nlc3NJbmRleCgpO1xufVxuIl19
        /** */
      },
      /* 11 */
      /** */ function(module, exports) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.parsePatch = parsePatch;
        function parsePatch(uniDiff) {
          /* istanbul ignore start*/ var /* istanbul ignore end*/ options =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
            delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
            list = [],
            i = 0;

          function parseIndex() {
            var index = {};
            list.push(index);

            // Parse diff metadata
            while (i < diffstr.length) {
              var line = diffstr[i];

              // File header found, end parsing diff metadata
              if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
                break;
              }

              // Diff index
              var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);
              if (header) {
                index.index = header[1];
              }

              i++;
            }

            // Parse file headers if they are defined. Unified diff requires them, but
            // there's no technical issues to have an isolated hunk without file header
            parseFileHeader(index);
            parseFileHeader(index);

            // Parse hunks
            index.hunks = [];

            while (i < diffstr.length) {
              var _line = diffstr[i];

              if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
                break;
              } else if (/^@@/.test(_line)) {
                index.hunks.push(parseHunk());
              } else if (_line && options.strict) {
                // Ignore unexpected content unless in strict mode
                throw new Error("Unknown line " + (i + 1) + " " + JSON.stringify(_line));
              } else {
                i++;
              }
            }
          }

          // Parses the --- and +++ headers, if none are found, no lines
          // are consumed.
          function parseFileHeader(index) {
            var headerPattern = /^(---|\+\+\+)\s+([\S ]*)(?:\t(.*?)\s*)?$/;
            var fileHeader = headerPattern.exec(diffstr[i]);
            if (fileHeader) {
              var keyPrefix = fileHeader[1] === "---" ? "old" : "new";
              var fileName = fileHeader[2].replace(/\\\\/g, "\\");
              if (fileName.startsWith('"') && fileName.endsWith('"')) {
                fileName = fileName.substr(1, fileName.length - 2);
              }
              index[keyPrefix + "FileName"] = fileName;
              index[keyPrefix + "Header"] = fileHeader[3];

              i++;
            }
          }

          // Parses a hunk
          // This assumes that we are at the start of a hunk.
          function parseHunk() {
            var chunkHeaderIndex = i,
              chunkHeaderLine = diffstr[i++],
              chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);

            var hunk = {
              oldStart: Number(chunkHeader[1]),
              oldLines: Number(chunkHeader[2]) || 1,
              newStart: Number(chunkHeader[3]),
              newLines: Number(chunkHeader[4]) || 1,
              lines: [],
              linedelimiters: []
            };

            var addCount = 0,
              removeCount = 0;
            for (; i < diffstr.length; i++) {
              // Lines starting with '---' could be mistaken for the "remove line" operation
              // But they could be the header for the next file. Therefore prune such cases out.
              if (
                diffstr[i].indexOf("--- ") === 0 &&
                i + 2 < diffstr.length &&
                diffstr[i + 1].indexOf("+++ ") === 0 &&
                diffstr[i + 2].indexOf("@@") === 0
              ) {
                break;
              }
              var operation = diffstr[i][0];

              if (
                operation === "+" ||
                operation === "-" ||
                operation === " " ||
                operation === "\\"
              ) {
                hunk.lines.push(diffstr[i]);
                hunk.linedelimiters.push(delimiters[i] || "\n");

                if (operation === "+") {
                  addCount++;
                } else if (operation === "-") {
                  removeCount++;
                } else if (operation === " ") {
                  addCount++;
                  removeCount++;
                }
              } else {
                break;
              }
            }

            // Handle the empty block count case
            if (!addCount && hunk.newLines === 1) {
              hunk.newLines = 0;
            }
            if (!removeCount && hunk.oldLines === 1) {
              hunk.oldLines = 0;
            }

            // Perform optional sanity checking
            if (options.strict) {
              if (addCount !== hunk.newLines) {
                throw new Error(
                  "Added line count did not match for hunk at line " + (chunkHeaderIndex + 1)
                );
              }
              if (removeCount !== hunk.oldLines) {
                throw new Error(
                  "Removed line count did not match for hunk at line " + (chunkHeaderIndex + 1)
                );
              }
            }

            return hunk;
          }

          while (i < diffstr.length) {
            parseIndex();
          }

          return list;
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9wYXJzZS5qcyJdLCJuYW1lcyI6WyJwYXJzZVBhdGNoIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJkaWZmc3RyIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJsaXN0IiwiaSIsInBhcnNlSW5kZXgiLCJpbmRleCIsInB1c2giLCJsZW5ndGgiLCJsaW5lIiwidGVzdCIsImhlYWRlciIsImV4ZWMiLCJwYXJzZUZpbGVIZWFkZXIiLCJodW5rcyIsInBhcnNlSHVuayIsInN0cmljdCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlclBhdHRlcm4iLCJmaWxlSGVhZGVyIiwia2V5UHJlZml4IiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwic3Vic3RyIiwiY2h1bmtIZWFkZXJJbmRleCIsImNodW5rSGVhZGVyTGluZSIsImNodW5rSGVhZGVyIiwiaHVuayIsIm9sZFN0YXJ0Iiwib2xkTGluZXMiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwibGluZXMiLCJsaW5lZGVsaW1pdGVycyIsImFkZENvdW50IiwicmVtb3ZlQ291bnQiLCJpbmRleE9mIiwib3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OztnQ0FBZ0JBLFUsR0FBQUEsVTtBQUFULFNBQVNBLFVBQVQsQ0FBb0JDLE9BQXBCLEVBQTJDO0FBQUEsc0RBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDaEQsTUFBSUMsVUFBVUYsUUFBUUcsS0FBUixDQUFjLHFCQUFkLENBQWQ7QUFBQSxNQUNJQyxhQUFhSixRQUFRSyxLQUFSLENBQWMsc0JBQWQsS0FBeUMsRUFEMUQ7QUFBQSxNQUVJQyxPQUFPLEVBRlg7QUFBQSxNQUdJQyxJQUFJLENBSFI7O0FBS0EsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQixRQUFJQyxRQUFRLEVBQVo7QUFDQUgsU0FBS0ksSUFBTCxDQUFVRCxLQUFWOztBQUVBO0FBQ0EsV0FBT0YsSUFBSUwsUUFBUVMsTUFBbkIs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QUFDRCxVQUFJVyxnQkFBZ0JSLEtBQUtFLFFBQXpCLEVBQW1DO0FBQ2pDLGNBQU0sSUFBSWhCLEtBQUosQ0FBVSx3REFBd0RXLG1CQUFtQixDQUEzRSxDQUFWLENBQU47QUFDRDtBQUNGOztBQUVELFdBQU9HLElBQVA7QUFDRDs7QUFFRCxTQUFPM0IsSUFBSUwsUUFBUVMsTUFBbkIsRUFBMkI7QUFDekJIO0FBQ0Q7O0FBRUQsU0FBT0YsSUFBUDtBQUNEIiwiZmlsZSI6InBhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGF0Y2godW5pRGlmZiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBkaWZmc3RyID0gdW5pRGlmZi5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSB1bmlEaWZmLm1hdGNoKC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS9nKSB8fCBbXSxcbiAgICAgIGxpc3QgPSBbXSxcbiAgICAgIGkgPSAwO1xuXG4gIGZ1bmN0aW9uIHBhcnNlSW5kZXgoKSB7XG4gICAgbGV0IGluZGV4ID0ge307XG4gICAgbGlzdC5wdXNoKGluZGV4KTtcblxuICAgIC8vIFBhcnNlIGRpZmYgbWV0YWRhdGFcbiAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICBsZXQgbGluZSA9IGRpZmZzdHJbaV07XG5cbiAgICAgIC8vIEZpbGUgaGVhZGVyIGZvdW5kLCBlbmQgcGFyc2luZyBkaWZmIG1ldGFkYXRhXG4gICAgICBpZiAoL14oXFwtXFwtXFwtfFxcK1xcK1xcK3xAQClcXHMvLnRlc3QobGluZSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIERpZmYgaW5kZXhcbiAgICAgIGxldCBoZWFkZXIgPSAoL14oPzpJbmRleDp8ZGlmZig/OiAtciBcXHcrKSspXFxzKyguKz8pXFxzKiQvKS5leGVjKGxpbmUpO1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBpbmRleC5pbmRleCA9IGhlYWRlclsxXTtcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIGZpbGUgaGVhZGVycyBpZiB0aGV5IGFyZSBkZWZpbmVkLiBVbmlmaWVkIGRpZmYgcmVxdWlyZXMgdGhlbSwgYnV0XG4gICAgLy8gdGhlcmUncyBubyB0ZWNobmljYWwgaXNzdWVzIHRvIGhhdmUgYW4gaXNvbGF0ZWQgaHVuayB3aXRob3V0IGZpbGUgaGVhZGVyXG4gICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTtcbiAgICBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpO1xuXG4gICAgLy8gUGFyc2UgaHVua3NcbiAgICBpbmRleC5odW5rcyA9IFtdO1xuXG4gICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgbGV0IGxpbmUgPSBkaWZmc3RyW2ldO1xuXG4gICAgICBpZiAoL14oSW5kZXg6fGRpZmZ8XFwtXFwtXFwtfFxcK1xcK1xcKylcXHMvLnRlc3QobGluZSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKC9eQEAvLnRlc3QobGluZSkpIHtcbiAgICAgICAgaW5kZXguaHVua3MucHVzaChwYXJzZUh1bmsoKSk7XG4gICAgICB9IGVsc2UgaWYgKGxpbmUgJiYgb3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgICAgLy8gSWdub3JlIHVuZXhwZWN0ZWQgY29udGVudCB1bmxlc3MgaW4gc3RyaWN0IG1vZGVcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxpbmUgJyArIChpICsgMSkgKyAnICcgKyBKU09OLnN0cmluZ2lmeShsaW5lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUGFyc2VzIHRoZSAtLS0gYW5kICsrKyBoZWFkZXJzLCBpZiBub25lIGFyZSBmb3VuZCwgbm8gbGluZXNcbiAgLy8gYXJlIGNvbnN1bWVkLlxuICBmdW5jdGlvbiBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpIHtcbiAgICBjb25zdCBoZWFkZXJQYXR0ZXJuID0gL14oLS0tfFxcK1xcK1xcKylcXHMrKFtcXFMgXSopKD86XFx0KC4qPylcXHMqKT8kLztcbiAgICBjb25zdCBmaWxlSGVhZGVyID0gaGVhZGVyUGF0dGVybi5leGVjKGRpZmZzdHJbaV0pO1xuICAgIGlmIChmaWxlSGVhZGVyKSB7XG4gICAgICBsZXQga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgbGV0IGZpbGVOYW1lID0gZmlsZUhlYWRlclsyXS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpO1xuICAgICAgaWYgKGZpbGVOYW1lLnN0YXJ0c1dpdGgoJ1wiJykgJiYgZmlsZU5hbWUuZW5kc1dpdGgoJ1wiJykpIHtcbiAgICAgICAgZmlsZU5hbWUgPSBmaWxlTmFtZS5zdWJzdHIoMSwgZmlsZU5hbWUubGVuZ3RoIC0gMik7XG4gICAgICB9XG4gICAgICBpbmRleFtrZXlQcmVmaXggKyAnRmlsZU5hbWUnXSA9IGZpbGVOYW1lO1xuICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0hlYWRlciddID0gZmlsZUhlYWRlclszXTtcblxuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlcyBhIGh1bmtcbiAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgd2UgYXJlIGF0IHRoZSBzdGFydCBvZiBhIGh1bmsuXG4gIGZ1bmN0aW9uIHBhcnNlSHVuaygpIHtcbiAgICBsZXQgY2h1bmtIZWFkZXJJbmRleCA9IGksXG4gICAgICAgIGNodW5rSGVhZGVyTGluZSA9IGRpZmZzdHJbaSsrXSxcbiAgICAgICAgY2h1bmtIZWFkZXIgPSBjaHVua0hlYWRlckxpbmUuc3BsaXQoL0BAIC0oXFxkKykoPzosKFxcZCspKT8gXFwrKFxcZCspKD86LChcXGQrKSk/IEBALyk7XG5cbiAgICBsZXQgaHVuayA9IHtcbiAgICAgIG9sZFN0YXJ0OiArY2h1bmtIZWFkZXJbMV0sXG4gICAgICBvbGRMaW5lczogK2NodW5rSGVhZGVyWzJdIHx8IDEsXG4gICAgICBuZXdTdGFydDogK2NodW5rSGVhZGVyWzNdLFxuICAgICAgbmV3TGluZXM6ICtjaHVua0hlYWRlcls0XSB8fCAxLFxuICAgICAgbGluZXM6IFtdLFxuICAgICAgbGluZWRlbGltaXRlcnM6IFtdXG4gICAgfTtcblxuICAgIGxldCBhZGRDb3VudCA9IDAsXG4gICAgICAgIHJlbW92ZUNvdW50ID0gMDtcbiAgICBmb3IgKDsgaSA8IGRpZmZzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpbmVzIHN0YXJ0aW5nIHdpdGggJy0tLScgY291bGQgYmUgbWlzdGFrZW4gZm9yIHRoZSBcInJlbW92ZSBsaW5lXCIgb3BlcmF0aW9uXG4gICAgICAvLyBCdXQgdGhleSBjb3VsZCBiZSB0aGUgaGVhZGVyIGZvciB0aGUgbmV4dCBmaWxlLiBUaGVyZWZvcmUgcHJ1bmUgc3VjaCBjYXNlcyBvdXQuXG4gICAgICBpZiAoZGlmZnN0cltpXS5pbmRleE9mKCctLS0gJykgPT09IDBcbiAgICAgICAgICAgICYmIChpICsgMiA8IGRpZmZzdHIubGVuZ3RoKVxuICAgICAgICAgICAgJiYgZGlmZnN0cltpICsgMV0uaW5kZXhPZignKysrICcpID09PSAwXG4gICAgICAgICAgICAmJiBkaWZmc3RyW2kgKyAyXS5pbmRleE9mKCdAQCcpID09PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBsZXQgb3BlcmF0aW9uID0gZGlmZnN0cltpXVswXTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJysnIHx8IG9wZXJhdGlvbiA9PT0gJy0nIHx8IG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGh1bmsubGluZXMucHVzaChkaWZmc3RyW2ldKTtcbiAgICAgICAgaHVuay5saW5lZGVsaW1pdGVycy5wdXNoKGRlbGltaXRlcnNbaV0gfHwgJ1xcbicpO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdGhlIGVtcHR5IGJsb2NrIGNvdW50IGNhc2VcbiAgICBpZiAoIWFkZENvdW50ICYmIGh1bmsubmV3TGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgIH1cbiAgICBpZiAoIXJlbW92ZUNvdW50ICYmIGh1bmsub2xkTGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsub2xkTGluZXMgPSAwO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG4gICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICBpZiAoYWRkQ291bnQgIT09IGh1bmsubmV3TGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBZGRlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XG4gICAgICB9XG4gICAgICBpZiAocmVtb3ZlQ291bnQgIT09IGh1bmsub2xkTGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHVuaztcbiAgfVxuXG4gIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICBwYXJzZUluZGV4KCk7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbiJdfQ==
        /** */
      },
      /* 12 */
      /** */ function(module, exports) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        exports.default = /* istanbul ignore end*/ function(start, minLine, maxLine) {
          var wantForward = true,
            backwardExhausted = false,
            forwardExhausted = false,
            localOffset = 1;

          return function iterator() {
            if (wantForward && !forwardExhausted) {
              if (backwardExhausted) {
                localOffset++;
              } else {
                wantForward = false;
              }

              // Check if trying to fit beyond text length, and if not, check it fits
              // after offset location (or desired location on first iteration)
              if (start + localOffset <= maxLine) {
                return localOffset;
              }

              forwardExhausted = true;
            }

            if (!backwardExhausted) {
              if (!forwardExhausted) {
                wantForward = true;
              }

              // Check if trying to fit before text beginning, and if not, check it fits
              // before offset location
              if (minLine <= start - localOffset) {
                return -localOffset++;
              }

              backwardExhausted = true;
              return iterator();
            }

            // We tried to fit hunk before text beginning and beyond text lenght, then
            // hunk can't fit on the text. Return undefined
          };
        };
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwibWluTGluZSIsIm1heExpbmUiLCJ3YW50Rm9yd2FyZCIsImJhY2t3YXJkRXhoYXVzdGVkIiwiZm9yd2FyZEV4aGF1c3RlZCIsImxvY2FsT2Zmc2V0IiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs0Q0FHZSxVQUFTQSxLQUFULEVBQWdCQyxPQUFoQixFQUF5QkMsT0FBekIsRUFBa0M7QUFDL0MsTUFBSUMsY0FBYyxJQUFsQjtBQUFBLE1BQ0lDLG9CQUFvQixLQUR4QjtBQUFBLE1BRUlDLG1CQUFtQixLQUZ2QjtBQUFBLE1BR0lDLGNBQWMsQ0FIbEI7O0FBS0EsU0FBTyxTQUFTQyxRQUFULEdBQW9CO0FBQ3pCLFFBQUlKLGVBQWUsQ0FBQ0UsZ0JBQXBCLEVBQXNDO0FBQ3BDLFVBQUlELGlCQUFKLEVBQXVCO0FBQ3JCRTtBQUNELE9BRkQsTUFFTztBQUNMSCxzQkFBYyxLQUFkO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLFVBQUlILFFBQVFNLFdBQVIsSUFBdUJKLE9BQTNCLEVBQW9DO0FBQ2xDLGVBQU9JLFdBQVA7QUFDRDs7QUFFREQseUJBQW1CLElBQW5CO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDRCxpQkFBTCxFQUF3QjtBQUN0QixVQUFJLENBQUNDLGdCQUFMLEVBQXVCO0FBQ3JCRixzQkFBYyxJQUFkO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLFVBQUlGLFdBQVdELFFBQVFNLFdBQXZCLEVBQW9DO0FBQ2xDLGVBQU8sQ0FBQ0EsYUFBUjtBQUNEOztBQUVERiwwQkFBb0IsSUFBcEI7QUFDQSxhQUFPRyxVQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNELEdBbENEO0FBbUNELEMiLCJmaWxlIjoiZGlzdGFuY2UtaXRlcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJdGVyYXRvciB0aGF0IHRyYXZlcnNlcyBpbiB0aGUgcmFuZ2Ugb2YgW21pbiwgbWF4XSwgc3RlcHBpbmdcbi8vIGJ5IGRpc3RhbmNlIGZyb20gYSBnaXZlbiBzdGFydCBwb3NpdGlvbi4gSS5lLiBmb3IgWzAsIDRdLCB3aXRoXG4vLyBzdGFydCBvZiAyLCB0aGlzIHdpbGwgaXRlcmF0ZSAyLCAzLCAxLCA0LCAwLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhcnQsIG1pbkxpbmUsIG1heExpbmUpIHtcbiAgbGV0IHdhbnRGb3J3YXJkID0gdHJ1ZSxcbiAgICAgIGJhY2t3YXJkRXhoYXVzdGVkID0gZmFsc2UsXG4gICAgICBmb3J3YXJkRXhoYXVzdGVkID0gZmFsc2UsXG4gICAgICBsb2NhbE9mZnNldCA9IDE7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGl0ZXJhdG9yKCkge1xuICAgIGlmICh3YW50Rm9yd2FyZCAmJiAhZm9yd2FyZEV4aGF1c3RlZCkge1xuICAgICAgaWYgKGJhY2t3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgIGxvY2FsT2Zmc2V0Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YW50Rm9yd2FyZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB0cnlpbmcgdG8gZml0IGJleW9uZCB0ZXh0IGxlbmd0aCwgYW5kIGlmIG5vdCwgY2hlY2sgaXQgZml0c1xuICAgICAgLy8gYWZ0ZXIgb2Zmc2V0IGxvY2F0aW9uIChvciBkZXNpcmVkIGxvY2F0aW9uIG9uIGZpcnN0IGl0ZXJhdGlvbilcbiAgICAgIGlmIChzdGFydCArIGxvY2FsT2Zmc2V0IDw9IG1heExpbmUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsT2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICBmb3J3YXJkRXhoYXVzdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWJhY2t3YXJkRXhoYXVzdGVkKSB7XG4gICAgICBpZiAoIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgd2FudEZvcndhcmQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB0cnlpbmcgdG8gZml0IGJlZm9yZSB0ZXh0IGJlZ2lubmluZywgYW5kIGlmIG5vdCwgY2hlY2sgaXQgZml0c1xuICAgICAgLy8gYmVmb3JlIG9mZnNldCBsb2NhdGlvblxuICAgICAgaWYgKG1pbkxpbmUgPD0gc3RhcnQgLSBsb2NhbE9mZnNldCkge1xuICAgICAgICByZXR1cm4gLWxvY2FsT2Zmc2V0Kys7XG4gICAgICB9XG5cbiAgICAgIGJhY2t3YXJkRXhoYXVzdGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBpdGVyYXRvcigpO1xuICAgIH1cblxuICAgIC8vIFdlIHRyaWVkIHRvIGZpdCBodW5rIGJlZm9yZSB0ZXh0IGJlZ2lubmluZyBhbmQgYmV5b25kIHRleHQgbGVuZ2h0LCB0aGVuXG4gICAgLy8gaHVuayBjYW4ndCBmaXQgb24gdGhlIHRleHQuIFJldHVybiB1bmRlZmluZWRcbiAgfTtcbn1cbiJdfQ==
        /** */
      },
      /* 13 */
      /** */ function(module, exports, __webpack_require__) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.calcLineCount = calcLineCount;
        /* istanbul ignore start*/ exports.merge = merge;

        var /* istanbul ignore start*/ _create = __webpack_require__(14) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _parse = __webpack_require__(11) /* istanbul ignore end*/;

        var /* istanbul ignore start*/ _array = __webpack_require__(15) /* istanbul ignore end*/;

        /* istanbul ignore start*/ function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        /* istanbul ignore end*/ function calcLineCount(hunk) {
          var conflicted = false;

          hunk.oldLines = 0;
          hunk.newLines = 0;

          hunk.lines.forEach(function(line) {
            if (typeof line !== "string") {
              conflicted = true;
              return;
            }

            if (line[0] === "+" || line[0] === " ") {
              hunk.newLines++;
            }
            if (line[0] === "-" || line[0] === " ") {
              hunk.oldLines++;
            }
          });

          if (conflicted) {
            delete hunk.oldLines;
            delete hunk.newLines;
          }
        }

        function merge(mine, theirs, base) {
          mine = loadPatch(mine, base);
          theirs = loadPatch(theirs, base);

          var ret = {};

          // For index we just let it pass through as it doesn't have any necessary meaning.
          // Leaving sanity checks on this to the API consumer that may know more about the
          // meaning in their own context.
          if (mine.index || theirs.index) {
            ret.index = mine.index || theirs.index;
          }

          if (mine.newFileName || theirs.newFileName) {
            if (!fileNameChanged(mine)) {
              // No header or no change in ours, use theirs (and ours if theirs does not exist)
              ret.oldFileName = theirs.oldFileName || mine.oldFileName;
              ret.newFileName = theirs.newFileName || mine.newFileName;
              ret.oldHeader = theirs.oldHeader || mine.oldHeader;
              ret.newHeader = theirs.newHeader || mine.newHeader;
            } else if (!fileNameChanged(theirs)) {
              // No header or no change in theirs, use ours
              ret.oldFileName = mine.oldFileName;
              ret.newFileName = mine.newFileName;
              ret.oldHeader = mine.oldHeader;
              ret.newHeader = mine.newHeader;
            } else {
              // Both changed... figure it out
              ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
              ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
              ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
              ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
            }
          }

          ret.hunks = [];

          var mineIndex = 0,
            theirsIndex = 0,
            mineOffset = 0,
            theirsOffset = 0;

          while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
            var mineCurrent = mine.hunks[mineIndex] || { oldStart: Infinity },
              theirsCurrent = theirs.hunks[theirsIndex] || { oldStart: Infinity };

            if (hunkBefore(mineCurrent, theirsCurrent)) {
              // This patch does not overlap with any of the others, yay.
              ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
              mineIndex++;
              theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
            } else if (hunkBefore(theirsCurrent, mineCurrent)) {
              // This patch does not overlap with any of the others, yay.
              ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
              theirsIndex++;
              mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
            } else {
              // Overlap, merge as best we can
              var mergedHunk = {
                oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
                oldLines: 0,
                newStart: Math.min(
                  mineCurrent.newStart + mineOffset,
                  theirsCurrent.oldStart + theirsOffset
                ),
                newLines: 0,
                lines: []
              };
              mergeLines(
                mergedHunk,
                mineCurrent.oldStart,
                mineCurrent.lines,
                theirsCurrent.oldStart,
                theirsCurrent.lines
              );
              theirsIndex++;
              mineIndex++;

              ret.hunks.push(mergedHunk);
            }
          }

          return ret;
        }

        function loadPatch(param, base) {
          if (typeof param === "string") {
            if (/^@@/m.test(param) || /^Index:/m.test(param)) {
              return /* istanbul ignore start*/ (0, _parse.parsePatch) /* istanbul ignore end*/(
                param
              )[0];
            }

            if (!base) {
              throw new Error("Must provide a base reference or pass in a patch");
            }
            return /* istanbul ignore start*/ (0, _create.structuredPatch) /* istanbul ignore end*/(
              undefined,
              undefined,
              base,
              param
            );
          }

          return param;
        }

        function fileNameChanged(patch) {
          return patch.newFileName && patch.newFileName !== patch.oldFileName;
        }

        function selectField(index, mine, theirs) {
          if (mine === theirs) {
            return mine;
          } else {
            index.conflict = true;
            return { mine: mine, theirs: theirs };
          }
        }

        function hunkBefore(test, check) {
          return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
        }

        function cloneHunk(hunk, offset) {
          return {
            oldStart: hunk.oldStart,
            oldLines: hunk.oldLines,
            newStart: hunk.newStart + offset,
            newLines: hunk.newLines,
            lines: hunk.lines
          };
        }

        function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
          // This will generally result in a conflicted hunk, but there are cases where the context
          // is the only overlap where we can successfully merge the content here.
          var mine = { offset: mineOffset, lines: mineLines, index: 0 },
            their = { offset: theirOffset, lines: theirLines, index: 0 };

          // Handle any leading content
          insertLeading(hunk, mine, their);
          insertLeading(hunk, their, mine);

          // Now in the overlap content. Scan through and select the best changes from each.
          while (mine.index < mine.lines.length && their.index < their.lines.length) {
            var mineCurrent = mine.lines[mine.index],
              theirCurrent = their.lines[their.index];

            if (
              (mineCurrent[0] === "-" || mineCurrent[0] === "+") &&
              (theirCurrent[0] === "-" || theirCurrent[0] === "+")
            ) {
              // Both modified ...
              mutualChange(hunk, mine, their);
            } else if (mineCurrent[0] === "+" && theirCurrent[0] === " ") {
              /* istanbul ignore start*/ var _hunk$lines; // Mine inserted

              /* istanbul ignore end*/ /* istanbul ignore start*/ (_hunk$lines =
                /* istanbul ignore end*/ hunk.lines).push.apply(
                /* istanbul ignore end*/
                /* istanbul ignore start*/ _hunk$lines /* istanbul ignore end*/,
                /* istanbul ignore start*/ _toConsumableArray(
                  /* istanbul ignore end*/ collectChange(mine)
                )
              );
            } else if (theirCurrent[0] === "+" && mineCurrent[0] === " ") {
              /* istanbul ignore start*/ var _hunk$lines2; // Theirs inserted

              /* istanbul ignore end*/ /* istanbul ignore start*/ (_hunk$lines2 =
                /* istanbul ignore end*/ hunk.lines).push.apply(
                /* istanbul ignore end*/
                /* istanbul ignore start*/ _hunk$lines2 /* istanbul ignore end*/,
                /* istanbul ignore start*/ _toConsumableArray(
                  /* istanbul ignore end*/ collectChange(their)
                )
              );
            } else if (mineCurrent[0] === "-" && theirCurrent[0] === " ") {
              // Mine removed or edited
              removal(hunk, mine, their);
            } else if (theirCurrent[0] === "-" && mineCurrent[0] === " ") {
              // Their removed or edited
              removal(hunk, their, mine, true);
            } else if (mineCurrent === theirCurrent) {
              // Context identity
              hunk.lines.push(mineCurrent);
              mine.index++;
              their.index++;
            } else {
              // Context mismatch
              conflict(hunk, collectChange(mine), collectChange(their));
            }
          }

          // Now push anything that may be remaining
          insertTrailing(hunk, mine);
          insertTrailing(hunk, their);

          calcLineCount(hunk);
        }

        function mutualChange(hunk, mine, their) {
          var myChanges = collectChange(mine),
            theirChanges = collectChange(their);

          if (allRemoves(myChanges) && allRemoves(theirChanges)) {
            // Special case for remove changes that are supersets of one another
            if (
              /* istanbul ignore start*/ (0, _array.arrayStartsWith) /* istanbul ignore end*/(
                myChanges,
                theirChanges
              ) &&
              skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)
            ) {
              /* istanbul ignore start*/ var _hunk$lines3;

              /* istanbul ignore end*/ /* istanbul ignore start*/ (_hunk$lines3 =
                /* istanbul ignore end*/ hunk.lines).push.apply(
                /* istanbul ignore end*/
                /* istanbul ignore start*/ _hunk$lines3 /* istanbul ignore end*/,
                /* istanbul ignore start*/ _toConsumableArray(/* istanbul ignore end*/ myChanges)
              );
              return;
            } else if (
              /* istanbul ignore start*/ (0, _array.arrayStartsWith) /* istanbul ignore end*/(
                theirChanges,
                myChanges
              ) &&
              skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)
            ) {
              /* istanbul ignore start*/ var _hunk$lines4;

              /* istanbul ignore end*/ /* istanbul ignore start*/ (_hunk$lines4 =
                /* istanbul ignore end*/ hunk.lines).push.apply(
                /* istanbul ignore end*/
                /* istanbul ignore start*/ _hunk$lines4 /* istanbul ignore end*/,
                /* istanbul ignore start*/ _toConsumableArray(/* istanbul ignore end*/ theirChanges)
              );
              return;
            }
          } else if (
            /* istanbul ignore start*/ (0, _array.arrayEqual) /* istanbul ignore end*/(
              myChanges,
              theirChanges
            )
          ) {
            /* istanbul ignore start*/ var _hunk$lines5;

            /* istanbul ignore end*/ /* istanbul ignore start*/ (_hunk$lines5 =
              /* istanbul ignore end*/ hunk.lines).push.apply(
              /* istanbul ignore end*/
              /* istanbul ignore start*/ _hunk$lines5 /* istanbul ignore end*/,
              /* istanbul ignore start*/ _toConsumableArray(/* istanbul ignore end*/ myChanges)
            );
            return;
          }

          conflict(hunk, myChanges, theirChanges);
        }

        function removal(hunk, mine, their, swap) {
          var myChanges = collectChange(mine),
            theirChanges = collectContext(their, myChanges);
          if (theirChanges.merged) {
            /* istanbul ignore start*/ var _hunk$lines6;

            /* istanbul ignore end*/ /* istanbul ignore start*/ (_hunk$lines6 =
              /* istanbul ignore end*/ hunk.lines).push.apply(
              /* istanbul ignore end*/
              /* istanbul ignore start*/ _hunk$lines6 /* istanbul ignore end*/,
              /* istanbul ignore start*/ _toConsumableArray(
                /* istanbul ignore end*/ theirChanges.merged
              )
            );
          } else {
            conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
          }
        }

        function conflict(hunk, mine, their) {
          hunk.conflict = true;
          hunk.lines.push({
            conflict: true,
            mine: mine,
            theirs: their
          });
        }

        function insertLeading(hunk, insert, their) {
          while (insert.offset < their.offset && insert.index < insert.lines.length) {
            var line = insert.lines[insert.index++];
            hunk.lines.push(line);
            insert.offset++;
          }
        }
        function insertTrailing(hunk, insert) {
          while (insert.index < insert.lines.length) {
            var line = insert.lines[insert.index++];
            hunk.lines.push(line);
          }
        }

        function collectChange(state) {
          var ret = [],
            operation = state.lines[state.index][0];
          while (state.index < state.lines.length) {
            var line = state.lines[state.index];

            // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.
            if (operation === "-" && line[0] === "+") {
              operation = "+";
            }

            if (operation === line[0]) {
              ret.push(line);
              state.index++;
            } else {
              break;
            }
          }

          return ret;
        }
        function collectContext(state, matchChanges) {
          var changes = [],
            merged = [],
            matchIndex = 0,
            contextChanges = false,
            conflicted = false;
          while (matchIndex < matchChanges.length && state.index < state.lines.length) {
            var change = state.lines[state.index],
              match = matchChanges[matchIndex];

            // Once we've hit our add, then we are done
            if (match[0] === "+") {
              break;
            }

            contextChanges = contextChanges || change[0] !== " ";

            merged.push(match);
            matchIndex++;

            // Consume any additions in the other block as a conflict to attempt
            // to pull in the remaining context after this
            if (change[0] === "+") {
              conflicted = true;

              while (change[0] === "+") {
                changes.push(change);
                change = state.lines[++state.index];
              }
            }

            if (match.substr(1) === change.substr(1)) {
              changes.push(change);
              state.index++;
            } else {
              conflicted = true;
            }
          }

          if ((matchChanges[matchIndex] || "")[0] === "+" && contextChanges) {
            conflicted = true;
          }

          if (conflicted) {
            return changes;
          }

          while (matchIndex < matchChanges.length) {
            merged.push(matchChanges[matchIndex++]);
          }

          return {
            merged: merged,
            changes: changes
          };
        }

        function allRemoves(changes) {
          return changes.reduce(function(prev, change) {
            return prev && change[0] === "-";
          }, true);
        }
        function skipRemoveSuperset(state, removeChanges, delta) {
          for (var i = 0; i < delta; i++) {
            var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
            if (state.lines[state.index + i] !== " " + changeContent) {
              return false;
            }
          }

          state.index += delta;
          return true;
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9tZXJnZS5qcyJdLCJuYW1lcyI6WyJjYWxjTGluZUNvdW50IiwibWVyZ2UiLCJodW5rIiwiY29uZmxpY3RlZCIsIm9sZExpbmVzIiwibmV3TGluZXMiLCJsaW5lcyIsImZvckVhY2giLCJsaW5lIiwibWluZSIsInRoZWlycyIsImJhc2UiLCJsb2FkUGF0Y2giLCJyZXQiLCJpbmRleCIsIm5ld0ZpbGVOYW1lIiwiZmlsZU5hbWVDaGFuZ2VkIiwib2xkRmlsZU5hbWUiLCJvbGRIZWFkZXIiLCJuZXdIZWFkZXIiLCJzZWxlY3RGaWVsZCIsImh1bmtzIiwibWluZUluZGV4IiwidGhlaXJzSW5kZXgiLCJtaW5lT2Zmc2V0IiwidGhlaXJzT2Zmc2V0IiwibGVuZ3RoIiwibWluZUN1cnJlbnQiLCJvbGRTdGFydCIsIkluZmluaXR5IiwidGhlaXJzQ3VycmVudCIsImh1bmtCZWZvcmUiLCJwdXNoIiwiY2xvbmVIdW5rIiwibWVyZ2VkSHVuayIsIk1hdGgiLCJtaW4iLCJuZXdTdGFydCIsIm1lcmdlTGluZXMiLCJwYXJhbSIsInRlc3QiLCJFcnJvciIsInVuZGVmaW5lZCIsInBhdGNoIiwiY29uZmxpY3QiLCJjaGVjayIsIm9mZnNldCIsIm1pbmVMaW5lcyIsInRoZWlyT2Zmc2V0IiwidGhlaXJMaW5lcyIsInRoZWlyIiwiaW5zZXJ0TGVhZGluZyIsInRoZWlyQ3VycmVudCIsIm11dHVhbENoYW5nZSIsImNvbGxlY3RDaGFuZ2UiLCJyZW1vdmFsIiwiaW5zZXJ0VHJhaWxpbmciLCJteUNoYW5nZXMiLCJ0aGVpckNoYW5nZXMiLCJhbGxSZW1vdmVzIiwic2tpcFJlbW92ZVN1cGVyc2V0Iiwic3dhcCIsImNvbGxlY3RDb250ZXh0IiwibWVyZ2VkIiwiaW5zZXJ0Iiwic3RhdGUiLCJvcGVyYXRpb24iLCJtYXRjaENoYW5nZXMiLCJjaGFuZ2VzIiwibWF0Y2hJbmRleCIsImNvbnRleHRDaGFuZ2VzIiwiY2hhbmdlIiwibWF0Y2giLCJzdWJzdHIi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QU8vQixJQUFQLENBQVltQyxhQUFhRSxZQUFiLENBQVo7QUFDRDs7QUFFRCxTQUFPO0FBQ0xOLGtCQURLO0FBRUxLO0FBRkssR0FBUDtBQUlEOztBQUVELFNBQVNULFVBQVQsQ0FBb0JTLE9BQXBCLEVBQTZCO0FBQzNCLFNBQU9BLFFBQVFNLE1BQVIsQ0FBZSxVQUFTQyxJQUFULEVBQWVKLE1BQWYsRUFBdUI7QUFDM0MsV0FBT0ksUUFBUUosT0FBTyxDQUFQLE1BQWMsR0FBN0I7QUFDRCxHQUZNLEVBRUosSUFGSSxDQUFQO0FBR0Q7QUFDRCxTQUFTWCxrQkFBVCxDQUE0QkssS0FBNUIsRUFBbUNXLGFBQW5DLEVBQWtEQyxLQUFsRCxFQUF5RDtBQUN2RCxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsS0FBcEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzlCLFFBQUlDLGdCQUFnQkgsY0FBY0EsY0FBY2xELE1BQWQsR0FBdUJtRCxLQUF2QixHQUErQkMsQ0FBN0MsRUFBZ0RMLE1BQWhELENBQXVELENBQXZELENBQXBCO0FBQ0EsUUFBSVIsTUFBTTNELEtBQU4sQ0FBWTJELE1BQU1uRCxLQUFOLEdBQWNnRSxDQUExQixNQUFpQyxNQUFNQyxhQUEzQyxFQUEwRDtBQUN4RCxhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVEZCxRQUFNbkQsS0FBTixJQUFlK0QsS0FBZjtBQUNBLFNBQU8sSUFBUDtBQUNEIiwiZmlsZSI6Im1lcmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzdHJ1Y3R1cmVkUGF0Y2h9IGZyb20gJy4vY3JlYXRlJztcbmltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XG5cbmltcG9ydCB7YXJyYXlFcXVhbCwgYXJyYXlTdGFydHNXaXRofSBmcm9tICcuLi91dGlsL2FycmF5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNMaW5lQ291bnQoaHVuaykge1xuICBsZXQgY29uZmxpY3RlZCA9IGZhbHNlO1xuXG4gIGh1bmsub2xkTGluZXMgPSAwO1xuICBodW5rLm5ld0xpbmVzID0gMDtcblxuICBodW5rLmxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgIGlmICh0eXBlb2YgbGluZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChsaW5lWzBdID09PSAnKycgfHwgbGluZVswXSA9PT0gJyAnKSB7XG4gICAgICBodW5rLm5ld0xpbmVzKys7XG4gICAgfVxuICAgIGlmIChsaW5lWzBdID09PSAnLScgfHwgbGluZVswXSA9PT0gJyAnKSB7XG4gICAgICBodW5rLm9sZExpbmVzKys7XG4gICAgfVxuICB9KTtcblxuICBpZiAoY29uZmxpY3RlZCkge1xuICAgIGRlbGV0ZSBodW5rLm9sZExpbmVzO1xuICAgIGRlbGV0ZSBodW5rLm5ld0xpbmVzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShtaW5lLCB0aGVpcnMsIGJhc2UpIHtcbiAgbWluZSA9IGxvYWRQYXRjaChtaW5lLCBiYXNlKTtcbiAgdGhlaXJzID0gbG9hZFBhdGNoKHRoZWlycywgYmFzZSk7XG5cbiAgbGV0IHJldCA9IHt9O1xuXG4gIC8vIEZvciBpbmRleCB3ZSBqdXN0IGxldCBpdCBwYXNzIHRocm91Z2ggYXMgaXQgZG9lc24ndCBoYXZlIGFueSBuZWNlc3NhcnkgbWVhbmluZy5cbiAgLy8gTGVhdmluZyBzYW5pdHkgY2hlY2tzIG9uIHRoaXMgdG8gdGhlIEFQSSBjb25zdW1lciB0aGF0IG1heSBrbm93IG1vcmUgYWJvdXQgdGhlXG4gIC8vIG1lYW5pbmcgaW4gdGhlaXIgb3duIGNvbnRleHQuXG4gIGlmIChtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleCkge1xuICAgIHJldC5pbmRleCA9IG1pbmUuaW5kZXggfHwgdGhlaXJzLmluZGV4O1xuICB9XG5cbiAgaWYgKG1pbmUubmV3RmlsZU5hbWUgfHwgdGhlaXJzLm5ld0ZpbGVOYW1lKSB7XG4gICAgaWYgKCFmaWxlTmFtZUNoYW5nZWQobWluZSkpIHtcbiAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gb3VycywgdXNlIHRoZWlycyAoYW5kIG91cnMgaWYgdGhlaXJzIGRvZXMgbm90IGV4aXN0KVxuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gdGhlaXJzLm9sZEZpbGVOYW1lIHx8IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSB0aGVpcnMubmV3RmlsZU5hbWUgfHwgbWluZS5uZXdGaWxlTmFtZTtcbiAgICAgIHJldC5vbGRIZWFkZXIgPSB0aGVpcnMub2xkSGVhZGVyIHx8IG1pbmUub2xkSGVhZGVyO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IHRoZWlycy5uZXdIZWFkZXIgfHwgbWluZS5uZXdIZWFkZXI7XG4gICAgfSBlbHNlIGlmICghZmlsZU5hbWVDaGFuZ2VkKHRoZWlycykpIHtcbiAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gdGhlaXJzLCB1c2Ugb3Vyc1xuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gbWluZS5vbGRGaWxlTmFtZTtcbiAgICAgIHJldC5uZXdGaWxlTmFtZSA9IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICByZXQub2xkSGVhZGVyID0gbWluZS5vbGRIZWFkZXI7XG4gICAgICByZXQubmV3SGVhZGVyID0gbWluZS5uZXdIZWFkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJvdGggY2hhbmdlZC4uLiBmaWd1cmUgaXQgb3V0XG4gICAgICByZXQub2xkRmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUub2xkRmlsZU5hbWUsIHRoZWlycy5vbGRGaWxlTmFtZSk7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUubmV3RmlsZU5hbWUsIHRoZWlycy5uZXdGaWxlTmFtZSk7XG4gICAgICByZXQub2xkSGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEhlYWRlciwgdGhlaXJzLm9sZEhlYWRlcik7XG4gICAgICByZXQubmV3SGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0hlYWRlciwgdGhlaXJzLm5ld0hlYWRlcik7XG4gICAgfVxuICB9XG5cbiAgcmV0Lmh1bmtzID0gW107XG5cbiAgbGV0IG1pbmVJbmRleCA9IDAsXG4gICAgICB0aGVpcnNJbmRleCA9IDAsXG4gICAgICBtaW5lT2Zmc2V0ID0gMCxcbiAgICAgIHRoZWlyc09mZnNldCA9IDA7XG5cbiAgd2hpbGUgKG1pbmVJbmRleCA8IG1pbmUuaHVua3MubGVuZ3RoIHx8IHRoZWlyc0luZGV4IDwgdGhlaXJzLmh1bmtzLmxlbmd0aCkge1xuICAgIGxldCBtaW5lQ3VycmVudCA9IG1pbmUuaHVua3NbbWluZUluZGV4XSB8fCB7b2xkU3RhcnQ6IEluZmluaXR5fSxcbiAgICAgICAgdGhlaXJzQ3VycmVudCA9IHRoZWlycy5odW5rc1t0aGVpcnNJbmRleF0gfHwge29sZFN0YXJ0OiBJbmZpbml0eX07XG5cbiAgICBpZiAoaHVua0JlZm9yZShtaW5lQ3VycmVudCwgdGhlaXJzQ3VycmVudCkpIHtcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsobWluZUN1cnJlbnQsIG1pbmVPZmZzZXQpKTtcbiAgICAgIG1pbmVJbmRleCsrO1xuICAgICAgdGhlaXJzT2Zmc2V0ICs9IG1pbmVDdXJyZW50Lm5ld0xpbmVzIC0gbWluZUN1cnJlbnQub2xkTGluZXM7XG4gICAgfSBlbHNlIGlmIChodW5rQmVmb3JlKHRoZWlyc0N1cnJlbnQsIG1pbmVDdXJyZW50KSkge1xuICAgICAgLy8gVGhpcyBwYXRjaCBkb2VzIG5vdCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBvdGhlcnMsIHlheS5cbiAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayh0aGVpcnNDdXJyZW50LCB0aGVpcnNPZmZzZXQpKTtcbiAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICBtaW5lT2Zmc2V0ICs9IHRoZWlyc0N1cnJlbnQubmV3TGluZXMgLSB0aGVpcnNDdXJyZW50Lm9sZExpbmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdmVybGFwLCBtZXJnZSBhcyBiZXN0IHdlIGNhblxuICAgICAgbGV0IG1lcmdlZEh1bmsgPSB7XG4gICAgICAgIG9sZFN0YXJ0OiBNYXRoLm1pbihtaW5lQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCksXG4gICAgICAgIG9sZExpbmVzOiAwLFxuICAgICAgICBuZXdTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQubmV3U3RhcnQgKyBtaW5lT2Zmc2V0LCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0ICsgdGhlaXJzT2Zmc2V0KSxcbiAgICAgICAgbmV3TGluZXM6IDAsXG4gICAgICAgIGxpbmVzOiBbXVxuICAgICAgfTtcbiAgICAgIG1lcmdlTGluZXMobWVyZ2VkSHVuaywgbWluZUN1cnJlbnQub2xkU3RhcnQsIG1pbmVDdXJyZW50LmxpbmVzLCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0LCB0aGVpcnNDdXJyZW50LmxpbmVzKTtcbiAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICBtaW5lSW5kZXgrKztcblxuICAgICAgcmV0Lmh1bmtzLnB1c2gobWVyZ2VkSHVuayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbG9hZFBhdGNoKHBhcmFtLCBiYXNlKSB7XG4gIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKC9eQEAvbS50ZXN0KHBhcmFtKSB8fCAoL15JbmRleDovbS50ZXN0KHBhcmFtKSkpIHtcbiAgICAgIHJldHVybiBwYXJzZVBhdGNoKHBhcmFtKVswXTtcbiAgICB9XG5cbiAgICBpZiAoIWJhc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGEgYmFzZSByZWZlcmVuY2Ugb3IgcGFzcyBpbiBhIHBhdGNoJyk7XG4gICAgfVxuICAgIHJldHVybiBzdHJ1Y3R1cmVkUGF0Y2godW5kZWZpbmVkLCB1bmRlZmluZWQsIGJhc2UsIHBhcmFtKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbTtcbn1cblxuZnVuY3Rpb24gZmlsZU5hbWVDaGFuZ2VkKHBhdGNoKSB7XG4gIHJldHVybiBwYXRjaC5uZXdGaWxlTmFtZSAmJiBwYXRjaC5uZXdGaWxlTmFtZSAhPT0gcGF0Y2gub2xkRmlsZU5hbWU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEZpZWxkKGluZGV4LCBtaW5lLCB0aGVpcnMpIHtcbiAgaWYgKG1pbmUgPT09IHRoZWlycykge1xuICAgIHJldHVybiBtaW5lO1xuICB9IGVsc2Uge1xuICAgIGluZGV4LmNvbmZsaWN0ID0gdHJ1ZTtcbiAgICByZXR1cm4ge21pbmUsIHRoZWlyc307XG4gIH1cbn1cblxuZnVuY3Rpb24gaHVua0JlZm9yZSh0ZXN0LCBjaGVjaykge1xuICByZXR1cm4gdGVzdC5vbGRTdGFydCA8IGNoZWNrLm9sZFN0YXJ0XG4gICAgJiYgKHRlc3Qub2xkU3RhcnQgKyB0ZXN0Lm9sZExpbmVzKSA8IGNoZWNrLm9sZFN0YXJ0O1xufVxuXG5mdW5jdGlvbiBjbG9uZUh1bmsoaHVuaywgb2Zmc2V0KSB7XG4gIHJldHVybiB7XG4gICAgb2xkU3RhcnQ6IGh1bmsub2xkU3RhcnQsIG9sZExpbmVzOiBodW5rLm9sZExpbmVzLFxuICAgIG5ld1N0YXJ0OiBodW5rLm5ld1N0YXJ0ICsgb2Zmc2V0LCBuZXdMaW5lczogaHVuay5uZXdMaW5lcyxcbiAgICBsaW5lczogaHVuay5saW5lc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZUxpbmVzKGh1bmssIG1pbmVPZmZzZXQsIG1pbmVMaW5lcywgdGhlaXJPZmZzZXQsIHRoZWlyTGluZXMpIHtcbiAgLy8gVGhpcyB3aWxsIGdlbmVyYWxseSByZXN1bHQgaW4gYSBjb25mbGljdGVkIGh1bmssIGJ1dCB0aGVyZSBhcmUgY2FzZXMgd2hlcmUgdGhlIGNvbnRleHRcbiAgLy8gaXMgdGhlIG9ubHkgb3ZlcmxhcCB3aGVyZSB3ZSBjYW4gc3VjY2Vzc2Z1bGx5IG1lcmdlIHRoZSBjb250ZW50IGhlcmUuXG4gIGxldCBtaW5lID0ge29mZnNldDogbWluZU9mZnNldCwgbGluZXM6IG1pbmVMaW5lcywgaW5kZXg6IDB9LFxuICAgICAgdGhlaXIgPSB7b2Zmc2V0OiB0aGVpck9mZnNldCwgbGluZXM6IHRoZWlyTGluZXMsIGluZGV4OiAwfTtcblxuICAvLyBIYW5kbGUgYW55IGxlYWRpbmcgY29udGVudFxuICBpbnNlcnRMZWFkaW5nKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgaW5zZXJ0TGVhZGluZyhodW5rLCB0aGVpciwgbWluZSk7XG5cbiAgLy8gTm93IGluIHRoZSBvdmVybGFwIGNvbnRlbnQuIFNjYW4gdGhyb3VnaCBhbmQgc2VsZWN0IHRoZSBiZXN0IGNoYW5nZXMgZnJvbSBlYWNoLlxuICB3aGlsZSAobWluZS5pbmRleCA8IG1pbmUubGluZXMubGVuZ3RoICYmIHRoZWlyLmluZGV4IDwgdGhlaXIubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IG1pbmVDdXJyZW50ID0gbWluZS5saW5lc1ttaW5lLmluZGV4XSxcbiAgICAgICAgdGhlaXJDdXJyZW50ID0gdGhlaXIubGluZXNbdGhlaXIuaW5kZXhdO1xuXG4gICAgaWYgKChtaW5lQ3VycmVudFswXSA9PT0gJy0nIHx8IG1pbmVDdXJyZW50WzBdID09PSAnKycpXG4gICAgICAgICYmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyB8fCB0aGVpckN1cnJlbnRbMF0gPT09ICcrJykpIHtcbiAgICAgIC8vIEJvdGggbW9kaWZpZWQgLi4uXG4gICAgICBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICcrJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gTWluZSBpbnNlcnRlZFxuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBjb2xsZWN0Q2hhbmdlKG1pbmUpKTtcbiAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJysnICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIFRoZWlycyBpbnNlcnRlZFxuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBjb2xsZWN0Q2hhbmdlKHRoZWlyKSk7XG4gICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJy0nICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvLyBNaW5lIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIFRoZWlyIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICByZW1vdmFsKGh1bmssIHRoZWlyLCBtaW5lLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50ID09PSB0aGVpckN1cnJlbnQpIHtcbiAgICAgIC8vIENvbnRleHQgaWRlbnRpdHlcbiAgICAgIGh1bmsubGluZXMucHVzaChtaW5lQ3VycmVudCk7XG4gICAgICBtaW5lLmluZGV4Kys7XG4gICAgICB0aGVpci5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb250ZXh0IG1pc21hdGNoXG4gICAgICBjb25mbGljdChodW5rLCBjb2xsZWN0Q2hhbmdlKG1pbmUpLCBjb2xsZWN0Q2hhbmdlKHRoZWlyKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTm93IHB1c2ggYW55dGhpbmcgdGhhdCBtYXkgYmUgcmVtYWluaW5nXG4gIGluc2VydFRyYWlsaW5nKGh1bmssIG1pbmUpO1xuICBpbnNlcnRUcmFpbGluZyhodW5rLCB0aGVpcik7XG5cbiAgY2FsY0xpbmVDb3VudChodW5rKTtcbn1cblxuZnVuY3Rpb24gbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKSB7XG4gIGxldCBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENoYW5nZSh0aGVpcik7XG5cbiAgaWYgKGFsbFJlbW92ZXMobXlDaGFuZ2VzKSAmJiBhbGxSZW1vdmVzKHRoZWlyQ2hhbmdlcykpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHJlbW92ZSBjaGFuZ2VzIHRoYXQgYXJlIHN1cGVyc2V0cyBvZiBvbmUgYW5vdGhlclxuICAgIGlmIChhcnJheVN0YXJ0c1dpdGgobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpXG4gICAgICAgICYmIHNraXBSZW1vdmVTdXBlcnNldCh0aGVpciwgbXlDaGFuZ2VzLCBteUNoYW5nZXMubGVuZ3RoIC0gdGhlaXJDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgIGh1bmsubGluZXMucHVzaCguLi4gbXlDaGFuZ2VzKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGFycmF5U3RhcnRzV2l0aCh0aGVpckNoYW5nZXMsIG15Q2hhbmdlcylcbiAgICAgICAgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KG1pbmUsIHRoZWlyQ2hhbmdlcywgdGhlaXJDaGFuZ2VzLmxlbmd0aCAtIG15Q2hhbmdlcy5sZW5ndGgpKSB7XG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIHRoZWlyQ2hhbmdlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2UgaWYgKGFycmF5RXF1YWwobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpKSB7XG4gICAgaHVuay5saW5lcy5wdXNoKC4uLiBteUNoYW5nZXMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbmZsaWN0KGh1bmssIG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZhbChodW5rLCBtaW5lLCB0aGVpciwgc3dhcCkge1xuICBsZXQgbXlDaGFuZ2VzID0gY29sbGVjdENoYW5nZShtaW5lKSxcbiAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDb250ZXh0KHRoZWlyLCBteUNoYW5nZXMpO1xuICBpZiAodGhlaXJDaGFuZ2VzLm1lcmdlZCkge1xuICAgIGh1bmsubGluZXMucHVzaCguLi4gdGhlaXJDaGFuZ2VzLm1lcmdlZCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmxpY3QoaHVuaywgc3dhcCA/IHRoZWlyQ2hhbmdlcyA6IG15Q2hhbmdlcywgc3dhcCA/IG15Q2hhbmdlcyA6IHRoZWlyQ2hhbmdlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uZmxpY3QoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgaHVuay5jb25mbGljdCA9IHRydWU7XG4gIGh1bmsubGluZXMucHVzaCh7XG4gICAgY29uZmxpY3Q6IHRydWUsXG4gICAgbWluZTogbWluZSxcbiAgICB0aGVpcnM6IHRoZWlyXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRMZWFkaW5nKGh1bmssIGluc2VydCwgdGhlaXIpIHtcbiAgd2hpbGUgKGluc2VydC5vZmZzZXQgPCB0aGVpci5vZmZzZXQgJiYgaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gICAgaW5zZXJ0Lm9mZnNldCsrO1xuICB9XG59XG5mdW5jdGlvbiBpbnNlcnRUcmFpbGluZyhodW5rLCBpbnNlcnQpIHtcbiAgd2hpbGUgKGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RDaGFuZ2Uoc3RhdGUpIHtcbiAgbGV0IHJldCA9IFtdLFxuICAgICAgb3BlcmF0aW9uID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdWzBdO1xuICB3aGlsZSAoc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbGluZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XTtcblxuICAgIC8vIEdyb3VwIGFkZGl0aW9ucyB0aGF0IGFyZSBpbW1lZGlhdGVseSBhZnRlciBzdWJ0cmFjdGlvbnMgYW5kIHRyZWF0IHRoZW0gYXMgb25lIFwiYXRvbWljXCIgbW9kaWZ5IGNoYW5nZS5cbiAgICBpZiAob3BlcmF0aW9uID09PSAnLScgJiYgbGluZVswXSA9PT0gJysnKSB7XG4gICAgICBvcGVyYXRpb24gPSAnKyc7XG4gICAgfVxuXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gbGluZVswXSkge1xuICAgICAgcmV0LnB1c2gobGluZSk7XG4gICAgICBzdGF0ZS5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gY29sbGVjdENvbnRleHQoc3RhdGUsIG1hdGNoQ2hhbmdlcykge1xuICBsZXQgY2hhbmdlcyA9IFtdLFxuICAgICAgbWVyZ2VkID0gW10sXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIGNvbnRleHRDaGFuZ2VzID0gZmFsc2UsXG4gICAgICBjb25mbGljdGVkID0gZmFsc2U7XG4gIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aFxuICAgICAgICAmJiBzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBjaGFuZ2UgPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF0sXG4gICAgICAgIG1hdGNoID0gbWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdO1xuXG4gICAgLy8gT25jZSB3ZSd2ZSBoaXQgb3VyIGFkZCwgdGhlbiB3ZSBhcmUgZG9uZVxuICAgIGlmIChtYXRjaFswXSA9PT0gJysnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb250ZXh0Q2hhbmdlcyA9IGNvbnRleHRDaGFuZ2VzIHx8IGNoYW5nZVswXSAhPT0gJyAnO1xuXG4gICAgbWVyZ2VkLnB1c2gobWF0Y2gpO1xuICAgIG1hdGNoSW5kZXgrKztcblxuICAgIC8vIENvbnN1bWUgYW55IGFkZGl0aW9ucyBpbiB0aGUgb3RoZXIgYmxvY2sgYXMgYSBjb25mbGljdCB0byBhdHRlbXB0XG4gICAgLy8gdG8gcHVsbCBpbiB0aGUgcmVtYWluaW5nIGNvbnRleHQgYWZ0ZXIgdGhpc1xuICAgIGlmIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG5cbiAgICAgIHdoaWxlIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgY2hhbmdlID0gc3RhdGUubGluZXNbKytzdGF0ZS5pbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLnN1YnN0cigxKSA9PT0gY2hhbmdlLnN1YnN0cigxKSkge1xuICAgICAgY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICBzdGF0ZS5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XSB8fCAnJylbMF0gPT09ICcrJ1xuICAgICAgJiYgY29udGV4dENoYW5nZXMpIHtcbiAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChjb25mbGljdGVkKSB7XG4gICAgcmV0dXJuIGNoYW5nZXM7XG4gIH1cblxuICB3aGlsZSAobWF0Y2hJbmRleCA8IG1hdGNoQ2hhbmdlcy5sZW5ndGgpIHtcbiAgICBtZXJnZWQucHVzaChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleCsrXSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1lcmdlZCxcbiAgICBjaGFuZ2VzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFsbFJlbW92ZXMoY2hhbmdlcykge1xuICByZXR1cm4gY2hhbmdlcy5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY2hhbmdlKSB7XG4gICAgcmV0dXJuIHByZXYgJiYgY2hhbmdlWzBdID09PSAnLSc7XG4gIH0sIHRydWUpO1xufVxuZnVuY3Rpb24gc2tpcFJlbW92ZVN1cGVyc2V0KHN0YXRlLCByZW1vdmVDaGFuZ2VzLCBkZWx0YSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbHRhOyBpKyspIHtcbiAgICBsZXQgY2hhbmdlQ29udGVudCA9IHJlbW92ZUNoYW5nZXNbcmVtb3ZlQ2hhbmdlcy5sZW5ndGggLSBkZWx0YSArIGldLnN1YnN0cigxKTtcbiAgICBpZiAoc3RhdGUubGluZXNbc3RhdGUuaW5kZXggKyBpXSAhPT0gJyAnICsgY2hhbmdlQ29udGVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmluZGV4ICs9IGRlbHRhO1xuICByZXR1cm4gdHJ1ZTtcbn1cbiJdfQ==
        /** */
      },
      /* 14 */
      /** */ function(module, exports, __webpack_require__) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.structuredPatch = structuredPatch;
        /* istanbul ignore start*/ exports.createTwoFilesPatch = createTwoFilesPatch;
        /* istanbul ignore start*/ exports.createPatch = createPatch;

        var /* istanbul ignore start*/ _line = __webpack_require__(5) /* istanbul ignore end*/;

        /* istanbul ignore start*/ function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        /* istanbul ignore end*/ function structuredPatch(
          oldFileName,
          newFileName,
          oldStr,
          newStr,
          oldHeader,
          newHeader,
          options
        ) {
          if (!options) {
            options = {};
          }
          if (typeof options.context === "undefined") {
            options.context = 4;
          }

          var diff = /* istanbul ignore start*/ (0, _line.diffLines) /* istanbul ignore end*/(
            oldStr,
            newStr,
            options
          );
          diff.push({ value: "", lines: [] }); // Append an empty value to make cleanup easier

          function contextLines(lines) {
            return lines.map(function(entry) {
              return " " + entry;
            });
          }

          var hunks = [];
          var oldRangeStart = 0,
            newRangeStart = 0,
            curRange = [],
            oldLine = 1,
            newLine = 1;

          /* istanbul ignore start*/ var _loop = function _loop(/* istanbul ignore end*/ i) {
            var current = diff[i],
              lines = current.lines || current.value.replace(/\n$/, "").split("\n");
            current.lines = lines;

            if (current.added || current.removed) {
              /* istanbul ignore start*/ var _curRange; // If we have previous context, start with that

              /* istanbul ignore end*/ if (!oldRangeStart) {
                var prev = diff[i - 1];
                oldRangeStart = oldLine;
                newRangeStart = newLine;

                if (prev) {
                  curRange =
                    options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
                  oldRangeStart -= curRange.length;
                  newRangeStart -= curRange.length;
                }
              }

              // Output our changes
              /* istanbul ignore start*/ (_curRange = /* istanbul ignore end*/ curRange).push.apply(
                /* istanbul ignore end*/
                /* istanbul ignore start*/ _curRange /* istanbul ignore end*/,
                /* istanbul ignore start*/ _toConsumableArray(
                  /* istanbul ignore end*/ lines.map(function(entry) {
                    return (current.added ? "+" : "-") + entry;
                  })
                )
              );

              // Track the updated file position
              if (current.added) {
                newLine += lines.length;
              } else {
                oldLine += lines.length;
              }
            } else {
              // Identical context lines. Track line changes
              if (oldRangeStart) {
                // Close out any changes that have been output (or join overlapping)
                if (lines.length <= options.context * 2 && i < diff.length - 2) {
                  /* istanbul ignore start*/ var _curRange2; // Overlapping

                  /* istanbul ignore end*/ /* istanbul ignore start*/ (_curRange2 = /* istanbul ignore end*/ curRange).push.apply(
                    /* istanbul ignore end*/
                    /* istanbul ignore start*/ _curRange2 /* istanbul ignore end*/,
                    /* istanbul ignore start*/ _toConsumableArray(
                      /* istanbul ignore end*/ contextLines(lines)
                    )
                  );
                } else {
                  /* istanbul ignore start*/ var _curRange3; // end the range and output

                  /* istanbul ignore end*/ var contextSize = Math.min(
                    lines.length,
                    options.context
                  );
                  /* istanbul ignore start*/ (_curRange3 = /* istanbul ignore end*/ curRange).push.apply(
                    /* istanbul ignore end*/
                    /* istanbul ignore start*/ _curRange3 /* istanbul ignore end*/,
                    /* istanbul ignore start*/ _toConsumableArray(
                      /* istanbul ignore end*/ contextLines(lines.slice(0, contextSize))
                    )
                  );

                  var hunk = {
                    oldStart: oldRangeStart,
                    oldLines: oldLine - oldRangeStart + contextSize,
                    newStart: newRangeStart,
                    newLines: newLine - newRangeStart + contextSize,
                    lines: curRange
                  };
                  if (i >= diff.length - 2 && lines.length <= options.context) {
                    // EOF is inside this hunk
                    var oldEOFNewline = /\n$/.test(oldStr);
                    var newEOFNewline = /\n$/.test(newStr);
                    if (lines.length == 0 && !oldEOFNewline) {
                      // special case: old has no eol and no trailing context; no-nl can end up before adds
                      curRange.splice(hunk.oldLines, 0, "\\ No newline at end of file");
                    } else if (!oldEOFNewline || !newEOFNewline) {
                      curRange.push("\\ No newline at end of file");
                    }
                  }
                  hunks.push(hunk);

                  oldRangeStart = 0;
                  newRangeStart = 0;
                  curRange = [];
                }
              }
              oldLine += lines.length;
              newLine += lines.length;
            }
          };

          for (var i = 0; i < diff.length; i++) {
            /* istanbul ignore start*/ _loop(/* istanbul ignore end*/ i);
          }

          return {
            oldFileName: oldFileName,
            newFileName: newFileName,
            oldHeader: oldHeader,
            newHeader: newHeader,
            hunks: hunks
          };
        }

        function createTwoFilesPatch(
          oldFileName,
          newFileName,
          oldStr,
          newStr,
          oldHeader,
          newHeader,
          options
        ) {
          var diff = structuredPatch(
            oldFileName,
            newFileName,
            oldStr,
            newStr,
            oldHeader,
            newHeader,
            options
          );

          var ret = [];
          if (oldFileName == newFileName) {
            ret.push("Index: " + oldFileName);
          }
          ret.push("===================================================================");
          ret.push(
            "--- " +
              diff.oldFileName +
              (typeof diff.oldHeader === "undefined" ? "" : "\t" + diff.oldHeader)
          );
          ret.push(
            "+++ " +
              diff.newFileName +
              (typeof diff.newHeader === "undefined" ? "" : "\t" + diff.newHeader)
          );

          for (var i = 0; i < diff.hunks.length; i++) {
            var hunk = diff.hunks[i];
            ret.push(
              "@@ -" +
                hunk.oldStart +
                "," +
                hunk.oldLines +
                " +" +
                hunk.newStart +
                "," +
                hunk.newLines +
                " @@"
            );
            ret.push.apply(ret, hunk.lines);
          }

          return ret.join("\n") + "\n";
        }

        function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
          return createTwoFilesPatch(
            fileName,
            fileName,
            oldStr,
            newStr,
            oldHeader,
            newHeader,
            options
          );
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9jcmVhdGUuanMiXSwibmFtZXMiOlsic3RydWN0dXJlZFBhdGNoIiwiY3JlYXRlVHdvRmlsZXNQYXRjaCIsImNyZWF0ZVBhdGNoIiwib2xkRmlsZU5hbWUiLCJuZXdGaWxlTmFtZSIsIm9sZFN0ciIsIm5ld1N0ciIsIm9sZEhlYWRlciIsIm5ld0hlYWRlciIsIm9wdGlvbnMiLCJjb250ZXh0IiwiZGlmZiIsInB1c2giLCJ2YWx1ZSIsImxpbmVzIiwiY29udGV4dExpbmVzIiwibWFwIiwiZW50cnkiLCJodW5rcyIsIm9sZFJhbmdlU3RhcnQiLCJuZXdSYW5nZVN0YXJ0IiwiY3VyUmFuZ2UiLCJvbGRMaW5lIiwibmV3TGluZSIsImkiLCJjdXJyZW50IiwicmVwbGFjZSIsInNwbGl0IiwiYWRkZWQiLCJyZW1vdmVkIiwicHJldiIsInNsaWNlIiwibGVuZ3RoIiwiY29udGV4dFNpemUiLCJNYXRoIiwibWluIiwiaHVuayIsIm9sZFN0YXJ0Iiwib2xkTGluZXMiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwib2xkRU9GTmV3bGluZSIsInRlc3QiLCJuZXdFT0ZOZXdsaW5lIiwic3BsaWNlIiwicmV0IiwiYXBwbHkiLCJqb2luIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7O2dDQUVnQkEsZSxHQUFBQSxlO3lEQWlHQUMsbUIsR0FBQUEsbUI7eURBd0JBQyxXLEdBQUFBLFc7O0FBM0hoQjs7Ozt1QkFFTyxTQUFTRixlQUFULENBQXlCRyxXQUF6QixFQUFzQ0MsV0FBdEMsRUFBbURDLE1BQW5ELEVBQTJEQyxNQUEzRCxFQUFtRUMsU0FBbkUsRUFBOEVDLFNBQTlFLEVBQXlGQyxPQUF6RixFQUFrRztBQUN2RyxNQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaQSxjQUFVLEVBQVY7QUFDRDtBQUNELE1BQUksT0FBT0EsUUFBUUMsT0FBZixLQUEyQixXQUEvQixFQUE0QztBQUMxQ0QsWUFBUUMsT0FBUixHQUFrQixDQUFsQjtBQUNEOztBQUVE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LFNBQS9DLEVBQTBEQyxTQUExRCxFQUFxRUMsT0FBckUsRUFBOEU7QUFDbkYsU0FBT1Isb0JBQW9CK0MsUUFBcEIsRUFBOEJBLFFBQTlCLEVBQXdDM0MsTUFBeEMsRUFBZ0RDLE1BQWhELEVBQXdEQyxTQUF4RCxFQUFtRUMsU0FBbkUsRUFBOEVDLE9BQTlFLENBQVA7QUFDRCIsImZpbGUiOiJjcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RpZmZMaW5lc30gZnJvbSAnLi4vZGlmZi9saW5lJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cnVjdHVyZWRQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucy5jb250ZXh0ID0gNDtcbiAgfVxuXG4gIGNvbnN0IGRpZmYgPSBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xuICBkaWZmLnB1c2goe3ZhbHVlOiAnJywgbGluZXM6IFtdfSk7ICAgLy8gQXBwZW5kIGFuIGVtcHR5IHZhbHVlIHRvIG1ha2UgY2xlYW51cCBlYXNpZXJcblxuICBmdW5jdGlvbiBjb250ZXh0TGluZXMobGluZXMpIHtcbiAgICByZXR1cm4gbGluZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7IHJldHVybiAnICcgKyBlbnRyeTsgfSk7XG4gIH1cblxuICBsZXQgaHVua3MgPSBbXTtcbiAgbGV0IG9sZFJhbmdlU3RhcnQgPSAwLCBuZXdSYW5nZVN0YXJ0ID0gMCwgY3VyUmFuZ2UgPSBbXSxcbiAgICAgIG9sZExpbmUgPSAxLCBuZXdMaW5lID0gMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRpZmZbaV0sXG4gICAgICAgICAgbGluZXMgPSBjdXJyZW50LmxpbmVzIHx8IGN1cnJlbnQudmFsdWUucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJyk7XG4gICAgY3VycmVudC5saW5lcyA9IGxpbmVzO1xuXG4gICAgaWYgKGN1cnJlbnQuYWRkZWQgfHwgY3VycmVudC5yZW1vdmVkKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIHByZXZpb3VzIGNvbnRleHQsIHN0YXJ0IHdpdGggdGhhdFxuICAgICAgaWYgKCFvbGRSYW5nZVN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IHByZXYgPSBkaWZmW2kgLSAxXTtcbiAgICAgICAgb2xkUmFuZ2VTdGFydCA9IG9sZExpbmU7XG4gICAgICAgIG5ld1JhbmdlU3RhcnQgPSBuZXdMaW5lO1xuXG4gICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgY3VyUmFuZ2UgPSBvcHRpb25zLmNvbnRleHQgPiAwID8gY29udGV4dExpbmVzKHByZXYubGluZXMuc2xpY2UoLW9wdGlvbnMuY29udGV4dCkpIDogW107XG4gICAgICAgICAgb2xkUmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgICAgbmV3UmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3V0cHV0IG91ciBjaGFuZ2VzXG4gICAgICBjdXJSYW5nZS5wdXNoKC4uLiBsaW5lcy5tYXAoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyZW50LmFkZGVkID8gJysnIDogJy0nKSArIGVudHJ5O1xuICAgICAgfSkpO1xuXG4gICAgICAvLyBUcmFjayB0aGUgdXBkYXRlZCBmaWxlIHBvc2l0aW9uXG4gICAgICBpZiAoY3VycmVudC5hZGRlZCkge1xuICAgICAgICBuZXdMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZGVudGljYWwgY29udGV4dCBsaW5lcy4gVHJhY2sgbGluZSBjaGFuZ2VzXG4gICAgICBpZiAob2xkUmFuZ2VTdGFydCkge1xuICAgICAgICAvLyBDbG9zZSBvdXQgYW55IGNoYW5nZXMgdGhhdCBoYXZlIGJlZW4gb3V0cHV0IChvciBqb2luIG92ZXJsYXBwaW5nKVxuICAgICAgICBpZiAobGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCAqIDIgJiYgaSA8IGRpZmYubGVuZ3RoIC0gMikge1xuICAgICAgICAgIC8vIE92ZXJsYXBwaW5nXG4gICAgICAgICAgY3VyUmFuZ2UucHVzaCguLi4gY29udGV4dExpbmVzKGxpbmVzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZW5kIHRoZSByYW5nZSBhbmQgb3V0cHV0XG4gICAgICAgICAgbGV0IGNvbnRleHRTaXplID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBvcHRpb25zLmNvbnRleHQpO1xuICAgICAgICAgIGN1clJhbmdlLnB1c2goLi4uIGNvbnRleHRMaW5lcyhsaW5lcy5zbGljZSgwLCBjb250ZXh0U2l6ZSkpKTtcblxuICAgICAgICAgIGxldCBodW5rID0ge1xuICAgICAgICAgICAgb2xkU3RhcnQ6IG9sZFJhbmdlU3RhcnQsXG4gICAgICAgICAgICBvbGRMaW5lczogKG9sZExpbmUgLSBvbGRSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUpLFxuICAgICAgICAgICAgbmV3U3RhcnQ6IG5ld1JhbmdlU3RhcnQsXG4gICAgICAgICAgICBuZXdMaW5lczogKG5ld0xpbmUgLSBuZXdSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUpLFxuICAgICAgICAgICAgbGluZXM6IGN1clJhbmdlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaSA+PSBkaWZmLmxlbmd0aCAtIDIgJiYgbGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCkge1xuICAgICAgICAgICAgLy8gRU9GIGlzIGluc2lkZSB0aGlzIGh1bmtcbiAgICAgICAgICAgIGxldCBvbGRFT0ZOZXdsaW5lID0gKC9cXG4kLy50ZXN0KG9sZFN0cikpO1xuICAgICAgICAgICAgbGV0IG5ld0VPRk5ld2xpbmUgPSAoL1xcbiQvLnRlc3QobmV3U3RyKSk7XG4gICAgICAgICAgICBpZiAobGluZXMubGVuZ3RoID09IDAgJiYgIW9sZEVPRk5ld2xpbmUpIHtcbiAgICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlOiBvbGQgaGFzIG5vIGVvbCBhbmQgbm8gdHJhaWxpbmcgY29udGV4dDsgbm8tbmwgY2FuIGVuZCB1cCBiZWZvcmUgYWRkc1xuICAgICAgICAgICAgICBjdXJSYW5nZS5zcGxpY2UoaHVuay5vbGRMaW5lcywgMCwgJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghb2xkRU9GTmV3bGluZSB8fCAhbmV3RU9GTmV3bGluZSkge1xuICAgICAgICAgICAgICBjdXJSYW5nZS5wdXNoKCdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaHVua3MucHVzaChodW5rKTtcblxuICAgICAgICAgIG9sZFJhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgIGN1clJhbmdlID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbGRGaWxlTmFtZTogb2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lOiBuZXdGaWxlTmFtZSxcbiAgICBvbGRIZWFkZXI6IG9sZEhlYWRlciwgbmV3SGVhZGVyOiBuZXdIZWFkZXIsXG4gICAgaHVua3M6IGh1bmtzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUd29GaWxlc1BhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRpZmYgPSBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IHJldCA9IFtdO1xuICBpZiAob2xkRmlsZU5hbWUgPT0gbmV3RmlsZU5hbWUpIHtcbiAgICByZXQucHVzaCgnSW5kZXg6ICcgKyBvbGRGaWxlTmFtZSk7XG4gIH1cbiAgcmV0LnB1c2goJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgcmV0LnB1c2goJy0tLSAnICsgZGlmZi5vbGRGaWxlTmFtZSArICh0eXBlb2YgZGlmZi5vbGRIZWFkZXIgPT09ICd1bmRlZmluZWQnID8gJycgOiAnXFx0JyArIGRpZmYub2xkSGVhZGVyKSk7XG4gIHJldC5wdXNoKCcrKysgJyArIGRpZmYubmV3RmlsZU5hbWUgKyAodHlwZW9mIGRpZmYubmV3SGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm5ld0hlYWRlcikpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZi5odW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGh1bmsgPSBkaWZmLmh1bmtzW2ldO1xuICAgIHJldC5wdXNoKFxuICAgICAgJ0BAIC0nICsgaHVuay5vbGRTdGFydCArICcsJyArIGh1bmsub2xkTGluZXNcbiAgICAgICsgJyArJyArIGh1bmsubmV3U3RhcnQgKyAnLCcgKyBodW5rLm5ld0xpbmVzXG4gICAgICArICcgQEAnXG4gICAgKTtcbiAgICByZXQucHVzaC5hcHBseShyZXQsIGh1bmsubGluZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJldC5qb2luKCdcXG4nKSArICdcXG4nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGF0Y2goZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICByZXR1cm4gY3JlYXRlVHdvRmlsZXNQYXRjaChmaWxlTmFtZSwgZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucyk7XG59XG4iXX0=
        /** */
      },
      /* 15 */
      /** */ function(module, exports) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.arrayEqual = arrayEqual;
        /* istanbul ignore start*/ exports.arrayStartsWith = arrayStartsWith;
        function arrayEqual(a, b) {
          if (a.length !== b.length) {
            return false;
          }

          return arrayStartsWith(a, b);
        }

        function arrayStartsWith(array, start) {
          if (start.length > array.length) {
            return false;
          }

          for (var i = 0; i < start.length; i++) {
            if (start[i] !== array[i]) {
              return false;
            }
          }

          return true;
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5RXF1YWwiLCJhcnJheVN0YXJ0c1dpdGgiLCJhIiwiYiIsImxlbmd0aCIsImFycmF5Iiwic3RhcnQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7OztnQ0FBZ0JBLFUsR0FBQUEsVTt5REFRQUMsZSxHQUFBQSxlO0FBUlQsU0FBU0QsVUFBVCxDQUFvQkUsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCO0FBQy9CLE1BQUlELEVBQUVFLE1BQUYsS0FBYUQsRUFBRUMsTUFBbkIsRUFBMkI7QUFDekIsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBT0gsZ0JBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsQ0FBUDtBQUNEOztBQUVNLFNBQVNGLGVBQVQsQ0FBeUJJLEtBQXpCLEVBQWdDQyxLQUFoQyxFQUF1QztBQUM1QyxNQUFJQSxNQUFNRixNQUFOLEdBQWVDLE1BQU1ELE1BQXpCLEVBQWlDO0FBQy9CLFdBQU8sS0FBUDtBQUNEOztBQUVELE9BQUssSUFBSUcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxNQUFNRixNQUExQixFQUFrQ0csR0FBbEMsRUFBdUM7QUFDckMsUUFBSUQsTUFBTUMsQ0FBTixNQUFhRixNQUFNRSxDQUFOLENBQWpCLEVBQTJCO0FBQ3pCLGFBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxJQUFQO0FBQ0QiLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbChhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gYXJyYXlTdGFydHNXaXRoKGEsIGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlTdGFydHNXaXRoKGFycmF5LCBzdGFydCkge1xuICBpZiAoc3RhcnQubGVuZ3RoID4gYXJyYXkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFydC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdGFydFtpXSAhPT0gYXJyYXlbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiJdfQ==
        /** */
      },
      /* 16 */
      /** */ function(module, exports) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.convertChangesToDMP = convertChangesToDMP;
        // See: http://code.google.com/p/google-diff-match-patch/wiki/API
        function convertChangesToDMP(changes) {
          var ret = [],
            change = /* istanbul ignore start*/ void 0 /* istanbul ignore end*/,
            operation = /* istanbul ignore start*/ void 0 /* istanbul ignore end*/;
          for (var i = 0; i < changes.length; i++) {
            change = changes[i];
            if (change.added) {
              operation = 1;
            } else if (change.removed) {
              operation = -1;
            } else {
              operation = 0;
            }

            ret.push([operation, change.value]);
          }
          return ret;
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L2RtcC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvRE1QIiwiY2hhbmdlcyIsInJldCIsImNoYW5nZSIsIm9wZXJhdGlvbiIsImkiLCJsZW5ndGgiLCJhZGRlZCIsInJlbW92ZWQiLCJwdXNoIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O2dDQUNnQkEsbUIsR0FBQUEsbUI7QUFEaEI7QUFDTyxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFDM0MsTUFBSUMsTUFBTSxFQUFWO0FBQUEsTUFDSUMsd0NBREo7QUFBQSxNQUVJQywyQ0FGSjtBQUdBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixRQUFRSyxNQUE1QixFQUFvQ0QsR0FBcEMsRUFBeUM7QUFDdkNGLGFBQVNGLFFBQVFJLENBQVIsQ0FBVDtBQUNBLFFBQUlGLE9BQU9JLEtBQVgsRUFBa0I7QUFDaEJILGtCQUFZLENBQVo7QUFDRCxLQUZELE1BRU8sSUFBSUQsT0FBT0ssT0FBWCxFQUFvQjtBQUN6Qkosa0JBQVksQ0FBQyxDQUFiO0FBQ0QsS0FGTSxNQUVBO0FBQ0xBLGtCQUFZLENBQVo7QUFDRDs7QUFFREYsUUFBSU8sSUFBSixDQUFTLENBQUNMLFNBQUQsRUFBWUQsT0FBT08sS0FBbkIsQ0FBVDtBQUNEO0FBQ0QsU0FBT1IsR0FBUDtBQUNEIiwiZmlsZSI6ImRtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNlZTogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL3dpa2kvQVBJXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb0RNUChjaGFuZ2VzKSB7XG4gIGxldCByZXQgPSBbXSxcbiAgICAgIGNoYW5nZSxcbiAgICAgIG9wZXJhdGlvbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhbmdlID0gY2hhbmdlc1tpXTtcbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICBvcGVyYXRpb24gPSAxO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIG9wZXJhdGlvbiA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVyYXRpb24gPSAwO1xuICAgIH1cblxuICAgIHJldC5wdXNoKFtvcGVyYXRpb24sIGNoYW5nZS52YWx1ZV0pO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iXX0=
        /** */
      },
      /* 17 */
      /** */ function(module, exports) {
        /* istanbul ignore start*/ "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.convertChangesToXML = convertChangesToXML;
        function convertChangesToXML(changes) {
          var ret = [];
          for (var i = 0; i < changes.length; i++) {
            var change = changes[i];
            if (change.added) {
              ret.push("<ins>");
            } else if (change.removed) {
              ret.push("<del>");
            }

            ret.push(escapeHTML(change.value));

            if (change.added) {
              ret.push("</ins>");
            } else if (change.removed) {
              ret.push("</del>");
            }
          }
          return ret.join("");
        }

        function escapeHTML(s) {
          var n = s;
          n = n.replace(/&/g, "&amp;");
          n = n.replace(/</g, "&lt;");
          n = n.replace(/>/g, "&gt;");
          n = n.replace(/"/g, "&quot;");

          return n;
        }
        // # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L3htbC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvWE1MIiwiY2hhbmdlcyIsInJldCIsImkiLCJsZW5ndGgiLCJjaGFuZ2UiLCJhZGRlZCIsInB1c2giLCJyZW1vdmVkIiwiZXNjYXBlSFRNTCIsInZhbHVlIiwiam9pbiIsInMiLCJuIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Z0NBQWdCQSxtQixHQUFBQSxtQjtBQUFULFNBQVNBLG1CQUFULENBQTZCQyxPQUE3QixFQUFzQztBQUMzQyxNQUFJQyxNQUFNLEVBQVY7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsUUFBUUcsTUFBNUIsRUFBb0NELEdBQXBDLEVBQXlDO0FBQ3ZDLFFBQUlFLFNBQVNKLFFBQVFFLENBQVIsQ0FBYjtBQUNBLFFBQUlFLE9BQU9DLEtBQVgsRUFBa0I7QUFDaEJKLFVBQUlLLElBQUosQ0FBUyxPQUFUO0FBQ0QsS0FGRCxNQUVPLElBQUlGLE9BQU9HLE9BQVgsRUFBb0I7QUFDekJOLFVBQUlLLElBQUosQ0FBUyxPQUFUO0FBQ0Q7O0FBRURMLFFBQUlLLElBQUosQ0FBU0UsV0FBV0osT0FBT0ssS0FBbEIsQ0FBVDs7QUFFQSxRQUFJTCxPQUFPQyxLQUFYLEVBQWtCO0FBQ2hCSixVQUFJSyxJQUFKLENBQVMsUUFBVDtBQUNELEtBRkQsTUFFTyxJQUFJRixPQUFPRyxPQUFYLEVBQW9CO0FBQ3pCTixVQUFJSyxJQUFKLENBQVMsUUFBVDtBQUNEO0FBQ0Y7QUFDRCxTQUFPTCxJQUFJUyxJQUFKLENBQVMsRUFBVCxDQUFQO0FBQ0Q7O0FBRUQsU0FBU0YsVUFBVCxDQUFvQkcsQ0FBcEIsRUFBdUI7QUFDckIsTUFBSUMsSUFBSUQsQ0FBUjtBQUNBQyxNQUFJQSxFQUFFQyxPQUFGLENBQVUsSUFBVixFQUFnQixPQUFoQixDQUFKO0FBQ0FELE1BQUlBLEVBQUVDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLE1BQWhCLENBQUo7QUFDQUQsTUFBSUEsRUFBRUMsT0FBRixDQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FBSjtBQUNBRCxNQUFJQSxFQUFFQyxPQUFGLENBQVUsSUFBVixFQUFnQixRQUFoQixDQUFKOztBQUVBLFNBQU9ELENBQVA7QUFDRCIsImZpbGUiOiJ4bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb1hNTChjaGFuZ2VzKSB7XG4gIGxldCByZXQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoYW5nZSA9IGNoYW5nZXNbaV07XG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgcmV0LnB1c2goJzxpbnM+Jyk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgcmV0LnB1c2goJzxkZWw+Jyk7XG4gICAgfVxuXG4gICAgcmV0LnB1c2goZXNjYXBlSFRNTChjaGFuZ2UudmFsdWUpKTtcblxuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIHJldC5wdXNoKCc8L2lucz4nKTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICByZXQucHVzaCgnPC9kZWw+Jyk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUhUTUwocykge1xuICBsZXQgbiA9IHM7XG4gIG4gPSBuLnJlcGxhY2UoLyYvZywgJyZhbXA7Jyk7XG4gIG4gPSBuLnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcbiAgbiA9IG4ucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICBuID0gbi5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbiAgcmV0dXJuIG47XG59XG4iXX0=
        /** */
      }
      /** ****/
    ]
  );
});
