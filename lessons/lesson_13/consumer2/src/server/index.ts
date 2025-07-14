// server.ts
import Hapi from '@hapi/hapi';

const init = async () => {
    const server = Hapi.server({
        port: 3002,
        host: '127.0.0.1',
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.response(`
                <!DOCTYPE html>
                <html lang="ru">
                <head>
                <meta charset="UTF-8">
                <title>Hapi Server</title>
                </head>
                <body>
                <div id="root"></div>
                <script src="/assets/main.js"></script>
                </body>
                </html>
            `).type('text/html');
        },
    });

    await server.start();
    console.log(`Сервер запущен на ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();
