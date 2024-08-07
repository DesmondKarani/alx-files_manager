// worker.js

import Bull from 'bull';
import imageThumbnail from 'image-thumbnail';
import { ObjectID } from 'mongodb';
import fs from 'fs';
import dbClient from './utils/db';

const fileQueue = new Bull('fileQueue');

const generateThumbnail = async (path, options) => {
  try {
    const thumbnail = await imageThumbnail(path, options);
    const thumbnailPath = `${path}_${options.width}`;
    await fs.promises.writeFile(thumbnailPath, thumbnail);
  } catch (err) {
    console.error(`Error generating thumbnail: ${err.message}`);
  }
};

fileQueue.process(async (job, done) => {
  const { fileId } = job.data;

  if (!fileId) {
    done(new Error('Missing fileId'));
    return;
  }

  const file = await dbClient.db.collection('files').findOne({ _id: ObjectID(fileId) });
  if (!file) {
    done(new Error('File not found'));
    return;
  }

  const sizes = [500, 250, 100];

  await Promise.all(sizes.map((size) => generateThumbnail(file.localPath, { width: size })));

  done();
});
