/**
 * Created by rpomareta on 24.08.2015.
 */
var methodeDhondt = require('dhondt');

window.dhondt =function(parties, mandates, options){
    return  methodeDhondt.compute(parties, mandates, options);
};