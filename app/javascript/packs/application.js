// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import * as bootstrap from 'bootstrap'
import "../stylesheets/application"

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener("DOMContentLoaded", function (event) {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    if (Boolean(localStorage.getItem('sidebar-toggle-collapsed'))) {
        localStorage.setItem('sidebar-toggle-collapsed', '');
     } else {
        localStorage.setItem('sidebar-toggle-collapsed', '1');
     }
    menuBtnChange();//calling the function(optional)
  });

  searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
  }

  if (Boolean(localStorage.getItem('sidebar-toggle-collapsed'))) {
    var body = document.getElementsByClassName('sidebar')[0];
    body.className = body.className + ' open';
  }
});

