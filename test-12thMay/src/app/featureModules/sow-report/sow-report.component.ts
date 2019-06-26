import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { SowReportService } from './sow-report-service';
import * as _ from 'underscore';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sow-report',
  templateUrl: './sow-report.component.html',
  styleUrls: ['./sow-report.component.scss'],
  providers: [SowReportService]
})

export class SowReportComponent implements OnInit {
 
  tabList = [
    {tabName:'Active'},
    {tabName:'Progress'},
    {tabName:'Completed'},
    {tabName:'Cancelled'}
  ];

  sowReportData = [];
  reportDataBackup = [];
  closeResult: string;
  modalRef: NgbModalRef;
  @ViewChild('deleteSow') deleteModal:TemplateRef <any>;
              
  constructor(private sowReportService: SowReportService, private modalService: NgbModal) { }

  ngOnInit() {
    this.sowReportService.getSowData().subscribe(data => {
        this.reportDataBackup = data;

        this.sowReportData = _.filter(this.reportDataBackup, status => {
            return status.recordType === 'Active';
        });
                            
    });
  }

  loadData(tabName) {
    this.sowReportData = _.filter(this.reportDataBackup, status => {
      return status.recordType === tabName;
    });
        
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    
    });
  }


  deleteRecord(){
     this.modalRef = this.modalService.open(this.deleteModal);
    
  
    }  






}
