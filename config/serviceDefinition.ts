// Definition of the different services this template project offers

import {redirectPath} from "@/config/appConfig";

export const services = [
    {
        name: 'About this project',
        path: '/docs/about-this-project',
        icon: '/icons/info.svg',
        description: 'Learn more about this project and how to use it.'
    },
    {
        name: 'Documentation',
        path: redirectPath,
        icon: '/icons/docs.svg',
        description: 'Site docs generated from markdown content.'
    },
    {
        name: 'Auth',
        path: '/auth/sign-in',
        icon: '/icons/user.svg',
        description: 'User authentication and authorization.'
    },
]