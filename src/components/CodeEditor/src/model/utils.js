


//导入编辑器主题样式文件
export async function importEditorTheme(name){
    import(`../theme/theme-${name}.scss`).then(res=>{
        console.log(`已导入${name}.scss`,res)
    }).catch(err=>{
        console.log(`找不到${name}.scss`)
    })
}

//导入代码主题样式
export function importCodeTheme(name){
    import(`../code-theme/${name}.css`).then(res=>{
        console.log(`已导入${name}.css`,res)
    }).catch(err=>{
        console.log(`找不到${name}.css`)
    })
}
