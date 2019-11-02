import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { modelCountry } from '../model/country.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CountryServices {
    public url = 'https://api.clashofclans.com/v1/locations/32000038/rankings/clans?limit=10';
    public arrayBrazil;
    public headers = new HttpHeaders()
             .set('Accept', 'application/json')
             .set('authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBjZTcyZmRkLTFjNGItNDIxMy1iMjc1LTk1OWMyY2RhZTk4MSIsImlhdCI6MTU3MjY2NTc5MCwic3ViIjoiZGV2ZWxvcGVyLzIyOTVlNTc0LTYwNjgtYjdlOC1lYjk1LTYzMmIyMGY5MTM4OCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3Ny42Mi4xNDIuMTciXSwidHlwZSI6ImNsaWVudCJ9XX0.dgmHlFQZnlDzjXk8-03R3jRXiJ5IvylNSMTCji5u9Pbf28HUiwgqnc9s71hHyRRYouPh-NCz-n6leTBC7ez7iA' );
    constructor (private http: HttpClient) { 
    }

    getCountry(): Observable<modelCountry[]> {
        return this.http.get<modelCountry[]>(this.url, { headers: this.headers })
    }


}