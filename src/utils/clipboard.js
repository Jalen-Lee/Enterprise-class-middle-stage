import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess() {
    Vue.prototype.$message({
        message: '已复制到剪切板',
        type: 'success',
        duration: 1500
    })
}

function clipboardError() {
    Vue.prototype.$message({
        message: '复制失败，按 Ctrl+C 手动复制',
        type: 'error'
    })
}

export default function handleClipboard(text, event) {
    const clipboard = new Clipboard(event.target, {
        text: () => text
    })
    clipboard.on('success', () => {
        clipboardSuccess()
        clipboard.destroy()
    })
    clipboard.on('error', () => {
        clipboardError()
        clipboard.destroy()
    })
    clipboard.onClick(event)
}
