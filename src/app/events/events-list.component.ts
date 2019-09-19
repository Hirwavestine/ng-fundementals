import { Component } from "@angular/core";
@Component({
  selector: "events-list",
  template: `
    <div>
      <h1>Upcoming angular Events</h1>
      <hr />
      <div class="well">
        <div>Hello world</div>
      </div>
      <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
  `,
  styles: [
    `
      .well div {
        color: red;
      }
    `
  ]
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: "Angular Connect",
    date: "9/26/2036",
    time: "10:00 am",
    price: 599.99,
    imageUrl: "/assets/images/angularconnectshield.png",
    location: {
      address: "1057, DI",
      city: "London",
      country: "England"
    }
  };
}
