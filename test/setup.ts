import { rm } from 'fs/promises';
import { join } from 'path';

global.beforeEach(async () => {
  console.log(__dirname, '_____________');
  try {
    await rm(join(__dirname, '..', 'test.sqlite'));
  } catch (err) {}
});
