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

    tagList.forEach((tag) => {
      subHeader.innerHTML += `<div>${tag}</div>`;
    });
  });
