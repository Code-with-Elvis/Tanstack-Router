---
title: File-Based Routing
---

Most of the TanStack Router documentation is written for file-based routing and is intended to help you understand in more detail how to configure file-based routing and the technical details behind how it works. While file-based routing is the preferred and recommended way to configure TanStack Router, you can also use [code-based routing](../code-based-routing.md) if you prefer.

## What is File-Based Routing?

File-based routing is a way to configure your routes using the filesystem. Instead of defining your route structure via code, you can define your routes using a series of files and directories that represent the route hierarchy of your application. This brings a number of benefits:

- **Simplicity**: File-based routing is visually intuitive and easy to understand for both new and experienced developers.
- **Organization**: Routes are organized in a way that mirrors the URL structure of your application.
- **Scalability**: As your application grows, file-based routing makes it easy to add new routes and maintain existing ones.
- **Code-Splitting**: File-based routing allows TanStack Router to automatically code-split your routes for better performance.
- **Type-Safety**: File-based routing raises the ceiling on type-safety by generating managing type linkages for your routes, which can otherwise be a tedious process via code-based routing.
- **Consistency**: File-based routing enforces a consistent structure for your routes, making it easier to maintain and update your application and move from one project to another.

## `/`s or `.`s?

While directories have long been used to represent route hierarchy, file-based routing introduces an additional concept of using the `.` character in the file-name to denote a route nesting. This allows you to avoid creating directories for few deeply nested routes and continue to use directories for wider route hierarchies. Let's take a look at some examples!

## Directory Routes

Directories can be used to denote route hierarchy, which can be useful for organizing multiple routes into logical groups and also cutting down on the filename length for large groups of deeply nested routes.

See the example below:

| Filename                | Route Path                | Component Output                  |
| ----------------------- | ------------------------- | --------------------------------- |
| ʦ `__root.tsx`          |                           | `<Root>`                          |
| ʦ `index.tsx`           | `/` (exact)               | `<Root><RootIndex>`               |
| ʦ `about.tsx`           | `/about`                  | `<Root><About>`                   |
| ʦ `posts.tsx`           | `/posts`                  | `<Root><Posts>`                   |
| 📂 `posts`              |                           |                                   |
| ┄ ʦ `index.tsx`         | `/posts` (exact)          | `<Root><Posts><PostsIndex>`       |
| ┄ ʦ `$postId.tsx`       | `/posts/$postId`          | `<Root><Posts><Post>`             |
| 📂 `posts_`             |                           |                                   |
| ┄ 📂 `$postId`          |                           |                                   |
| ┄ ┄ ʦ `edit.tsx`        | `/posts/$postId/edit`     | `<Root><EditPost>`                |
| ʦ `settings.tsx`        | `/settings`               | `<Root><Settings>`                |
| 📂 `settings`           |                           | `<Root><Settings>`                |
| ┄ ʦ `profile.tsx`       | `/settings/profile`       | `<Root><Settings><Profile>`       |
| ┄ ʦ `notifications.tsx` | `/settings/notifications` | `<Root><Settings><Notifications>` |
| ʦ `_pathlessLayout.tsx` |                           | `<Root><PathlessLayout>`          |
| 📂 `_pathlessLayout`    |                           |                                   |
| ┄ ʦ `route-a.tsx`       | `/route-a`                | `<Root><PathlessLayout><RouteA>`  |
| ┄ ʦ `route-b.tsx`       | `/route-b`                | `<Root><PathlessLayout><RouteB>`  |
| 📂 `files`              |                           |                                   |
| ┄ ʦ `$.tsx`             | `/files/$`                | `<Root><Files>`                   |
| 📂 `account`            |                           |                                   |
| ┄ ʦ `route.tsx`         | `/account`                | `<Root><Account>`                 |
| ┄ ʦ `overview.tsx`      | `/account/overview`       | `<Root><Account><Overview>`       |

## Flat Routes

Flat routing gives you the ability to use `.`s to denote route nesting levels.

This can be useful when you have a large number of uniquely deeply nested routes and want to avoid creating directories for each one:

See the example below:

| Filename                        | Route Path                | Component Output                  |
| ------------------------------- | ------------------------- | --------------------------------- |
| ʦ `__root.tsx`                  |                           | `<Root>`                          |
| ʦ `index.tsx`                   | `/` (exact)               | `<Root><RootIndex>`               |
| ʦ `about.tsx`                   | `/about`                  | `<Root><About>`                   |
| ʦ `posts.tsx`                   | `/posts`                  | `<Root><Posts>`                   |
| ʦ `posts.index.tsx`             | `/posts` (exact)          | `<Root><Posts><PostsIndex>`       |
| ʦ `posts.$postId.tsx`           | `/posts/$postId`          | `<Root><Posts><Post>`             |
| ʦ `posts_.$postId.edit.tsx`     | `/posts/$postId/edit`     | `<Root><EditPost>`                |
| ʦ `settings.tsx`                | `/settings`               | `<Root><Settings>`                |
| ʦ `settings.profile.tsx`        | `/settings/profile`       | `<Root><Settings><Profile>`       |
| ʦ `settings.notifications.tsx`  | `/settings/notifications` | `<Root><Settings><Notifications>` |
| ʦ `_pathlessLayout.tsx`         |                           | `<Root><PathlessLayout>`          |
| ʦ `_pathlessLayout.route-a.tsx` | `/route-a`                | `<Root><PathlessLayout><RouteA>`  |
| ʦ `_pathlessLayout.route-b.tsx` | `/route-b`                | `<Root><PathlessLayout><RouteB>`  |
| ʦ `files.$.tsx`                 | `/files/$`                | `<Root><Files>`                   |
| ʦ `account.tsx`                 | `/account`                | `<Root><Account>`                 |
| ʦ `account.overview.tsx`        | `/account/overview`       | `<Root><Account><Overview>`       |

## Mixed Flat and Directory Routes

It's extremely likely that a 100% directory or flat route structure won't be the best fit for your project, which is why TanStack Router allows you to mix both flat and directory routes together to create a route tree that uses the best of both worlds where it makes sense:

See the example below:

| Filename                       | Route Path                | Component Output                  |
| ------------------------------ | ------------------------- | --------------------------------- |
| ʦ `__root.tsx`                 |                           | `<Root>`                          |
| ʦ `index.tsx`                  | `/` (exact)               | `<Root><RootIndex>`               |
| ʦ `about.tsx`                  | `/about`                  | `<Root><About>`                   |
| ʦ `posts.tsx`                  | `/posts`                  | `<Root><Posts>`                   |
| 📂 `posts`                     |                           |                                   |
| ┄ ʦ `index.tsx`                | `/posts` (exact)          | `<Root><Posts><PostsIndex>`       |
| ┄ ʦ `$postId.tsx`              | `/posts/$postId`          | `<Root><Posts><Post>`             |
| ┄ ʦ `$postId.edit.tsx`         | `/posts/$postId/edit`     | `<Root><Posts><Post><EditPost>`   |
| ʦ `settings.tsx`               | `/settings`               | `<Root><Settings>`                |
| ʦ `settings.profile.tsx`       | `/settings/profile`       | `<Root><Settings><Profile>`       |
| ʦ `settings.notifications.tsx` | `/settings/notifications` | `<Root><Settings><Notifications>` |
| ʦ `account.tsx`                | `/account`                | `<Root><Account>`                 |
| ʦ `account.overview.tsx`       | `/account/overview`       | `<Root><Account><Overview>`       |

Both flat and directory routes can be mixed together to create a route tree that uses the best of both worlds where it makes sense.

> [!TIP]
> If you find that the default file-based routing structure doesn't fit your needs, you can always use [Virtual File Routes](../virtual-file-routes.md) to control the source of your routes whilst still getting the awesome performance benefits of file-based routing.

## Getting started with File-Based Routing

To get started with file-based routing, you'll need to configure your project's bundler to use the TanStack Router Plugin or the TanStack Router CLI.

To enable file-based routing, you'll need to be using React with a supported bundler. See if your bundler is listed in the configuration guides below.

[//]: # "SupportedBundlersList"

- [Installation with Vite](../installation-with-vite.md)
- [Installation with Rspack/Rsbuild](../installation-with-rspack.md)
- [Installation with Webpack](../installation-with-webpack.md)
- [Installation with Esbuild](../installation-with-esbuild.md)

[//]: # "SupportedBundlersList"

When using TanStack Router's file-based routing through one of the supported bundlers, our plugin will **automatically generate your route configuration through your bundler's dev and build processes**. It is the easiest way to use TanStack Router's route generation features.

If your bundler is not yet supported, you can reach out to us on Discord or GitHub to let us know. Till then, fear not! You can still use the [`@tanstack/router-cli`](../installation-with-router-cli.md) package to generate your route tree file.

---

## title: File Naming Conventions

File-based routing requires that you follow a few simple file naming conventions to ensure that your routes are generated correctly. The concepts these conventions enable are covered in detail in the [Route Trees & Nesting](../route-trees.md) guide.

| Feature                            | Description                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`__root.tsx`**                   | The root route file must be named `__root.tsx` and must be placed in the root of the configured `routesDirectory`.                                                                                                                                                                                                                                                                 |
| **`.` Separator**                  | Routes can use the `.` character to denote a nested route. For example, `blog.post` will be generated as a child of `blog`.                                                                                                                                                                                                                                                        |
| **`$` Token**                      | Route segments with the `$` token are parameterized and will extract the value from the URL pathname as a route `param`.                                                                                                                                                                                                                                                           |
| **`_` Prefix**                     | Route segments with the `_` prefix are considered to be pathless layout routes and will not be used when matching its child routes against the URL pathname.                                                                                                                                                                                                                       |
| **`_` Suffix**                     | Route segments with the `_` suffix exclude the route from being nested under any parent routes.                                                                                                                                                                                                                                                                                    |
| **`-` Prefix**                     | Files and folders with the `-` prefix are excluded from the route tree. They will not be added to the `routeTree.gen.ts` file and can be used to colocate logic in route folders.                                                                                                                                                                                                  |
| **`(folder)` folder name pattern** | A folder that matches this pattern is treated as a **route group**, preventing the folder from being included in the route's URL path.                                                                                                                                                                                                                                             |
| **`[x]` Escaping**                 | Square brackets escape special characters in filenames that would otherwise have routing meaning. For example, `script[.]js.tsx` becomes `/script.js` and `api[.]v1.tsx` becomes `/api.v1`.                                                                                                                                                                                        |
| **`index` Token**                  | Route segments ending with the `index` token (before any file extensions) will match the parent route when the URL pathname matches the parent route exactly. This can be configured via the `indexToken` configuration option, see [options](../../../../api/file-based-routing.md#indextoken).                                                                                   |
| **`.route.tsx` File Type**         | When using directories to organise routes, the `route` suffix can be used to create a route file at the directory's path. For example, `blog.post.route.tsx` or `blog/post/route.tsx` can be used as the route file for the `/blog/post` route. This can be configured via the `routeToken` configuration option, see [options](../../../../api/file-based-routing.md#routetoken). |

> **💡 Remember:** The file-naming conventions for your project could be affected by what [options](../../../../api/file-based-routing.md) are configured.

## Dynamic Path Params

Dynamic path params can be used in both flat and directory routes to create routes that can match a dynamic segment of the URL path. Dynamic path params are denoted by the `$` character in the filename:

| Filename              | Route Path       | Component Output      |
| --------------------- | ---------------- | --------------------- |
| ...                   | ...              | ...                   |
| ʦ `posts.$postId.tsx` | `/posts/$postId` | `<Root><Posts><Post>` |

We'll learn more about dynamic path params in the [Path Params](../../guide/path-params.md) guide.

## Pathless Routes

Pathless routes wrap child routes with either logic or a component without requiring a URL path. Non-path routes are denoted by the `_` character in the filename:

| Filename       | Route Path | Component Output |
| -------------- | ---------- | ---------------- |
| ʦ `_app.tsx`   |            |                  |
| ʦ `_app.a.tsx` | /a         | `<Root><App><A>` |
| ʦ `_app.b.tsx` | /b         | `<Root><App><B>` |

To learn more about pathless routes, see the [Routing Concepts - Pathless Routes](../routing-concepts.md#pathless-layout-routes) guide.
