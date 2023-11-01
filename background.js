chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && tab.url.includes("https://leetcode.com/problems/")) {
    var problemname = tab.url.split("problems/")[1];
    var exactprb = problemname.split("/")[0];
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      prb: exactprb,
    });
  }
});

const API_KEY = "AIzaSyAYKbhdDw7Wt2Tt7XCo3iVBTySghHe4wpQ";

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.command === "fetch") {
    const { prbname } = msg.data;

    fetchYouTubeSearchResults(prbname)
      .then((results) => {
        response({
          type: "result",
          status: "success",
          data: results,
          request: msg,
        });
      })
      .catch((error) => {
        response({
          type: "result",
          status: "error",
          data: error,
          request: msg,
        });
      });

    return true;
  }
});

function fetchYouTubeSearchResults(prbname) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(prbname)}&maxResults=10&key=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.items.map((item) => {
        return {
          videoId: item.id.videoId,
          thumbnail: item.snippet.thumbnails.default.url,
          channelName: item.snippet.channelTitle,
        };
      });
    });
}
