import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss'],
})
export class DocumentDetailsComponent implements OnInit {
  document: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the document data from the route
    this.document = this.route.snapshot.data['document'];
  }
}
