import favicons from "favicons";
import fs from "fs/promises";
import path from "path";

const src = "./logo.png"; // Icon source file path.
const dest = "./public/icons"; // Output directory path.
const htmlBasename = "index.html"; // HTML file basename.

// Configuration (see above in the README file).
const configuration = {
  path: "/favicons",
  appName: "Borefts 2025",
  appShortName: "Borefts 2025",
  appDescription: "Manage beers you want to try out, when you tried them and what you like.",
  backgroundColor: '#fff',
  themeColor: '#2f2e41',
  background: '#1f1f1f',
  // Extra options...
};

// Below is the processing.
const response = await favicons(src, configuration);
await fs.mkdir(dest, { recursive: true });
await Promise.all(
  response.images.map(
    async (image) =>
      await fs.writeFile(path.join(dest, image.name), image.contents),
  ),
);
await Promise.all(
  response.files.map(
    async (file) =>
      await fs.writeFile(path.join(dest, file.name), file.contents),
  ),
);
await fs.writeFile(path.join(dest, htmlBasename), response.html.join("\n"));
