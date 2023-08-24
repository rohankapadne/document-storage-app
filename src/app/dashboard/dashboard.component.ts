import { Component } from '@angular/core';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  documents: any[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(): void {
    this.documents = this.documentService.getDocuments();
  }
}
