## add git
$git --version
$git remote add origin https://github.com/pumpuiy/member-system-api.git
$git push -u origin master

## install nestjs
npm install -g @nestjs/cli

## 
nest --version

# new nest project
$ nest new my-nest-project
$ cd my-nest-project
$ npm run start:dev

#install feature
$npm install --save @nestjs/mongoose mongoose

# create module
$nest g module todo
$nest g controller todo หรือ $nest g controller todo --no--spec