import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getGames() {
    const dt = new Date();
    const dateString = `${dt.getFullYear()}-${dt.getMonth() +
      1}-${dt.getDate()}`;
    const url = `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${dateString}&endDate=${dateString}&expand=schedule.teams,schedule.linescore,schedule.broadcasts.all,schedule.game.content.media.epg`;
    return this.httpClient.get(url);
  }
}
