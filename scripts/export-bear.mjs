/* 
  A NodeJS alternative to Bear Markdown Export: https://github.com/andymatuschak/Bear-Markdown-Export
  Currently integrated to work with Vitepress and my personal site
*/
import os from 'os';
import fs from 'fs';
import path from 'path';
import sqlite3 from 'sqlite3';

const HOME = os.homedir();

const bearDB = path.join(
  HOME,
  'Library/Group Containers/9K33E3U3T4.net.shinyfrog.bear/Application Data/database.sqlite'
);

const exportDir = path.join(process.cwd(), './src/notes');

async function main() {
  if (isBearDBModified()) {
    try {
      await exportMarkdown();
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('No notes have been modified in Bear.');
  }
  console.log('Export completed!');
}

function isBearDBModified() {
  const { mtime: dbMTtime } = fs.statSync(bearDB);
  const { mtime: exportDirMtime } = fs.statSync(exportDir);
  return dbMTtime > exportDirMtime;
}

function exportMarkdown() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(bearDB, sqlite3.OPEN_READONLY, (error) =>
      error ? reject(error) : console.log('Successfully connected to DB')
    );

    db.each(
      `
      SELECT * FROM ZSFNOTE 
      WHERE ZTRASHED LIKE '0'
        AND ZARCHIVED LIKE '0'
        AND (
          ZTEXT LIKE '%#seedling%'
          OR ZTEXT LIKE '%#budding%'
          OR ZTEXT LIKE '%#evergreen%'
        )
      `,
      (error, row) => {
        if (error) {
          reject(error);
        }

        createNote(row);
      }
    );

    db.close((error) => (error ? reject(error) : resolve()));
  });
}

function createNote(row) {
  const {
    ZUNIQUEIDENTIFIER: id,
    ZTITLE: title,
    ZTEXT: rawText,
    ZCREATIONDATE: created,
    ZMODIFICATIONDATE: modified,
  } = row;
  const text = parseText(id, title, rawText);
  const fileName = hyphenate(title);
  const filePath = path.join(exportDir, fileName + '.md');
  writeFile(filePath, text);
}

// Remove the headline and line of tags
function parseText(uuid, title, markdown) {
  const [, tags, ...text] = markdown.trim().split('\n');
  const stage = tags
    .split('#')
    .find((tag) => ['seedling', 'budding', 'evergreen'].includes(tag.trim()));
  return `---
id: ${uuid}
title: ${title.trim()}
stage: ${stage}
---
${text.join('\n')}
`;
}

const hyphenateRE = /\s/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '-').toLowerCase();
}

function writeFile(path, text) {
  fs.writeFile(path, text, (error) => {
    if (error) {
      console.log(error);
    }
  });
}

main();
