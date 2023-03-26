const links = {
  installUrl: "https://mertsismanoglu.com",
  uninstallUrl: "https://mertsismanoglu.com",
};
class Extension {
  constructor(links) {
    this.links = links;
  }
  openTabWhenInstalled(url) {
    chrome.runtime.onInstalled.addListener(async () => {
      await chrome.tabs.create({ url: url });
    });
    return this;
  }
  openTabWhenUninstalled(url) {
    chrome.runtime.setUninstallURL(url);
    return this;
  }
}
const Application = new Extension(links)
  .openTabWhenInstalled(links.installUrl)
  .openTabWhenUninstalled(links.uninstallUrl);
