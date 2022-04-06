**Setup**
```
$ npm install express-generator -g 
$ npm install nodemon
```
**Generator app**
```
$ mkdir (folder name)
$ cd (folder name) 
$ express --view=ejs crown2_12(app name)
$ code crown2_12 (app name)
```
**Install package**
```
$ npm i
```
**Start app**
```
npm start
```
**Modify to nodemon**
    1. open package.json
    2. modify
``` js
 "scripts": {
    "start": "node ./bin/www"
  }
> to
 "scripts": {
    "start": "nodemon ./bin/www"
  } 
```
**Modify public**

    1. open folder - public
    2. delete all 
    3. add crown_themes
![public](https://i.imgur.com/1rg322f.png)
**Modify views**

    1. add a folder crown2_12
    2. copy index.html to this folder
    3. change the file type by renaming the file to index.ejs

**Create Router** 

    // change the ui
    1. open app.js
    2. then adding
```js
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/crown2_12', crown2_12_Router); // this line
// and 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const crown2_12_Router = require('./routes/crown2_12') // this line 

var app = express();
```
    3. then adding file crown2_12.js 
    4. copy the code of file ./index.js
    5. then change the code to
```js
router.get('/', function(req, res, next) {
  res.render('crown2_12/index', { id: '409650412', name: 'chanyu' });
});
```
![index](https://i.imgur.com/uEUnUmw.png)
**Add name and id**

    1. go to the /views/crown2_12/index.ejs
    2. add this
```js
<div class="homepage">
    <div> // this line 
      <h3> <%= name %> <%= id %> </h3> // this line 
    </div> // this line
    <div class="directory-menu">
```