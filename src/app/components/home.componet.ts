import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "home-componet",
    imports: [RouterOutlet],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: true
})

export class HomeComponent{

}