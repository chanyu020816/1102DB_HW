**Setup**
```python
$ npm install express-generator -g 
$ npm install nodemon
```
**Generator app**
```python
$ mkdir (folder name)
$ cd (folder name) 
$ express --view=ejs crown2_12(app name)
$ code crown2_12 (app name)
```
**Install package**
```python
$ npm i
```
**Start app**
```python
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
```html
<div class="homepage">
    <div> // this line 
      <h3> <%= name %> <%= id %> </h3> // this line 
    </div> // this line
    <div class="directory-menu">
```
### Heroku

    1. login
    2. create new app > name: crown2-1102db-hw
    3. => Resources page => Add-ons 
    4.type "Herok  Postgres" at the quick add
    5. => Setting => Config Vars => Reveal Config Vars
    6. copy
``` 
postgres://
rsiuqaahnockfn: // user.name
3e81cac92db030ea18463bbd38c5c93c1febb6aa1bcbc519c0f51d304e91b950@ // password
ec2-52-21-136-176.compute-1.amazonaws.com: // hostname
5432/ // port
d30j7qmalh3a9c // maintenance
```
### pgAdmin
| pgAdmin | Heroku |
| -------:| ------:|
|Host name|ec2-52-21-136-176.compute-1.amazonaws.com|
|Port| 5432|
|Maintenance|d30j7qmalh3a9c|
|Password|3e81cac92db030ea18463bbd38c5c93c1febb6aa1bcbc519c0f51d304e91b950|

**Search Server**
![pgAdmin](https://i.imgur.com/nsu9lI6.png)
**Add Node_Env**
![node_env](https://i.imgur.com/nATgbPo.png)
**Connect Heroku to Github**

    1. => Deploy page
    2. search repo
    3. connect repo
![connect_github](https://i.imgur.com/GfdjWA5.png)

    4. enable auto deploy
![aauto_deploy](https://i.imgur.com/JX3DZuJ.png)

    5. press deploy at "Manual Deploy"
    // if error then 
```python
$ npm install heroku
```