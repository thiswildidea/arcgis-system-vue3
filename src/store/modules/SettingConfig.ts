import { Module } from 'vuex';
// 此处加上 `.ts` 后缀报错，具体原因不详
import { SettingConfigState, RootStateTypes } from '/@/store/interface/index';

/**
 * 修改一下配置时，需要每次都清理 `window.localStorage` 浏览器永久缓存，配置才会生效
 * 哪个大佬有解决办法，欢迎pr，感谢💕！
 */
const SettingConfigModule: Module<SettingConfigState, RootStateTypes> = {
	namespaced: true,
	state: {
		view: null,
	},
	mutations: {
		// 设置布局配置
		getview(state: any, data: object) {
			state.view = data;
		},
	},
	actions: {
		// 设置布局配置
		setview({ commit }, data: object) {
			commit('getview', data);
		},
	},
};

export default SettingConfigModule;
