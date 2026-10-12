import { Component } from '@angular/core';
import { RememoSidebar } from '../rememo-sidebar/rememo-sidebar';

@Component({
  imports: [RememoSidebar],
  selector: 'app-base-layout',
  styleUrl: './base-layout.css',
  templateUrl: './base-layout.html',
})
export class BaseLayout {}
