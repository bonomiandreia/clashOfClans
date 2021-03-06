import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { modelCountry } from '../model/country.model';
import { Observable } from 'rxjs';

@Injectable()
export class BrazilServices {
    public headers = new HttpHeaders()
             .set('accept', 'application/json')
             .set('authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRhNmU3MTU2LWZkMDAtNGU4Ni1hZWI1LTM1NTBkNTJkZGYxOSIsImlhdCI6MTU3Mjc5MzI2NSwic3ViIjoiZGV2ZWxvcGVyLzIyOTVlNTc0LTYwNjgtYjdlOC1lYjk1LTYzMmIyMGY5MTM4OCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MS4yNTQuMjkuMjMxIl0sInR5cGUiOiJjbGllbnQifV19.X4pB1deNQfctA8JC8_reTfwhDqabtMnD8yQGGv3xFcaj8AIG8rJgPgf5JI-fSs1khRMg_p8qlDyobgv8til2zg' );
    constructor (private http: HttpClient) { 
    }
    getBrazil(api: string): Observable<modelCountry[]> {
        return this.http.get<modelCountry[]>(api, { headers: this.headers })
    }


}