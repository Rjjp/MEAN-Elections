(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function(){
  var getRoundWinner;
  module.exports.compute = function(partyArray, mandateCount, options){
    var mandates, mandatesAwarded, votes, that, winningIndex;
    options == null && (options = {});
    options.base == null && (options.base = 1);
    mandates = partyArray.map(function(){
      return 0;
    });
    mandatesAwarded = 0;
    votes = (function(){
      switch (false) {
      case !(that = options.voteAccessor):
        return partyArray.map(that);
      default:
        return partyArray;
      }
    }());
    if (that = options.resultProperty) {
      partyArray.forEach(function(it){
        return it[that] = 0;
      });
    }
    while (mandatesAwarded < mandateCount) {
      winningIndex = getRoundWinner(votes, mandates, options);
      mandates[winningIndex]++;
      if (that = options.resultProperty) {
        partyArray[winningIndex][that]++;
      }
      mandatesAwarded++;
    }
    switch (false) {
    case !options.resultProperty:
      return partyArray;
    default:
      return mandates;
    }
  };
  getRoundWinner = function(votes, mandates, options){
    var highestIndex, highestScore, i$, len$, index, voteCount, mandateCount, divider, that, score;
    highestIndex = -1;
    highestScore = -Infinity;
    for (i$ = 0, len$ = votes.length; i$ < len$; ++i$) {
      index = i$;
      voteCount = votes[i$];
      mandateCount = mandates[index];
      divider = (that = mandateCount)
        ? that + 1
        : options.base;
      score = voteCount / divider;
      if (score > highestScore) {
        highestScore = score;
        highestIndex = index;
      }
    }
    return highestIndex;
  };
}).call(this);

},{}],2:[function(require,module,exports){
/**
 * Created by rpomareta on 24.08.2015.
 */
var methodeDhondt = require('dhondt');

window.dhondt =function(parties, mandates, options){
    return  methodeDhondt.compute(parties, mandates, options);
};
},{"dhondt":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9kaG9uZHQvbGliL2Rob25kdC5qcyIsImpzL3VzZWRob25kdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24oKXtcbiAgdmFyIGdldFJvdW5kV2lubmVyO1xuICBtb2R1bGUuZXhwb3J0cy5jb21wdXRlID0gZnVuY3Rpb24ocGFydHlBcnJheSwgbWFuZGF0ZUNvdW50LCBvcHRpb25zKXtcbiAgICB2YXIgbWFuZGF0ZXMsIG1hbmRhdGVzQXdhcmRlZCwgdm90ZXMsIHRoYXQsIHdpbm5pbmdJbmRleDtcbiAgICBvcHRpb25zID09IG51bGwgJiYgKG9wdGlvbnMgPSB7fSk7XG4gICAgb3B0aW9ucy5iYXNlID09IG51bGwgJiYgKG9wdGlvbnMuYmFzZSA9IDEpO1xuICAgIG1hbmRhdGVzID0gcGFydHlBcnJheS5tYXAoZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIG1hbmRhdGVzQXdhcmRlZCA9IDA7XG4gICAgdm90ZXMgPSAoZnVuY3Rpb24oKXtcbiAgICAgIHN3aXRjaCAoZmFsc2UpIHtcbiAgICAgIGNhc2UgISh0aGF0ID0gb3B0aW9ucy52b3RlQWNjZXNzb3IpOlxuICAgICAgICByZXR1cm4gcGFydHlBcnJheS5tYXAodGhhdCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFydHlBcnJheTtcbiAgICAgIH1cbiAgICB9KCkpO1xuICAgIGlmICh0aGF0ID0gb3B0aW9ucy5yZXN1bHRQcm9wZXJ0eSkge1xuICAgICAgcGFydHlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0KXtcbiAgICAgICAgcmV0dXJuIGl0W3RoYXRdID0gMDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB3aGlsZSAobWFuZGF0ZXNBd2FyZGVkIDwgbWFuZGF0ZUNvdW50KSB7XG4gICAgICB3aW5uaW5nSW5kZXggPSBnZXRSb3VuZFdpbm5lcih2b3RlcywgbWFuZGF0ZXMsIG9wdGlvbnMpO1xuICAgICAgbWFuZGF0ZXNbd2lubmluZ0luZGV4XSsrO1xuICAgICAgaWYgKHRoYXQgPSBvcHRpb25zLnJlc3VsdFByb3BlcnR5KSB7XG4gICAgICAgIHBhcnR5QXJyYXlbd2lubmluZ0luZGV4XVt0aGF0XSsrO1xuICAgICAgfVxuICAgICAgbWFuZGF0ZXNBd2FyZGVkKys7XG4gICAgfVxuICAgIHN3aXRjaCAoZmFsc2UpIHtcbiAgICBjYXNlICFvcHRpb25zLnJlc3VsdFByb3BlcnR5OlxuICAgICAgcmV0dXJuIHBhcnR5QXJyYXk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBtYW5kYXRlcztcbiAgICB9XG4gIH07XG4gIGdldFJvdW5kV2lubmVyID0gZnVuY3Rpb24odm90ZXMsIG1hbmRhdGVzLCBvcHRpb25zKXtcbiAgICB2YXIgaGlnaGVzdEluZGV4LCBoaWdoZXN0U2NvcmUsIGkkLCBsZW4kLCBpbmRleCwgdm90ZUNvdW50LCBtYW5kYXRlQ291bnQsIGRpdmlkZXIsIHRoYXQsIHNjb3JlO1xuICAgIGhpZ2hlc3RJbmRleCA9IC0xO1xuICAgIGhpZ2hlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICBmb3IgKGkkID0gMCwgbGVuJCA9IHZvdGVzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgICBpbmRleCA9IGkkO1xuICAgICAgdm90ZUNvdW50ID0gdm90ZXNbaSRdO1xuICAgICAgbWFuZGF0ZUNvdW50ID0gbWFuZGF0ZXNbaW5kZXhdO1xuICAgICAgZGl2aWRlciA9ICh0aGF0ID0gbWFuZGF0ZUNvdW50KVxuICAgICAgICA/IHRoYXQgKyAxXG4gICAgICAgIDogb3B0aW9ucy5iYXNlO1xuICAgICAgc2NvcmUgPSB2b3RlQ291bnQgLyBkaXZpZGVyO1xuICAgICAgaWYgKHNjb3JlID4gaGlnaGVzdFNjb3JlKSB7XG4gICAgICAgIGhpZ2hlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICBoaWdoZXN0SW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhpZ2hlc3RJbmRleDtcbiAgfTtcbn0pLmNhbGwodGhpcyk7XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBycG9tYXJldGEgb24gMjQuMDguMjAxNS5cclxuICovXHJcbnZhciBtZXRob2RlRGhvbmR0ID0gcmVxdWlyZSgnZGhvbmR0Jyk7XHJcblxyXG53aW5kb3cuZGhvbmR0ID1mdW5jdGlvbihwYXJ0aWVzLCBtYW5kYXRlcywgb3B0aW9ucyl7XHJcbiAgICByZXR1cm4gIG1ldGhvZGVEaG9uZHQuY29tcHV0ZShwYXJ0aWVzLCBtYW5kYXRlcywgb3B0aW9ucyk7XHJcbn07Il19
