import { PlayService } from './play.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  message: string | undefined;

  constructor(private PlayService: PlayService) {}

  ngOnInit(): void {
    this.PlayService.getPlayers().subscribe({
      next: (response: any) => (this.message = response.value.message),
      error: (error) => console.log(error),
    });
  }
}
