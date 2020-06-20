export default {
  items: [
    {
      name: 'داشبورد اصلی',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'جدید',
      },
    },
    {
      title: true,
      name: 'تم پنل',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'رنگ ها',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'تایپوگرافی',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'کامپوننت ها',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'بیس اصلی',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'برید کرامب',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'کارت ها',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'کروسل ها',
          url: '/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'کولپس',
          url: '/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'دراپ داون',
          url: '/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'فرم ها',
          url: '/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'جومبوترن',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'لیست گروپ',
          url: '/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'نوبار',
          url: '/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'پیجینیشن',
          url: '/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'پوپورها',
          url: '/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'نوار پیشرفت',
          url: '/base/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'سویچ',
          url: '/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'جدول',
          url: '/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'تب',
          url: '/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'تولتیب',
          url: '/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'دکمه ها',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'دکمه ها',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'دکمه دراپ داون',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'گروه دکمه ها',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'دکمه برند',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'چارت',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'آیکون ها',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'آیکون های CoreUI',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'جدید',
          },
        },
        {
          name: 'پرچم ها',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'فونت آوسام',
          url: '/icons/font-awesome',
          icon: 'icon-star',
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'اعلان ها (Notification)',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'هشدار ها',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'بج',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'پاپ آپ',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'ویجت ها',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'صفحات',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'ورود',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'ثبت نام',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'ارور ۴۰۴',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'ارور ۵۰۰',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'غیر فعال',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
    {
      name: 'نوید بهروزی',
      url: 'https://navidbehroozi.ir',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
