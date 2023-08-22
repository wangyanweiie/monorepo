import XLayout from './layout/x-layout.vue';
import XLogo from './layout/x-logo.vue';
import XUser from './layout/x-user.vue';
import ParentView from './layout/parent-view.vue';
import ParentMenuView from './layout/parent-menu-view.vue';
import XTable from './table/x-table.vue';
import XSearchForm from './form/x-search-form.vue';
import XDialogForm from './form/x-dialog-form.vue';
import XForm from './form/x-form.vue';
import { generateActiveRoutes, generateCacheList, generateShowMenus } from './utils/router-helper';

export * from './form/interface';
export * from './table/interface';
export * from './layout/x-layout';

export {
    XLayout,
    ParentView,
    ParentMenuView,
    XLogo,
    XUser,
    XTable,
    XSearchForm,
    XDialogForm,
    XForm,
    generateActiveRoutes,
    generateCacheList,
    generateShowMenus,
};
