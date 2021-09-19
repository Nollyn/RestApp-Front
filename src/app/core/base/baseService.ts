import { throwError } from 'rxjs';
import { environment } from "@env/environment";

export class BaseService {
  protected apiUrl = environment.apiUrl;

  /**
   * Base service constructor
   */
  constructor() {
  }

  /**
   * Handle catch errors
   * @param err Error on api call
   */
  protected handleError(err: { error: { message: any; }; }) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${ err.error.message }`;
    } else {
      errorMessage = `Backend returned code ${ err }`;
    }
    return throwError(errorMessage);
  }
}
