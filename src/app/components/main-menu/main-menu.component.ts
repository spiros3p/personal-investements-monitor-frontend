import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { mainRoutes } from 'src/app/app-routing.module';

const MAIN_ROUTES = mainRoutes;

@Component({
    selector: 'app-main-menu',
    standalone: true,
    imports: [MenubarModule],
    templateUrl: './main-menu.component.html',
    styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent implements OnInit {
    menuItems = signal<MenuItem[]>([]);

    ngOnInit(): void {
        this.defineMenu();
    }

    private defineMenu() {
        const items = MAIN_ROUTES.map((d) => this.mapToMenuItem(d));
        this.menuItems.set(items);
    }

    private mapToMenuItem(d: any): MenuItem {
        return {
            label: d.title,
            routerLink: "/" + d.path,
        };
    }
}
