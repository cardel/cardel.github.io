const { H5P } = H5PStandalone;

for (let i = 1; i <= 10; i++) {
  await new H5P(document.getElementById("h5p-container-" + i), {
    h5pJsonPath: "recursos/h5p/clase1." + i,
    frameJs: "/dist/frame.bundle.js",
    frameCss: "/dist/styles/h5p.css",
  });
}
