// 接口类型声明

// 布局配置
export interface SettingConfigState {
	view:any 
}

// 主接口(顶级类型声明)
export interface RootStateTypes {
	SettingConfig: SettingConfigState;
}
