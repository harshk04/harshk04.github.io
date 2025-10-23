import { chromium } from 'playwright';
import { spawn } from 'node:child_process';

const server = spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '4173'], {
  cwd: process.cwd(),
  stdio: ['ignore', 'pipe', 'pipe'],
  detached: true,
});

const waitForServer = async () => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      server.kill();
      reject(new Error('Preview server did not start in time'));
    }, 10000);

    const handleLine = (data) => {
      const text = data.toString();
      if (text.includes('Local') || text.includes('http')) {
        clearTimeout(timeout);
        server.stdout.off('data', handleLine);
        resolve();
      }
    };

    server.stdout.on('data', handleLine);
    server.stderr.on('data', (data) => {
      process.stderr.write(data);
    });

    server.on('exit', (code) => {
      clearTimeout(timeout);
      reject(new Error(`Preview server exited with code ${code}`));
    });
  });
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const main = async () => {
  try {
    await waitForServer();
    await delay(1000);

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    page.on('console', (msg) => {
      console.log('[console]', msg.type(), msg.text());
    });

    await page.goto('http://127.0.0.1:4173/about', {
      waitUntil: 'networkidle',
    });

    const initialText = await page.evaluate(() => document.body.innerText);
    console.log('Initial text length:', initialText.length);

    await page.getByRole('navigation').getByRole('link', { name: 'Projects' }).click();
    await page.waitForTimeout(1000);

    const navText = await page.evaluate(() => ({
      bodyLength: document.body.innerText.length,
      mainLength: document.querySelector('main')?.innerText.length ?? 0,
      hasProjectTitle: !!document.body.innerText.includes('Projects'),
    }));

    console.log('After navigation:', navText);
    await page.screenshot({ path: 'repro-after-nav.png', fullPage: true });

    await browser.close();
  } catch (error) {
    console.error(error);
  } finally {
    try {
      process.kill(-server.pid);
    } catch (err) {
      if (err.code !== 'ESRCH') {
        console.error('Failed to kill preview server:', err);
      }
    }
  }
};

main();
