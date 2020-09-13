// npm i, i express, i express-handlebars, i nodemon, i mysql

var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/Controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});



// Breadcrumbs
// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200912hw (master)
// $ npm i
// npm WARN mvc_design@1.0.0 No description
// npm WARN mvc_design@1.0.0 No repository field.

// audited 114 packages in 1.521s

// 2 packages are looking for funding
//   run `npm fund` for details

// found 41 vulnerabilities (16 low, 5 moderate, 20 high)
//   run `npm audit fix` to fix them, or `npm audit` for details

// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200912hw (master)
// $ npm i express
// npm WARN mvc_design@1.0.0 No description
// npm WARN mvc_design@1.0.0 No repository field.

// + express@4.17.1
// updated 3 packages and audited 114 packages in 2.731s

// 2 packages are looking for funding
//   run `npm fund` for details

// found 41 vulnerabilities (16 low, 5 moderate, 20 high)
//   run `npm audit fix` to fix them, or `npm audit` for details

// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200912hw (master)
// $ npm i express-handlebars
// npm WARN mvc_design@1.0.0 No description
// npm WARN mvc_design@1.0.0 No repository field.

// + express-handlebars@3.1.0
// removed 2 packages, updated 7 packages and audited 112 packages in 3.612s
// found 40 vulnerabilities (15 low, 5 moderate, 20 high)
//   run `npm audit fix` to fix them, or `npm audit` for details

// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200912hw (master)
// $ npm i mysql
// npm WARN mvc_design@1.0.0 No description
// npm WARN mvc_design@1.0.0 No repository field.

// + mysql@2.18.1
// updated 1 package and audited 112 packages in 1.953s

// 2 packages are looking for funding
//   run `npm fund` for details

// found 40 vulnerabilities (15 low, 5 moderate, 20 high)
//   run `npm audit fix` to fix them, or `npm audit` for details

// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200912hw (master)
// $ npm i nodemon

// > nodemon@2.0.4 postinstall C:\Users\HRD1-2\Desktop\gatech-bc\200912hw\node_modules\nodemon
// > node bin/postinstall || exit 0

// npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.1.2 (node_modules\chokidar\node_modules\fsevents):
// npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
// npm WARN mvc_design@1.0.0 No description
// npm WARN mvc_design@1.0.0 No repository field.

// + nodemon@2.0.4
// added 111 packages from 52 contributors and audited 224 packages in 8.017s

// 12 packages are looking for funding
//   run `npm fund` for details

// found 40 vulnerabilities (15 low, 5 moderate, 20 high)
//   run `npm audit fix` to fix them, or `npm audit` for details

// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200912hw (master)
// $ mysql -u root -p
// Enter password: ****
// Welcome to the MySQL monitor.  Commands end with ; or \g.
// Your MySQL connection id is 30
// Server version: 8.0.21 MySQL Community Server - GPL

// Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

// Oracle is a registered trademark of Oracle Corporation and/or its
// affiliates. Other names may be trademarks of their respective
// owners.

// Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

// mysql>

// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200912hw (master)
// $ cd db/

// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200912hw/db (master)
// $ mysql -u root -p
// Enter password: ****
// Welcome to the MySQL monitor.  Commands end with ; or \g.
// Your MySQL connection id is 32
// Server version: 8.0.21 MySQL Community Server - GPL

// Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

// Oracle is a registered trademark of Oracle Corporation and/or its
// affiliates. Other names may be trademarks of their respective
// owners.

// Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

// mysql> source schema.sql
// Query OK, 1 row affected (0.01 sec)

// Database changed
// Query OK, 0 rows affected (0.12 sec)

// mysql> source seeds.sql
// Query OK, 1 row affected (0.03 sec)

// mysql>   