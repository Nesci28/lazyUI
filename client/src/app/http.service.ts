import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../environments/environment";
import { Login } from "./models/login.model";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  login(object: Login) {
    return this.httpClient.post(`${environment.url}/api/v1/auth`, object);
  }

  getGames() {
    const dt = new Date();
    const dateString = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt
      .getDate()
      .toString()
      .padStart(2, "0")}`;
    const url = `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${dateString}&endDate=${dateString}&expand=schedule.teams,schedule.linescore,schedule.broadcasts.all,schedule.game.content.media.epg`;
    return this.httpClient.get(url);
  }

  getGameLink(game: any, broadcast: string) {
    // TODO Convert broadcast to callLetters
    const dt = new Date();
    const dateString = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt
      .getDate()
      .toString()
      .padStart(2, "0")}`;
    const id = game.content.media.epg[0].items.find(
      game => game.callLetters === broadcast
    ).mediaPlaybackId;
    const obj = {
      dateString,
      id
    };

    return this.httpClient.post(`${environment.url}/api/v1/game`, obj);
  }
}
