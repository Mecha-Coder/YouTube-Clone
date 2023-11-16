fetch("../Data/Content/video-database.json")
  .then((results) => results.json())
  .then((videoData) => {
    let tagList = [];

    videoData.forEach((video) => {
      const array = video.tag;

      array.forEach((tag) => {
        if (!tagList.includes(tag)) {
          tagList.push(tag);
        }
      });
    });

    // Load to page
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
