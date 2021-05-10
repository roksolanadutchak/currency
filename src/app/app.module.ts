import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { MyChartComponent } from './my-chart/my-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    CreateItemComponent,
    ViewItemsComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxEchartsModule.forRoot({
      echarts,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
