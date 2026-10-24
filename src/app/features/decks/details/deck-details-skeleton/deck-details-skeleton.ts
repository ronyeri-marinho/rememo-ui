import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { Divider } from 'primeng/divider';

@Component({
  imports: [SkeletonModule, Divider],
  selector: 'app-deck-details-skeleton',
  styleUrl: './deck-details-skeleton.css',
  templateUrl: './deck-details-skeleton.html',
})
export class DeckDetailsSkeleton {}
