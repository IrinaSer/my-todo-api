import Router from 'koa-router';
import fs from 'fs';
import path from 'path';
import { Task } from '../../types';

const router = new Router();
const tasksFilePath = path.join(__dirname, '../../mocks/tasks.json');

router.get('/tasks', async (ctx) => {
  try {
    const data = await fs.promises.readFile(tasksFilePath, 'utf-8');
    const tasks: Task[] = JSON.parse(data);
    ctx.body = tasks;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Ошибка при чтении файла с данными' };
  }
});

export default router;
