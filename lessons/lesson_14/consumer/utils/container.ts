export async function initContainer() {
    // eslint-disable-next-line
    // @ts-ignore
    await __webpack_init_sharing__('default');
    // eslint-disable-next-line
    // @ts-ignore
    const container = window.remote;

    if (!container) {
        return;
    }
    // eslint-disable-next-line
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get('./Button');
    const Module = factory();

    return Module;
}


export function loadScript(src: string, id?: string): Promise<void> {
    return new Promise((resolve, reject) => {
        if (id && document.getElementById(id)) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.async = true;
        if (id) script.id = id;

        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

        document.head.appendChild(script);
    });
}
