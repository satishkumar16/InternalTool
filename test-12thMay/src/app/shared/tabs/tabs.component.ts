import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'custom-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit {
  @Input() tabs;
  @Output() selectTab = new EventEmitter();

  activeTab;

  constructor()  {}

  ngOnInit() {
    this.activeTab = this.tabs[0].tabName;
  } 

  switchTab(tab) {
    this.activeTab = tab.tabName;
    this.selectTab.emit(this.activeTab);
  }

}
