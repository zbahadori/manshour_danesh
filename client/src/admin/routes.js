import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/Admin/', exact: true, name: 'صفحه اصلی' },
  { path: '/Admin/dashboard', name: 'داشبورد', component: Dashboard },
  { path: '/Admin/theme', exact: true, name: 'تم گرافیکی', component: Colors },
  { path: '/Admin/theme/colors', name: 'رنگ ها', component: Colors },
  { path: '/Admin/theme/typography', name: 'تایپوگرافی', component: Typography },
  { path: '/Admin/base', exact: true, name: 'بیس اصلی', component: Cards },
  { path: '/Admin/base/cards', name: 'کارت ها', component: Cards },
  { path: '/Admin/base/forms', name: 'فرم ها', component: Forms },
  { path: '/Admin/base/switches', name: 'سویچ', component: Switches },
  { path: '/Admin/base/tables', name: 'جدول', component: Tables },
  { path: '/Admin/base/tabs', name: 'تب', component: Tabs },
  { path: '/Admin/base/breadcrumbs', name: 'بریدکرامب', component: Breadcrumbs },
  { path: '/Admin/base/carousels', name: 'کروسل', component: Carousels },
  { path: '/Admin/base/collapses', name: 'کولپس', component: Collapses },
  { path: '/Admin/base/dropdowns', name: 'دراپ داون', component: Dropdowns },
  { path: '/Admin/base/jumbotrons', name: 'جامپ ترونز', component: Jumbotrons },
  { path: '/Admin/base/list-groups', name: 'لیست گروهی', component: ListGroups },
  { path: '/Admin/base/navbars', name: 'نوبار', component: Navbars },
  { path: '/Admin/base/navs', name: 'نو خالی', component: Navs },
  { path: '/Admin/base/paginations', name: 'پیجینیشن', component: Paginations },
  { path: '/Admin/base/popovers', name: 'پاپ اور', component: Popovers },
  { path: '/Admin/base/progress-bar', name: 'نوار پیشرفت', component: ProgressBar },
  { path: '/Admin/base/tooltips', name: 'تولتیپ', component: Tooltips },
  { path: '/Admin/buttons', exact: true, name: 'دکه', component: Buttons },
  { path: '/Admin/buttons/buttons', name: 'دکمه ها', component: Buttons },
  { path: '/Admin/buttons/button-dropdowns', name: 'دکمه دراپ داون', component: ButtonDropdowns },
  { path: '/Admin/buttons/button-groups', name: 'دکمه گروهی', component: ButtonGroups },
  { path: '/Admin/buttons/brand-buttons', name: 'دکمه برند', component: BrandButtons },
  { path: '/Admin/icons', exact: true, name: 'آیکون ها', component: CoreUIIcons },
  { path: '/Admin/icons/coreui-icons', name: 'آیکون های CoreUI', component: CoreUIIcons },
  { path: '/Admin/icons/flags', name: 'پرچم ها', component: Flags },
  { path: '/Admin/icons/font-awesome', name: 'فونت آوسام', component: FontAwesome },
  { path: '/Admin/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/Admin/notifications', exact: true, name: 'اعلان ها (Notifications)', component: Alerts },
  { path: '/Admin/notifications/alerts', name: 'هشدار ها', component: Alerts },
  { path: '/Admin/notifications/badges', name: 'بج', component: Badges },
  { path: '/Admin/notifications/modals', name: 'پاپ آپ', component: Modals },
  { path: '/Admin/widgets', name: 'ویجت', component: Widgets },
  { path: '/Admin/charts', name: 'چارت', component: Charts },
  { path: '/Admin/users', exact: true, name: 'کاربران', component: Users },
  { path: '/Admin/users/:id', exact: true, name: 'جزئیات کاربر', component: User },
];

export default routes;
