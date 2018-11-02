import { Component } from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './app.component.sass'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'my-app';

  groups: any[] = [
    {
      title: 'Security & Addresses',
      fields: [
        { label: 'Full Name', value: 'John A' },
        { label: 'Member\'s Date of Birth', value: '08-Aug-1980' },
        { label: 'Member\'s Registration Date', value: '08-Aug-2010' },
        { label: 'Secure Caller', value: 'Guide' },
        { label: 'Personal Internal Id', value: ' 010010089' },
        { label: 'Phone Book', value: ' ' },
        { label: 'Pin On File', value: ' Yes' }
      ]
    },
    {
      title: 'Health & Welfare',
      fields: [
        { label: 'Medical', value: 'Inquiry' },
        { label: 'HSA with Begin Date', value: 'Inquiry' },
        { label: 'Medicare', value: 'Inquiry' },
        { label: 'Dental', value: 'Inquiry' },
        { label: 'Vision', value: 'Inquiry' },
        { label: 'Covered Dependants', value: 'Inquiry' },

      ]
    },
    {
      title: 'Member Information',
      fields: [
        { label: 'Spouse Name', value: 'Missing' },
        { label: 'Spouse Date of Birth', value: 'Missing' },
        { label: 'Employment Information', value: 'Missing' }
      ]
    },
    {
      title: 'Payroll',
      fields: [
        { label: 'Employee ID', value: ' ' },
        { label: 'Full/Part Time', value: ' ' },
        { label: 'Tax Location', value: ' ' },
        { label: 'Last Pay Date', value: ' ' },
        { label: 'Net Pay Amount', value: ' ' }
      ]
    },
    {
      title: 'Statuses & Indicators',

      fields: [
        { label: 'Job Grade', value: ' Grade 02' },
        { label: 'Loc', value: 'Whitehall ' },
        { label: 'Union', value: ' 000' }
      ]
    }
  ];
}
