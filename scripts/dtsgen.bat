mkdir node_modules\@types\mobx-react-devtools
::如果modules里没有d.ts文件,用工具生成
::dts-gen -m mobx-react-devtools -d node_moudles\@types
::如果已经有了，拷贝到@types目录
copy node_modules\mobx-react-devtools\index.d.ts node_modules\@types\mobx-react-devtools