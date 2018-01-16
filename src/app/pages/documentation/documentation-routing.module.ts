import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AtSidenavItem, AtPermissionsGuard} from '@atomic/core';
import {DocViewerComponent} from './doc-viewer/doc-viewer.component';
import {DocNavigatorComponent} from './doc-navigator/doc-navigator.component';

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
                module: 'at-layout',
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
                module: 'at-scrollbar',
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
                module: 'at-media'
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
                module: 'at-permissions'
            }
        },
    },
];

export const DOCUMENTATION_ROUTES: Routes = [
    {
        path: 'docs/:version',
        component: DocNavigatorComponent,
        children: [
            ...FRAMEWORK_ROUTES,
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(FRAMEWORK_ROUTES),
        RouterModule.forChild(DOCUMENTATION_ROUTES),
    ],
    exports: [RouterModule],
    entryComponents: [],
})

export class DocumentationRoutingModule {

}
