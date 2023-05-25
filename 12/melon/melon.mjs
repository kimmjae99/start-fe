/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
import playwright from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await playwright.chromium.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('https://www.melon.com/chart/index.htm');

  // 모든 .link_txt 요소를 가져옵니다.
  const linkTexts = await page.evaluate(() => {
    const songs = [];
    const songElements = document.querySelectorAll('.ellipsis.rank01');
    const artistElements = document.querySelectorAll('.ellipsis.rank02');
    const albumElements = document.querySelectorAll('.ellipsis.rank03');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < songElements.length; i++) {
      const song = songElements[i].innerText.trim();
      const artist = artistElements[i].innerText.trim();
      const album = albumElements[i].innerText.trim();

      songs.push({ song, artist, album });
    }

    return songs;
  });

  const jsonData = JSON.stringify(linkTexts, null, 2);

  // JSON 데이터를 파일로 저장합니다.
  fs.writeFile('melon.json', jsonData, (err) => {
    if (err) throw err;
    console.log('melon.json 파일이 생성되었습니다.');
  });

  await browser.close();
})();