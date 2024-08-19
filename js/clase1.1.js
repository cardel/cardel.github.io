const { H5P } = H5PStandalone;

async function setup() {
  await new H5P(document.getElementById("h5p-container-1"), {
    h5pJsonPath: "recursos/h5p/clase1.1",
    frameJs: "/dist/frame.bundle.js",
    frameCss: "/dist/styles/h5p.css",
    embedCode:
      '<iframe width=":w" height=":h" src="https://www.youtube.com/watch?v=wXhH4BjuKI8" frameBorder="0" scrolling="no" styles="width:50%"></iframe>',
  });
}

setup();
