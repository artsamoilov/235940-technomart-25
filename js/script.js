var linkWriteUs = document.querySelector(".button-write-us");
var popupWriteUs = document.querySelector(".modal-write");

if (popupWriteUs) {
  var closeWriteUs = popupWriteUs.querySelector(".modal-close");

  var formWriteUs = popupWriteUs.querySelector("form");
  var nameWriteUs = popupWriteUs.querySelector("[name=fullname]");
  var emailWriteUs = popupWriteUs.querySelector("[name=email]");
  var textWriteUs = popupWriteUs.querySelector("[name=text]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  };

  linkWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.add("modal-show");

    if (storageName && storageEmail) {
      nameWriteUs.value = storageName;
      emailWriteUs.value = storageEmail;
      textWriteUs.focus();
    } else if (storageName && !storageEmail) {
      nameWriteUs.value = storageName;
      emailWriteUs.focus();
    } else {
      nameWriteUs.focus();
    };
  });

  closeWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-show");
    popupWriteUs.classList.remove("modal-error");
  });

  formWriteUs.addEventListener("submit", function (evt) {

    if (!nameWriteUs.value || !emailWriteUs.value || !textWriteUs.value) {
      evt.preventDefault();
      popupWriteUs.classList.remove("modal-error");
      popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
      popupWriteUs.classList.add("modal-error");
    } else if (isStorageSupport) {
      localStorage.setItem("name", nameWriteUs.value);
      localStorage.setItem("email", emailWriteUs.value);
    };
  });

  window.addEventListener("keydown", function (evt) {

    if (evt.keyCode === 27) {
      evt.preventDefault();

      if (popupWriteUs.classList.contains("modal-show")) {
        popupWriteUs.classList.remove("modal-show");
        popupWriteUs.classList.remove("modal-error");
      };
    };
  });
};

var linkMap = document.querySelector(".map-popup");
var popupMap = document.querySelector(".modal-map");

if (popupMap) {
  var closeMap = popupMap.querySelector(".modal-close");

  linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
  });

  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {

    if (evt.keyCode === 27) {
      evt.preventDefault();

      if (popupMap.classList.contains("modal-show")) {
        popupMap.classList.remove("modal-show");
      };
    };
  });
};

var linkSuccess = document.querySelectorAll(".catalog-item-button-buy");
var popupSuccess = document.querySelector(".modal-success");

if (popupSuccess) {
  var closeSuccess = popupSuccess.querySelector(".modal-close");

  for (i=0; i<linkSuccess.length; i++) {
    linkSuccess[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popupSuccess.classList.add("modal-show");
    });
  };

  closeSuccess.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSuccess.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {

    if (evt.keyCode === 27) {
      evt.preventDefault();

      if (popupSuccess.classList.contains("modal-show")) {
        popupSuccess.classList.remove("modal-show");
      };
    };
  });
};