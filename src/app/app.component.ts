import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  posts = [
    {
      title: "Cool Trees",
      user: "TreeMan",
      descr: "This was a really cool shot I got while hiking. Enjoy!",
      image: "assets/trees.jpg"
    },
    {
      title: "Mountains Meeting",
      user: "TheRealBigFoot",
      descr: "What a view!! I mean just look at that teal glassy water!",
      image: "assets/mountains.jpg"
    },
    {
      title: "Stars for Days",
      user: "CampingForACause",
      descr:
        "This was a gorgeous night sky while camping on a glacier in Alaska.",
      image: "assets/night.jpeg"
    }
  ];
}
