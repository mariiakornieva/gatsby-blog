---
title: How I Set Up My Pet Projects
date: "2021-08-07T22:40:32.169Z"
description: Important and often underestimated steps
---

Whenever I start a new web app project I set up linter, prettier and git pre-commit hooks in the repository.

I find these three tools to be crucial and vital to ensure the overall quality of the code. Unfortunately, I still see a lot of youtube videos out there that never mention the importance of setting up tooling before writing your first line of code. Fair enough, if your project is tiny and you're the only one working on it that might be ok. Otherwise, I would advocate for using these tools.

Prettier, even being opinionated formatter, let's you not care about the formatting at all. Machine should do repetitive job, human should do creative job and solve business problems with the code they write. The philosophy of prettier and why it's become de-facto industry standard is making the formatting unified across the industry, so when you're switching from project to project you don't feel overwhelmed by unfamiliar formatting rules.

Linters are static code analysis tools and catch code quality bugs and stylistic errors for you. They are different from simple formatting tool such as prettier by the fact that linter might modify the AST in order to fix found problem, while prettier simply formats the code without semantic changes.

It's a good practice to run linter before committing changes to git and on CI/CD pipeline. It allows to make sure that code will be formatted consicely and bugs that can be catched before runtime will be eliminated.

And last, but not least, linters let you learn new technologies faster by figuring out the bugs or style issues for you.
