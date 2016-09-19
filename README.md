##### 生产依赖（dependencies）就是上线的时候需要开发的时候也需要，开发依赖（devDependencies）就是开发的时候需要上线的时候不需要
##### 尽量不要全局安装依赖的包，这样package。json 里面的别人npm install就可以了安装依赖了，不容易缺少包而报错，还有就是全局安装容易产生版本冲突，比如有A和B两个项目，A和B依赖的包工具版本不一样，且不能共用同一个版本，否则报错，故建议本地安装！node是common.js的规范
```
"scripts": {
    "build": "webpack"
}
脚本  key(脚本的名字) and value(对应的cmd下执行的命令) 执行npm run 脚本名字（也就是执行脚本名字对应的cmd下的命令）
当执行npm run 脚本名字的时候会node_modules/bin下找，找不到全局找，再找不到就报错
```
> 请注意webpack.config.js这个文件名是定死的，不然会报Output filename not configured的错误；另外，如果不按这个命名，那么在webpack运行的时候需要通过--config这个参数指定配置文件，比如：webpack --config conf.js
##### babel是一个工具，负责把es6变成es5 Babel是一个通用编译器，因此默认情况下它反而什么都不做,你必须明确地告诉Babel应该要做什么 在项目根目录下创建.babelrc文件,这是用来让Babel做你要它做的事情的配置文件