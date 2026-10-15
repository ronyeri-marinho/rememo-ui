import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  imports: [SkeletonModule],
  selector: 'app-deck-card-skeleton',
  styleUrl: './deck-card-skeleton.css',
  templateUrl: './deck-card-skeleton.html',
})
export class DeckCardSkeleton {}
