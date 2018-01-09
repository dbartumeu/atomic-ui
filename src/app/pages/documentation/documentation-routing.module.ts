import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { AtSidenavItem, AtPermissionsGuard } from '@atomic/core';
import { DocNavigatorComponent } from './doc-navigator/doc-navigator.component';

export const VERSIONS: string[] = [
    'untagged',
    'v1.0.0',
    'v1.0.1',
    'v1.0.2',
    'v1.1.0',
];

export function getAllowedVersion(min?: string, max?: string): string[] {
    const minIndex: number = min ? VERSIONS.indexOf(min) : 0;
    const maxIndex: number = max ? VERSIONS.indexOf(max) + 1 : VERSIONS.length;

    return VERSIONS.slice(minIndex, maxIndex);
}

export const DOCUMENTATION_COMPONENTS: any[] = [
    DocNavigatorComponent,
    LayoutComponent,
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
        component: LayoutComponent,
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
                allow: getAllowedVersion('untagged'),
                redirectTo: '/',
            },
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
