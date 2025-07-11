
    export type RemoteKeys = 'provider' | 'provider/HelloWorld';
    type PackageType<T> = T extends 'provider/HelloWorld' ? typeof import('provider/HelloWorld') :T extends 'provider' ? typeof import('provider') :any;