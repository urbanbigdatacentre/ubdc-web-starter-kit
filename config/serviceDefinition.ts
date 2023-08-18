// Definition of the different services this template project offers

import {redirectPath} from "@/config/appConfig";

export const services = [
    {
        name: 'About this project',
        path: '/about',
        icon: 'info'
    },
    {
        name: 'Documentation',
        path: redirectPath,
        icon: 'home'
    },
    {
        name: 'Auth',
        path: '/auth/sign-in',
        icon: 'lock'
    },
]