const express = require('express')
const fs = require('fs')
const path = require('path')
const marked = require('marked')
const cheerio = require('cheerio')
const yargs = require('yargs')

const styleName = yargs.argv.style
const fileName = yargs.argv.file

const app = express()

// 同步读取 markdown 文件
const mdFile = fs.readFileSync(path.join(__dirname, 'posts/' + fileName), { encoding: 'utf8', flag: 'r' })

// 转化成 html 文件
const htmlFile = marked(mdFile)

// 设置 DOM
const $ = cheerio.load(htmlFile)

// 添加父节点
const section = $('<section class="container"></section>')
$('body').wrap(section)

// 生成设计实例
const Style = require('./styles/' + styleName)
const style = new Style()

// 添加补充节点
style.addDom($)

// 填充样式
style.list.forEach((item) => {
    // 获取选择器
    let selector = Object.keys(item)[0]

    for (const attrName in item[selector]) {
        const style = item[selector][attrName]
        
        // 更改 attrName
        let attrN = attrName.replace(/[A-Z]/, (match, partten) => {
            return '-' + match.toLowerCase()
        })

        // 加入样式
        $(selector).css( attrN, style )
    }
})

app.get('/', (req, res, next) => {
    res.send($.html())
})

console.log('自动排版已经完成，请打开浏览器预览并复制')

app.listen(3000, function () {
    console.log('网址：127.0.0.1:3000')
})