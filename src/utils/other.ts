import { App } from 'vue';
import * as svg from '@element-plus/icons-vue';
import elsvgIcon from '/@/components/elsvgIcon/index.vue';
/**
 * 导出全局注册 element plus svg 图标
 * @param app vue 实例
 * @description 使用：https://element-plus.gitee.io/zh-CN/component/icon.html
 */
export function elSvg(app: App) {
    const icons = svg as any;
    for (const i in icons) {
        app.component(`element${icons[i].name}`, icons[i]);
    }
    app.component('ELSvgIcon', elsvgIcon);
}

/**
 * 统一批量导出
 * @method elSvg 导出全局注册 element plus svg 图标
 */
const other = {
    elSvg: (app: App) => {
        elSvg(app);
    }
};

// 统一批量导出
export default other;