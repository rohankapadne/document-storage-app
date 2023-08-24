import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DocumentService } from './document.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentResolver {
  constructor(private documentService: DocumentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const documentId = route.paramMap.get('id'); // Get the document ID from the route parameters
    console.log('documentId ', documentId);
    if (documentId === null || isNaN(+documentId)) {
      // You can handle this case as needed, for example, by displaying an error message
      // and redirecting to another page.
      // Here, I returned an empty observable.
      return of(null);
    }

    return this.documentService.getDocumentById(+documentId).pipe(
      catchError(() => {
        // Handle the case where the document is not found or there's an error.
        // You can handle this case as needed, for example, by displaying an error message.
        // Here, I returned an empty observable.
        return of(null);
      })
    );
  }
}
