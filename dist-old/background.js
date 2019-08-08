
import { SSB } from "./ssb.js";

// Display the userguide or release notes depending if the add-on was
// installed or updated.
function installedOrUpdated(details) {
    let url;
    let version = browser.runtime.getManifest().version;
    switch (details.reason) {
        case "update":
            url = browser.extension.getURL("/docs/index.html#/release_notes/2019.6.2");
            browser.tabs.create({
                url: `${url}`
            });
            break;
        case "install":
            url = browser.extension.getURL("/docs/index.html#/guide");
            browser.tabs.create({
                url: `${url}`
            });
            break;
    }
}

browser.runtime.onInstalled.addListener(installedOrUpdated)