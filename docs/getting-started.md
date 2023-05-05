---
title: Getting Started
slug: getting-started
author: andrew.c.clarke@glasgow.ac.uk
category: Getting Started
---

##### Table of Contents

# 👋 Overview
-------------------------
This is a dummy documentation page to illustrate the creation of dynamic html pages from markdown files.
Dynamic documentation pages are stored as markdown files in the `/docs` directory.

```bash
cd docs
```

```javascript
const a = 1;
const a = 1;
const a = 1;
const a = 1;

const handleEmailLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInEmailPasswordless(email)
        .catch((error) => {
            // Getting the Error details.
            console.error(error);
            return error.message;
        })
        .then(res => {

            if (isLoading) {
                toast.loading('Checking your details ...')
            } else if (res.isError) {
                res.error?.message ? toast.error(res.error?.message) : toast.error("Something went wrong")
            } else if (res.isSuccess) {
                toast.success('Check your email for the magic link.')
            }
        })
}
```

# 📄 Creating a new page
-------------------------
To create a new page, simply create a new markdown file in the `/docs` directory. You can add meta information to the top of the page including a `title`
'slug' and `description`. The slug is used to generate the url for the page. The title is used in the navigation menu and the description is used in the meta tags.

> Here is an example of an indent blockquote
> > Here is an example of a double indent blockquote
>

[//]: # (Here's an image)
[//]: # (![UBDC Logo]&#40;/ubdc-logo.png&#41;)

[Here's a link to the UBDC website](https://ubdc.ac.uk)

__This is bold text__

