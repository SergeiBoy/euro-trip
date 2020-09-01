'use strict';

(function () {
  var linksToTabs = document.querySelector('.places-of-visit');
  var linkToGreece = linksToTabs.querySelector('.places-of-visit__link--greece');
  var linkToAlbania = linksToTabs.querySelector('.places-of-visit__link--albania');
  var linkToMakedonia = linksToTabs.querySelector('.places-of-visit__link--makedonia');
  var linkToMontenegro = linksToTabs.querySelector('.places-of-visit__link--montenegro');
  var linkToCroatia = linksToTabs.querySelector('.places-of-visit__link--croatia');

  var tabs = document.querySelector('.countries-tabs');
  var tabGreece = tabs.querySelector('.countries-tabs__country-tab--greece');
  var tabAlbania = tabs.querySelector('.countries-tabs__country-tab--albania');
  var tabMakedonia = tabs.querySelector('.countries-tabs__country-tab--makedonia');
  var tabMontenegro = tabs.querySelector('.countries-tabs__country-tab--montenegro');
  var tabCroatia = tabs.querySelector('.countries-tabs__country-tab--croatia');

  var countriesList = document.querySelector('.places-of-visit__countries-list');
  var countriesListGreece = countriesList.querySelector('.places-of-visit__countries-list-item--greece');
  var countriesListAlbania = countriesList.querySelector('.places-of-visit__countries-list-item--albania');
  var countriesListMakedonia = countriesList.querySelector('.places-of-visit__countries-list-item--makedonia');
  var countriesListMontenegro = countriesList.querySelector('.places-of-visit__countries-list-item--montenegro');
  var countriesListCroatia = countriesList.querySelector('.places-of-visit__countries-list-item--croatia');

  var setDisplayNone = function () {
    tabGreece.style.display = "none";
    tabAlbania.style.display = "none";
    tabMakedonia.style.display = "none";
    tabMontenegro.style.display = "none";
    tabCroatia.style.display = "none";

    countriesListGreece.style.color = "rgba(44, 46, 63, 0.3)";
    countriesListAlbania.style.color = "rgba(44, 46, 63, 0.3)";
    countriesListMakedonia.style.color = "rgba(44, 46, 63, 0.3)";
    countriesListMontenegro.style.color = "rgba(44, 46, 63, 0.3)";
    countriesListCroatia.style.color = "rgba(44, 46, 63, 0.3)";
  };

  linkToGreece.addEventListener('click', function () {
    setDisplayNone();
    tabGreece.style.display = "flex";
    countriesListGreece.style.color = "#fe7865";
  });

  linkToAlbania.addEventListener('click', function () {
    setDisplayNone();
    tabAlbania.style.display = "flex";
    countriesListAlbania.style.color = "#fe7865";
  });

  linkToMakedonia.addEventListener('click', function () {
    setDisplayNone();
    tabMakedonia.style.display = "flex";
    countriesListMakedonia.style.color = "#fe7865";
  });

  linkToMontenegro.addEventListener('click', function () {
    setDisplayNone();
    tabMontenegro.style.display = "flex";
    countriesListMontenegro.style.color = "#fe7865";
  });

  linkToCroatia.addEventListener('click', function () {
    setDisplayNone();
    tabCroatia.style.display = "flex";
    countriesListCroatia.style.color = "#fe7865";
  });
})();
