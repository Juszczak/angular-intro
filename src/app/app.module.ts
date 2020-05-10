import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForComponent } from './for/for.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [AppComponent, IfComponent, ForComponent, SwitchComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
