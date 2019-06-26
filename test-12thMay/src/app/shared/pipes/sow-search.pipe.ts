import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sowSearch'
})
export class SowSearchPipe implements PipeTransform {

  transform(sowReportData: any[], sowid: string): any[] {
    let filteredResults = [];

    if(sowReportData && sowid) {
      // Ffiltering should be done
      filteredResults = sowReportData.filter(res => {
           return res.SOW && res.SOW.toString().match(sowid);
      });
      return filteredResults;
    } else {
      return sowReportData;
    }
    
    // if(!sowReportData) return [];

    // if(!sowid) return sowReportData;

    // if(sowid) {
    //   return sowReportData.filter(res => {
    //      return res.SOW.toString().match(sowid);
    //   });              
    // }
  }


}
