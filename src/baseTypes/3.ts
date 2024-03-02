let some: unknown;
some = 'Text';

function isString(value: any): value is string {
    return typeof value === 'string';
}

let str: string;
if (isString(some)) {
    str = some;
} else {
    // обробка ситуації, коли тип не є рядком
}
