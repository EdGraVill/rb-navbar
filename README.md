# Navbar - React Basics

A React Basics Navbar component. Stateless, fully optimized with css animations, highly customizable, SEO support with Schemas.org and Mobile tap support.

## Installation

Into your project's root directory run the following command:


**npm**
```console
npm i -P rb-navbar
```

**Yarn**
```console
yarn add rb-navbar
```

This package only has 3 dependencies:

- `react@16.2.0`
- `font-awesome@4.7.0`
- `react-device-detect@1.0.0`

## Example

Navbar is one of the components inside React Basics, so if you want test it, go https://edgravill.github.io/react-basics and see it working.

> The website is under construction

## Usage

Component takes 100% of the parent's width.

```javascript
import React from 'react';
import Nav from 'rb-navbar';

const Index = () => (
  <div>
    <Nav
      backgroundColor="#ecf0f1"
      color="#34495e"
      links={[{
        href: '/',
        title: 'Home',
        icon: 'home'
      }, {
        href: '/about',
        title: 'About Us',
      }, {
        href: '/work',
        title: 'Our Work',
      }]}
    />
  </div>
);
```

Dropdown elements also are supported

See in `work` section below

```javascript
import React from 'react';
import Nav from 'rb-navbar';

const Index = () => (
  <div>
    <Nav
      backgroundColor="#ecf0f1"
      color="#34495e"
      links={[{
        href: '/',
        title: 'Home',
        icon: 'home'
      }, {
        href: '/about',
        title: 'About Us',
      }, {
        href: '/work',
        title: 'Our Work',
        links: [{
          href: '/work/web',
          title: 'Web',
        }, {
          href: '/work/mobile',
          title: 'Mobile',
        }]
      }]}
    />
  </div>
);
```

## API

|Prop|Required|Type|Default|Description|
|----|--------|----|-------|-----------|
|backgroundColor|`false`|`string`|`'#4A5459'`|Background of the Navbar.|
|brand|`false`|`Object`|`undefined`|Object with the brand or company basic information. It just display the info. See [Object definition](#brand) below.|
|color|`false`|`string`|`'#ecf0f1'`|Color of all fonts in Navbar.|
|height|`false`|`number`|`48`|Height of the Navbar.|
|links|`false`|`Array<Object>`|`[{ href: '/', title: 'Home', icon: 'home' }]`|Array of the links object. See [Object definition](#links) below.|
|search|`false`|`Object`|`undefined`|Object with the search options, this enables a searchbar inside Navbar. See [Object definition](#search) below.|
|style|`false`|`Object`|`{}`|Styles object.|
|userBox|`false`|`Object`|`undefined`|Object with userBox options, this enables a box where can add a login/user info. See [Object definition](#userBox) below.|

### Object definitions

#### brand

|Key|Required|Type|Default|Description|
|---|--------|----|-------|-----------|
|name|`true`|`string`|`undefined`|Display name|
|icon|`false`|`string`|`undefined`|Font Awesome Icon Name|

##### Example

```javascript
const brand = {
  name: 'React',
  icon: 'react',
};
```

#### links

|Key|Required|Type|Default|Description|
|---|--------|----|-------|-----------|
|href|`true`|`string`|`undefined`|URL.|
|title|`true`|`string`|`undefined`|Display Link Name.|
|icon|`false`|`string`|`undefined`|Font Awesome Icon Name.|
|links|`false`|`Array<Object>`|`undefined`|Enables dropdown taking same Object definition as links object.|

##### Example

```javascript
const links = {
  href: '/',
  title: 'Home',
  icon: 'home',
  links: [{
    href: '/about',
    title: 'About',
    icon: 'help',
  }],
};
```

#### search

|Key|Required|Type|Default|Description|
|---|--------|----|-------|-----------|
|mediumPlaceholder|`false`|`string`|`Search`|Placeholder to show in medium size if size is "medium" and is not active|
|size|`false`|`Enum: 'big' | 'medium' | 'small'`|`'medium'`|Size and style of the search bar|
|placeholder|`false`|`string`|`'Type something to search'`|Placeholder to show in size big or if actiive|
|onChange|`false`|`Function`|`undefined`|Function dispatch on type something and pass as param current value.|
|onSubmit|`true`|`Function`|`undefined`|Function dispatch on enter and pass as param current value.|
|width|`false`|`string`|`20rem`|Width of the searchbar in size big|

```javascript
const search = {
  mediumPlaceholder: 'Search',
  size: 'medium',
  placeholder: 'Type something to search',
  onChange: value => prepareSearch(value),
  onSubmit: value => search(value),
  width: '20rem',
};
```

#### userBox

|Key|Required|Type|Default|Description|
|---|--------|----|-------|-----------|
|icon|`false`|`string`|`undefined`|Font Awesome icon name to display aside the text.|
|text|`true`|`string`|`undefined`|Tex to display in navbar.|
|box|`true`|`React$Element`|`undefined`|Display Element inside the box when user hover the text.|

##### Example

```javascript
import Button from 'rb-buttons'; // <- Good package ;)

const userBox = {
  icon: user.isLogged ? 'user' : 'sign-in-alt',
  text: user.isLogged ? user.username : 'Sign In',
  box: user.isLogged ? () => (
    <div>
      <h3>Sign In</div>
      <form id="navbarSignIn">
        <input name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <Button text="Enter" loading={user.siging} />
      </form>
    </div>
  ) : () => (
    <div>
      <h3>Hello again {user.name}</h3>
    </div>
  ),
};
```

## Goals

- [x] Mobile tap to open dropdown (Since v1.0.0)
- [x] SEO support with Schemas.org (Since v1.0.0)
- [ ] Mobile responsive (Under develop)
- [ ] Integration of other icons (Under develop)

> looking for more? - Do a pull request with your proposals ;)

## Collaborators

- <img src="https://avatars0.githubusercontent.com/u/16921957?s=460&v=4" style="height: 22px; width: auto; " alt="EdGraVill"> Eduardo Grajales Villanueva @EdGraVill

> If you want to collaborate with this or another exist or new component inside React Basics, first do a pull request and then email me: edgravill@gmail.com

If you want pull request some changes, don't forget build it firt with the following command:

**npm**
```console
npm run build
```

**Yarn**
```console
yarn build
```

Once you're a collaborator don't forget 3 rules:

1. Version are `Mayor` (If APIs are deleted or create new one) `.` `Medium` (If APIs changes without changing name) `.` `Minimum` (If do some hotfix or related). This is because all 1.x.x are compatible, but are incompatible with 2.x.x
2. Build a great components and do the best documentation as you can.
3. Share with your developer friends. It would be useful for them.

Don't forget [join discussion on Slack](https://join.slack.com/t/react-basics/shared_invite/enQtMzM4MDMyNzM5NjgxLTMxYzcwMDMwYmNkZGIxNWFkZGZhMDVmNWU3OTQ3ZDhlYmZhOWU0NTkwMTdkNzg5ZTJhNWE3MDJlNTc3OGU4YjA)

## Licence

MIT License

Copyright (c) 2018 Eduardo Grajales Villanueva

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 