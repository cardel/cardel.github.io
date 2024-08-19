const { H5P } = H5PStandalone;

async function setup() {
  await new H5P(document.getElementById("h5p-container-1"), {
    h5pJsonPath: "recursos/h5p/clase1.1",
    frameJs: "/dist/frame.bundle.js",
    frameCss: "/dist/styles/h5p.css",
  });
}

setup();
