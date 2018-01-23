import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtSidenavItem, AtPermissionsGuard } from 'ngx-atomic/core';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { DocNavigatorComponent } from './doc-navigator/doc-navigator.component';

export const VERSIONS: string[] = [
    'master',
];

export function getAllowedVersion(min?: string, max?: string): string[] {
    const minIndex: number = min ? VERSIONS.indexOf(min) : 0;
    const maxIndex: number = max ? VERSIONS.indexOf(max) + 1 : VERSIONS.length;

    return VERSIONS.slice(minIndex, maxIndex);
}

export const DOCUMENTATION_COMPONENTS: any[] = [
    DocNavigatorComponent,
    DocViewerComponent,
];

export const GENERAL_ROUTES: Routes = [
    {
        path: 'getting-started',
        component: DocViewerComponent,
        data: {
            atSidenavItem: {
                name: 'Getting Started',
                pathPrefix: 'docs/:version',
                icon: 'input',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: true,
                section: 'src/docs',
                module: 'getting-started'
            }
        },
    },
    {
        path: 'change-log',
        component: DocViewerComponent,
        data: {
            atSidenavItem: {
                name: 'Change Log',
                pathPrefix: 'docs/:version',
                icon: 'low_priority',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: true,
                section: 'src/docs',
                module: 'change-log'
            }
        },
    }
];

export const FRAMEWORK_ROUTES: Routes = [
    {
        path: 'framework',
        pathMatch: 'full',
        redirectTo: 'framework/core/layout',
        data: {
            atSidenavItem: {
                name: 'Framework',
                pathPrefix: 'docs/:version',
                position: 1,
                customClass: '',
                collapsible: false,
            }as AtSidenavItem,
        },
    },
    {
        path: 'framework/core',
        pathMatch: 'full',
        redirectTo: 'framework/core/layout',
        data: {
            atSidenavItem: {
                name: 'Core',
                pathPrefix: 'docs/:version',
                position: 1,
                customClass: '',
            } as AtSidenavItem,
        },
    },
    {
        path: 'framework/core/layout',
        component: DocViewerComponent,
        // canActivate: [AtPermissionsGuard],
        data: {
            atSidenavItem: {
                name: 'Layout',
                pathPrefix: 'docs/:version',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: false,
                section: 'src/lib/core',
                module: 'layout',
                examples: ['layout-basic', 'layout-card-over']
            }
        },
    },
    {
        path: 'framework/core/scrollbars',
        component: DocViewerComponent,
        // canActivate: [AtPermissionsGuard],
        data: {
            atSidenavItem: {
                name: 'Scrollbars',
                pathPrefix: 'docs/:version',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: false,
                section: 'src/lib/core',
                module: 'scrollbar',
                examples: ['scrollbar']
            }
        },
    },
    {
        path: 'framework/core/media',
        component: DocViewerComponent,
        // canActivate: [AtPermissionsGuard],
        data: {
            atSidenavItem: {
                name: 'Media Queries',
                pathPrefix: 'docs/:version',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: false,
                section: 'src/lib/core',
                module: 'media'
            }
        },
    },
    {
        path: 'framework/core/permissions',
        component: DocViewerComponent,
        // canActivate: [AtPermissionsGuard],
        data: {
            atSidenavItem: {
                name: 'Permissions',
                pathPrefix: 'docs/:version',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: false,
                section: 'src/lib/core',
                module: 'permissions'
            }
        },
    },
    {
        path: 'framework/components',
        pathMatch: 'full',
        redirectTo: 'framework/components/dialogs',
        data: {
            atSidenavItem: {
                name: 'Components',
                pathPrefix: 'docs/:version',
                position: 1,
                customClass: '',
            } as AtSidenavItem,
        },
    },
    {
        path: 'framework/components/dialogs',
        component: DocViewerComponent,
        // canActivate: [AtPermissionsGuard],
        data: {
            atSidenavItem: {
                name: 'Dialogs',
                pathPrefix: 'docs/:version',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: false,
                section: 'src/lib/components',
                module: 'dialogs',
                examples: ['dialogs'],
            },
        },
    },
    {
        path: 'framework/components/loading',
        component: DocViewerComponent,
        // canActivate: [AtPermissionsGuard],
        data: {
            atSidenavItem: {
                name: 'Loading',
                pathPrefix: 'docs/:version',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: false,
                section: 'src/lib/components',
                module: 'loading',
                examples: ['loading-circular', 'loading-linear'],
            },
        },
    },
    {
        path: 'framework/components/notifications',
        component: DocViewerComponent,
        // canActivate: [AtPermissionsGuard],
        data: {
            atSidenavItem: {
                name: 'Notifications',
                pathPrefix: 'docs/:version',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: false,
                section: 'src/lib/components',
                module: 'notifications',
                examples: ['notifications'],
            },
        },
    },
    {
        path: 'framework/forms',
        pathMatch: 'full',
        redirectTo: 'framework/forms/chips',
        data: {
            atSidenavItem: {
                name: 'Forms',
                pathPrefix: 'docs/:version',
                position: 1,
                customClass: '',
            } as AtSidenavItem,
        },
    },
    {
        path: 'framework/forms/chips',
        component: DocViewerComponent,
        // canActivate: [AtPermissionsGuard],
        data: {
            atSidenavItem: {
                name: 'Chips',
                pathPrefix: 'docs/:version',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: false,
                section: 'src/lib/forms',
                module: 'chips',
                examples: ['chips']
            }
        },
    },
    {
        path: 'framework/forms/search',
        component: DocViewerComponent,
        // canActivate: [AtPermissionsGuard],
        data: {
            atSidenavItem: {
                name: 'Search',
                pathPrefix: 'docs/:version',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: false,
                section: 'src/lib/forms',
                module: 'search',
                examples: ['search']
            }
        },
    },
    {
        path: 'framework/forms/form-field-box',
        component: DocViewerComponent,
        // canActivate: [AtPermissionsGuard],
        data: {
            atSidenavItem: {
                name: 'Form Field Box',
                pathPrefix: 'docs/:version',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: false,
                section: 'src/lib/forms',
                module: 'form-field-box',
                examples:['form-field']
            }
        },
    },
    {
        path: 'framework/forms/validators',
        component: DocViewerComponent,
        // canActivate: [AtPermissionsGuard],
        data: {
            atSidenavItem: {
                name: 'Validators',
                pathPrefix: 'docs/:version',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            },
            atPermissions: {
                allow: getAllowedVersion('master'),
                redirectTo: '/',
            },
            docViewer: {
                overviewOnly: false,
                section: 'src/lib/forms',
                module: 'validators',
            }
        },
    },

];

export const DOCUMENTATION_ROUTES: Routes = [
    {
        path: 'docs/:version',
        component: DocNavigatorComponent,
        children: [
            ...GENERAL_ROUTES,
            ...FRAMEWORK_ROUTES,
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(GENERAL_ROUTES),
        RouterModule.forChild(FRAMEWORK_ROUTES),
        RouterModule.forChild(DOCUMENTATION_ROUTES),
    ],
    exports: [RouterModule],
    entryComponents: [],
})

export class DocumentationRoutingModule {

}
