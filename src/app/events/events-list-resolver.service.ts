import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./shared/event.services";
import { resolve } from "url";
import { map } from "rxjs/operators";

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve() {
    return this.eventService.getEvents();
  }
}
