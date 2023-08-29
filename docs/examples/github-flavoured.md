---
title: GitHub Flavoured Markdown
author: andrew.c.clarke@glasgow.ac.uk
category: examples
tags: [components, markdown]
---

#### Table of Contents


# Explainer
-------------------------
This document shows the extra markdown components you can create using github flavoured markdown. 

The components are enabled through the `remark-gfm` plugin. See the [remark-gfm docs](https://github.com/remarkjs/remark-gfm)

# Table
-------------------------
#### Markdown Example
```markdown
| Parameter | Value |
| --- | --- |
| Host | `172.20.67.58` |
| Port | `5432` |
| Database | `db`           |
| Username | `user`         |
| Password | `password`     |
```
#### Component
| Parameter | Value          |
| --- |----------------|
| Host | `172.20.67.58` |
| Port | `5432`         |
| Database | `db`           |
| Username | `user`         |
| Password | `password`     |

# Tasklist
-------------------------
#### Markdown Example
```markdown
* [ ] to do
* [x] done
```
#### Component
* [ ] To do
* [x] Done

# Strikethrough
-------------------------
#### Markdown Example
```markdown
~one~ or ~~two~~ tildes.
```
#### Component
~one~ or ~~two~~ tildes.


# Auto-linking
-------------------------
#### Markdown Example
```markdown
www.example.com, https://example.com, and contact@example.com.
```
#### Component
www.example.com, https://example.com, and contact@example.com.
