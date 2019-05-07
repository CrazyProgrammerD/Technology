const STORAGE_KEY = 'Testjs'

export default{
fetch(){ 
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)
    ||'[]')
    },
    save(items){ 
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
}




//getItem 、setItem 是window.localStorage 的获取和保存数据的方法
//用 JSON.stringify 、 JSON.parse 把数据转成字符串解析，这样方便写入tabledata