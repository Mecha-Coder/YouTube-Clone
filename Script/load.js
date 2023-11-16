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
          <img src="" />
      
          <div class="text-detail">
            <a class="video-title" href="https://www.youtube.com/watch?v=${
              video.videoId
            }">
              ${video.title}
            </a>
            <a
              href=""
              class="channel-name"
            >
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
