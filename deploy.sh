#!/bin/bash
 
WEB_PATH='/var/www/webhook/'
WEB_USER='root'
WEB_USERGROUP='root'
# we can do 
echo "Start deployment vx.itnote.cn"
cd $WEB_PATH
echo "pulling source code..."
# 复制配置文件
cp .env.example .env
# git reset --hard origin/release
# git clean -f
# 把项目拉取到最新
git pull
git checkout master
echo "changing permissions..."
# 把vue项目编译
npm install
pm2 stop webhook
pm2 start server.js --name=webhook --watch
echo "Finished."