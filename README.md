# UBDC Starter kit - Multiple Zone Approach

---
title: Overview
author: andrew.c.clarke@glasgow.ac.uk
category: getting-started
---

#### Table of Contents
- [Introduction](#introduction)

## Introduction

The multiple zone approach is a software architecture pattern that allows you to divide your Next.js project into different zones or modules, each with its own set of functionalities and responsibilities. This approach promotes code modularity, maintainability, and scalability.

In this project, we provide a basic template for setting up a Next.js application following the multiple zone approach. You can extend and customize it to suit your specific project requirements.

# Explainer
-------------------------
This is a documentation template kit using Markdown and Next.js.

Although part of the [`ubdc-web-starter-kit`](https://github.com/urbanbigdatacentre/ubdc-web-starter-kit/tree/main) repository, this application is standalone and can be used as a static site template for any documentation site.

#### Why Use Me?

• You don't have Javascript experience (and don't want any)

• You want to create a static documentation site

• You don't to use a CMS

• You want to manage your docs in a git repository

• You want to use Markdown to create your docs

• You want the possibility of extending your site with React components



> **How To Use Me?**
> 1. Clone the repository - `git clone -b docs https://github.com/urbanbigdatacentre/ubdc-web-starter-kit.git`
> 2. Add folders and new `.md` files to the `/docs` directory
> 3. Start the Next.js server and explore your docs site - `npm run dev`
> 4. Deploy with Docker - config included

 
# Quick Start
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

Now find the `appConfig.ts` file in the `/config` directory. This file contains all the configuration options for your site. You can change the `title`, `description` and `author` of your site here.
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