*Install express generator*
```
$npm install express-generator -g 
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
```
$ npm install nodemon
```
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
