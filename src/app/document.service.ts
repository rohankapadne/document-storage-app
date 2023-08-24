import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private documents: any[] = [
    { id: 1, title: 'Document 1', content: 'Content of Document 1' },
    { id: 2, title: 'Document 2', content: 'Content of Document 2' },
    { id: 3, title: 'Document 3', content: 'Content of Document 3' },
  ];

  getDocuments(): any[] {
    return this.documents;
  }

  getDocumentById(id: number): Observable<any> {
    const document = this.documents.find((doc) => doc.id === id);
    return of(document);
  }
}
