import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../job/job';

@Pipe({
  name: 'FilterJobs',
  pure: false
})
export class FilterJobs implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    return items.filter(function (item) {

      if (item.name.toLowerCase().includes(searchText.toLowerCase())
        || item.skills.toLowerCase().includes(searchText.toLowerCase())
        || item.company.toLowerCase().includes(searchText.toLowerCase())
        || item.jobId.toString().includes(searchText.toLowerCase()))
        return item;
    });
  }



}
