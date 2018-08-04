
## 注意事项

### 局部热加载
```bash
目的:
        解决 局部刷新 问题
安装：
        npm i react-hot-loader -D
配置：
        - entry:['react-hot-loader/patch']
        - plugins:['react-hot-loader/babel']

        - index.js(入口文件):
          if(module.hot){
            module.hot.accept()
            }
```

### class静态属性
```bash
目的:
        解决class 中的static properties （静态属性）
安装:
        npm i babel-preset-stage-0 -D
配置：
        presets:['stage-0']
```

### 装饰器 @good
```bash
目的:
        解决class 中的 @good 装饰器方法
安装:
        npm i babel-plugin-transform-decorators-legacy -D
配置：   
        plugins:['transform-decorators-legacy']
```

### 动态引入文件信息
```bash
动态引入文件:
    npm i babel-plugin-transform-runtime -D
配置：
    - output:{
        chunkFilename:"[name].[contentHash:4].js"
    }
    - plugins:[
        "transform-runtime"
    ]

```

### 整体配置
```bash
    options: {
        "presets": ["env", "react","stage-0"],
        "plugins":[
            "transform-decorators-legacy",
            "transform-runtime"
        ]
    }
```