document.addEventListener("DOMContentLoaded", function () {
  const firstTab = document.querySelector(".nav-link.active");
  if (firstTab) {
    loadH5PContent(firstTab);
  }

  const tabs = document.querySelectorAll(".nav-link");
  tabs.forEach((tab) => {
    tab.addEventListener("shown.bs.tab", function (event) {
      loadH5PContent(event.target);
    });
  });
});

function loadH5PContent(tab) {
  const { H5P } = H5PStandalone;
  const targetId = tab.getAttribute("data-bs-target");
  const containerId = targetId.replace("#content-", "h5p-container-");
  const index = targetId.replace("#content-", "");
  const container = document.getElementById(containerId);

  if (!container.classList.contains("h5p-loaded")) {
    new H5P(container, {
      h5pJsonPath: `resources/h5p/clase2/clase2.${index}`,
      frameJs: "/dist/frame.bundle.js",
      frameCss: "/dist/styles/h5p.css",
    }).then(() => {
      container.classList.add("h5p-loaded"); // Mark it as loaded
    });
  }
}
