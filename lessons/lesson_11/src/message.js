import { phrase } from './phrase';

export function getMessage() {
    return `Сообщение: ${phrase}`;
}

console.error('log from message module')
