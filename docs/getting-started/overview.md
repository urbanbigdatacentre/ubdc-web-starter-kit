---
title: Overview
author: andrew.c.clarke@glasgow.ac.uk
category: getting-started
---

#### Table of Contents

## Explainer
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
> 1. Clone the repository - `git clone https://github.com/urbanbigdatacentre/ubdc-web-starter-kit.git`
> 2. Add folders and new `.md` files to the `/docs` directory
> 3. Start the Next.js server and explore your docs site - `npm run dev`
> 4. Deploy with Docker - config included

## Creating a new page
-------------------------
Docs are stored as markdown files in the `/docs` directory. They get automatically added to the site and a new route is created for each page.

To create a new page, simply create a new markdown file in the `/docs` directory. You can add meta information to the top of the page including a `title`
`author` and `category`.

## Using Images
-------------------------
Images are bundled through [Next.js Static Assets](https://nextjs.org/docs/app/building-your-application/optimizing/static-assets) and can be added to your markdown files by adding the following code:

```markdown
![alt text](/path/to/image.png "Image Title")
```
You can store images in the `/public` directory and reference them directly in your markdown files.

For instance, if you have an image called `my-image.png` in the `/public/images` directory, you can add it to your markdown file like so:

```markdown
![alt text](/images/my-image.png "Image Title")
```





