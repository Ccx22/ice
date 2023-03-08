export function routeConfig() {
    return [
        {
            key: '1',
            title: '首页',
            breadcrumb: ['一级导航1', '二级导航', '首页'],
            path: '/control/dashboard',
            component: () => './pages/dashboard'
        },
        {
            key: '2',
            title: '关于',
            breadcrumb: ['一级导航2', '关于'],
            path: '/control/about',
            component: () => './pages/about'
        }
    ]
}
export function defaultTag() {
    return [
        {
            key: '1',
            title: '首页',
            breadcrumb: ['一级导航1', '二级导航', '首页'],
            path: '/control/dashboard',
            component: () => './pages/dashboard',
            closed: false
        }
    ]
}
export function menuConfig() {
    return {
        defaultOpenKeys: ['sub1', 'sub2'],
        defaultSelectKeys: ['1'],
        menuList: [
            {
                key: 'sub1',
                title: '一级导航1',
                icon: '',
                isSub: true,
                disabled: false,
                children: [
                    {
                        key: 'sub2',
                        title: '二级导航',
                        icon: '',
                        isSub: true,
                        disabled: false,
                        children: [
                            {
                                key: '1',
                                title: '首页',
                                breadcrumb: ['一级导航1', '二级导航', '首页'],
                                path: '/control/dashboard',
                                isSub: false,
                                disabled: false,
                            }
                        ]
                    }
                ]
            },
            {
                key: 'sub3',
                title: '一级导航2',
                icon: '',
                isSub: true,
                disabled: false,
                children: [
                    {
                        key: '2',
                        title: '关于',
                        breadcrumb: ['一级导航2', '关于'],
                        path: '/control/about',
                        isSub: false,
                        disabled: false,
                    }
                ]
            }
        ]
    }
}