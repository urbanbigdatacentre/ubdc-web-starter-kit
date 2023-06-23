---
title: Quick Start
author: andrew.c.clarke@glasgow.ac.uk
category: getting-started
---

#### Table of Contents

## Explainer
-------------------------
This is a quick start guide to help you get up and running with your documentation site. The app is designed to be able quick and easy for anyone to use. 

You can add new folders, pages and markdown content and the site will automatically add new routes and render your new content. 

#### Pre-requisites
-------------------------
We assume you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [Git](https://git-scm.com/downloads)

For Deployment
- [Docker](https://www.docker.com/products/docker-desktop)

If you haven't already done so, clone the repository:

```bash
git clone -b docs https://github.com/urbanbigdatacentre/ubdc-web-starter-kit.git
```

> **In this guide**
> 1. Configure your site
> 2. Add content
> 3. Start the server
> 4. Explore your docs

## 1. Configure your site
You should already have cloned the repository and have a local folder with the project files. To install the dependencies, run the following command in the root of the project:

```bash
npm install
```

This will install all the dependencies required to run the app.

Now find the `appConfig.ts` file in the `/config` directory. This file contains all the configuration options for your site. You can change the following global variables here:

```javascript

export const siteTitle = 'UBDC Web Starter Kit';
export const siteDescription = 'A starter kit for creating web apps with Next.js, Material UI, and TypeScript.';
export const siteKeywords = 'docs, starter, template';
export const siteAuthor = 'Your Name';
export const pathToLogo = '/ubdc-logo.png';
export const pathToFavicon = '/favicon.ico';
export const redirectPath = '/docs/getting-started/overview'
export const siteTag = 'v0.0.1';
```

You can also change the `logo` and `favicon` by adding your own images to the `/public/images` directory and referencing them in the config file.

## 2. Add content
Docs are stored as markdown files in the `/docs` directory. Find the docs directory. You can add new folders and new `.md` files to the `/docs` directory. They will automatically appear on your docs site.
1. Add a new markdown file to the `/docs` directory called 'example.md'
2. Add the following content to the top of the file:

```markdown
---
title: Example
author: <your-email>
category: getting-started
---
```
This content is used to generate the page title, author and category.

Add the following markdown content to the file:

```markdown
# Example Page
This is an example page. You can add any markdown content here.

## Subheading
You can add subheadings and more markdown content.

### Sub-subheading
You can add sub-subheadings and more markdown content.

#### Sub-sub-subheading
You get the picture.
```

## 3. Start the server
Your docs site is now ready to roll. To start the server, run the following command in the root of the project:

```bash
npm run dev
```

This will start the Next.js server and open your docs site in your default browser. You can now explore your docs site at `http://localhost:3000`.

## 4. Explore your docs
You can now explore your docs site. You can add new folders and new `.md` files to the `/docs` directory. To get them to appear - refresh the page.