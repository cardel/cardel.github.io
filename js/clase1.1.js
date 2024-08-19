const { H5P } = H5PStandalone;

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.nav-link');
  tabs.forEach(tab => {
      tab.addEventListener('shown.bs.tab', async (event) => {
          const targetId = event.target.getAttribute('data-bs-target');
          const containerId = targetId.replace('#content-', 'h5p-container-');
          const index = targetId.replace('#content-', '');
          const container = document.getElementById(containerId);

          // Check if H5P has already been loaded for this tab
          if (!container.classList.contains('h5p-loaded')) {
              await new H5P(container, {
                  h5pJsonPath: `recursos/h5p/clase1.${index}`,
                  frameJs: "/dist/frame.bundle.js",
                  frameCss: "/dist/styles/h5p.css",
              });
              container.classList.add('h5p-loaded'); // Mark it as loaded
          }
      });
  });
});
