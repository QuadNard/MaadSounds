# MaadSounds
> Music streaming service

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

MaadSounds is a cutting-edge Ecommerce Site designed to provide users with a seamless experience of discovering, playing, and licensing music. Leveraging the power of TRPC, MaadSounds integrates various technologies to offer a feature-rich platform for both users and sellers

![](header.png)

## Installation

Next

```sh
npm install 
```

## Features 

* Song Discovery and Licensing:
  -   Users can explore a vast library of songs, play previews, and seamlessly purchase licenses for their desired tracks.

* Payment Processing with Stripe:
  -   MaadSounds employs Stripe's programmable APIs for secure and efficient payment processing, enabling global transactions and payouts for sellers.

* Headless CMS with Payload:
  -  Payload, an open-source headless CMS, is utilized to manage Admin UI, local file storage, and uploads, including MP3 files, payment receipts, and images.

* MongoDB NoSQL Database:
  -  MaadSounds relies on MongoDB for storing essential data such as user information, MP3 files, user payment history, and more. NextAuth is employed for user authentication controls.

* Responsive Design:
  -  The application is built with full responsiveness for all devices, ensuring a seamless experience across various screen sizes.

* Client-side Form Validation:
  -  React-hook-form is employed for efficient client-side form validation and handling.

* Audio Playback:
  -  Users can play songs directly on the platform, creating a dynamic and engaging user experience.

* Playlist Management:
  -  MaadSounds supports the creation and management of playlists, enhancing user customization options.

* Advanced Player Component:
  -  The application features an advanced player component for an immersive music playback experience.

* RESTful API Routes:
  -  POST, GET, and DELETE routes are implemented in route handlers (app/api) to manage data interactions.

* Server-side Data Fetching:
  -  Data is fetched in server React Components by directly accessing the database, ensuring optimal performance.

* Real-time Component Interaction:
  -  The project demonstrates handling relations between server and child components in a real-time environment.

* Beautiful Landing and Product Pages:
  -  MaadSounds boasts aesthetically pleasing landing and product pages for an engaging user interface.

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
npm install 
npm run generate:types
npm run start 
```

## Release History

* 0.2.1
    * CHANGE: Update docs (module code remains unchanged)
* 0.2.0
    * CHANGE: Remove `setDefaultXYZ()`
    * ADD: Add `init()`
* 0.1.1
    * FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
* 0.1.0
    * The first proper release
    * CHANGE: Rename `foo()` to `bar()`
* 0.0.1
    * Work in progress

## Meta

[@YourTwitter](https://twitter.com/dbader_org) – jktulloch@gmail.com 

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (https://github.com/QuadNard/MaadSounds)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
