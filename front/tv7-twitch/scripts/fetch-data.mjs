#!/usr/bin/env zx

const PROJECT_PATH = (await $`pwd`).stdout.replace('\n', '').trim();
const BASE_URL = 'https://ealenn.github.io/Tv7Twitch';
const MANIFEST_FILE = 'manifest.json';

const manifest = await getFile(MANIFEST_FILE);
for (const file of manifest.files) {
  await getFile(file);
}

async function getFile(fileName) {
  const result = await fetch(`${BASE_URL}/data/${fileName}`);
  const fileContent = await result.json();
  const newFilePath = `${PROJECT_PATH}/public/data/${fileName}`;

  console.log(`Saving file ${fileName} to ${newFilePath}`);
  fs.writeFileSync(newFilePath, JSON.stringify(fileContent, undefined, 2));
  return fileContent;
}
