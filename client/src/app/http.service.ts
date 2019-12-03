import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Login } from "./models/login.model";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  httpOptions = {
    headers: new HttpHeaders({
      "X-Requested-With": "XMLHttpRequest"
    })
  };

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
    const gameUrl = `http://nhl.freegamez.ga/getM3U8.php?league=NHL&date=${dateString}&id=${id}&cdn=akc`;
    console.log("gameUrl :", gameUrl);
    const proxyUrl = "https://lazyguy-nhl-proxy.herokuapp.com/";
    const url = `${proxyUrl}${gameUrl}`;

    return this.httpClient.get(url, this.httpOptions);
  }
}
