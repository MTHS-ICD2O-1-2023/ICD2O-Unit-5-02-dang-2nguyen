// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
const randomnumber = Math.floor(Math.random() * 6) + 1
/**
 * This function displays the slider value.
 */
function checking() {
  alwaysOnButtonChecked = document.getElementById('on-check').checked
  
  if (alwaysOnButtonChecked == true) {
    document.getElementById("rightAnswer").innerHTML =
      "Value is:  " + randomnumber
  } else {
    document.getElementById("rightAnswer").innerHTML =
      "Value is: - " + randomnumber
  }
}
