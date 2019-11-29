
import { Observable } from "rxjs";
import {
    HttpResponse,
} from '@angular/common/http';

export class BackendURL {


    public static host: string = 'http://localhost:3000';
    public static auth: string = BackendURL.host + '/auth';
    public static users: string = BackendURL.host + '/users';



    public static handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            // const err = body.error || JSON.stringify(body);
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
