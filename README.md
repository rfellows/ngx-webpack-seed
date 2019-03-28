# ngx-webapp-seed

The ngx-seed is a seed project for Angular applications written in ES6. This project comes complete with SASS compliation and minification, Webpack build tools for bundling the application JS into a single file, Grunt tasks, npm for dependency management and build scripts, themeing of preinstalled design systems (Angular Material, Teradata Covalent), Internationalization (i18n), and JS unit testing and reporting with Karma, Jasmine, and Istanbul.

#### Developing
Developers can perform code changes and automatically build this project using **npm** from the root directory via:

```bash
npm run watch 
```

#### Building
Full builds are also available using **npm** from the root directory via:

```bash
npm run clean:install
```

or to build without running unit tests run:

```bash
npm run clean:install:skipTests
```

NOTE: Full builds for this seed project assume a 2 stage build and complete the first stage for you. In the first stage all of the assests for the project are copied into the `target/frontend-working-diorectory`, tested, and bundled/minified/obfuscated. It is up to the consumer of this project to include the index.html and optimized assests into any deployable archive.

#### Running full builds locally
Once built you can start the application from the `target/frontend-working-directory` directory via:

```bash
cd target/frontend-working-directory
npm start
```

The ngx-seed demo application should now be availalbe at: [http://127.0.0.1:8080/](http://127.0.0.1:8080/). The port may differ if there is a conflict on 8080. See the output of the start command for the
available URLs.


