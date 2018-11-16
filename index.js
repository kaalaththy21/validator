/**
 * @author Kaalaththy
 */
"use strict";

const numberPattern = /^[0-9]+$/;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = {
   isNumber: function (input) {

      if (!input) {
         this.showErrorMessage('Invalid input');
      }

      return numberPattern.test(input);
   },

   isValidEmail: function (input) {
      if (!input) {
         this.showErrorMessage('Invalid input');
      }

      return emailPattern.test(String(email).toLowerCase());
   }
}

function showErrorMessage(message) {
   if (!message) throw new Error('Invalid message');

   throw new Error(message);
}