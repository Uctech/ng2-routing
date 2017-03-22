"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var contact_component_1 = require('./Contact/contact.component');
var not_found_component_1 = require('./not-found/not-found.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent } //order of placement is very importamt always place it at the buttom
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map