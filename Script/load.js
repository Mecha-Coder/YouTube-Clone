/*************************| Get data from video-database  |******************************/

fetch("../Data/Content/video-database.json")
  .then((results) => results.json())
  .then((videoData) => {
    let tagList = [];

    const videogrid = document.getElementById("video-grid");

    videoData.forEach((video) => {
      // Display each video ---------------------------------

      videogrid.innerHTML += `
      <div class="video-card">

        <div class="thumbnail">
          <a href="https://www.youtube.com/watch?v=${video.videoId}">
            <img src="Data/Content/videos/${video.videoId}.webp" />
          </a>
      
          <div class="video-duration">${video.duration}</div>
        </div>
      
        <div class="video-detail">
          <img class="channel-icon" data-channel="${video.channelId}"/>
      
          <div class="text-detail">
            <a class="video-title" href="https://www.youtube.com/watch?v=${
              video.videoId
            }">
              ${video.title}
            </a>

            <a class="channel-name" data-channel="${video.channelId}">
              ${"Blank"}
            </a>

            <div class="statistic">${video.views} views &middot; ${
        video.upload
      } ago</div>
          </div>
        </div>
      </div>`;

      // Get tag list  ---------------------------------------
      const array = video.tag;
      array.forEach((tag) => {
        if (!tagList.includes(tag)) {
          tagList.push(tag);
        }
      });
    });

    // Load tag to page
    const subHeader = document.getElementById("sub-header");
    const button = document.getElementById("next-container");

    tagList.forEach((tag) => {
      subHeader.innerHTML += `<div>${tag}</div>`;
    });

    if (subHeader.scrollWidth > subHeader.clientWidth) {
      button.classList.remove("hide");
      button.classList.add("show");
    }
  });

/*************************| Get data from channel-database  |******************************/

fetch("../Data/Content/channel-database.json")
  .then((results) => results.json())
  .then((channelData) => {
    const allChannelIcon = document.querySelectorAll(".channel-icon");
    const allChannelName = document.querySelectorAll(".channel-name");

    let i;

    allChannelIcon.forEach((icon) => {
      i = channelData.findIndex((object) => {
        return object.channelId === icon.dataset.channel;
      });

      icon.setAttribute(
        "src",
        `Data/Content/channel/${channelData[i].icon}.jpg`
      );
    });

    allChannelName.forEach((name) => {
      i = channelData.findIndex((object) => {
        return object.channelId === name.dataset.channel;
      });

      name.setAttribute(
        "href",
        `https://www.youtube.com/@${name.dataset.channel}`
      );

      name.innerHTML = channelData[i].name;
    });
  });
