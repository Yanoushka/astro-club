/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
    export interface ProcessEnv {
        NEXT_PUBLIC_API_STRIPE_KEY: string;
    }
}