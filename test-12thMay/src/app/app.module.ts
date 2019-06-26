import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { SowReportComponent } from './featureModules/sow-report/Sow-report.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SowSearchPipe } from './shared/pipes/sow-search.pipe';
import {HttpClientModule} from '@angular/common/http';
import{SowReportService } from './featureModules/sow-report/sow-report-service';
import { ResourceLoadingComponent } from './resource-loading/resource-loading.component';
import { RouterModule, Routes } from '@angular/router';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';

const appRoutes: Routes = [
  { path: 'resource-loading', component: ResourceLoadingComponent },
  {
    path: 'resource-details',
    component: ResourceDetailsComponent 
  },
 
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    SowReportComponent,
    SowSearchPipe,
	 ResourceLoadingComponent,
	 ResourceDetailsComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    NgbModule,
	  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [SowReportService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
