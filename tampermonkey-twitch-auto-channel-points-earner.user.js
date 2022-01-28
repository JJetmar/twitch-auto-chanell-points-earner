// ==UserScript==
// @name         Twitch viewer point bonus auto-claimer
// @namespace    https://github.com/JJetmar/twitch-auto-channel-points-earner
// @version      0.2
// @description  Tempermonkey extension used for automatic earning channel points on Twitch.tv platform and refreshing stream if it fails.
// @author       JJetmar
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        var claimBonusButton = document.querySelector(".claimable-bonus__icon")?.parentElement?.parentElement?.parentElement;

        if (claimBonusButton) {
            claimBonusButton.focus();
            claimBonusButton.click();
        }
    }, 1000 * (1 + Math.random() * 10));

    setInterval(() => {
        // Refresh stream if it fails
        document.querySelector(".content-overlay-gate__allow-pointers button")?.click();
    }, 1000);
})();
