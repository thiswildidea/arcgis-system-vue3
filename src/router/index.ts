import { createRouter,createWebHashHistory} from 'vue-router';
export default createRouter({
    history: createWebHashHistory(),
    routes: [{
		path: '/',
		name: 'map',
		component: () => import('/@/components/map.vue'),
		meta: {
			title: '地图',
		}
    },
    {
		path: '/mapcontrol',
		name: 'mapcontrol',
		component: () => import('/@/components/mapcontrol.vue'),
		meta: {
			title: '地图',
		}
	}
   ]
})