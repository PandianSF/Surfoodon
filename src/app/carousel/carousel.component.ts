import { Component } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CarouselComponent {
  // static testimonials: string;
  currentTestimonial: any;
  intervalId: any;
  testimonials = [
    {
      name: 'George',
      role: 'Community Volunteer',
      testimonial:
        "I'm truly amazed by this platform's dedication to reducing food waste. Donating surplus food has never been easier, and I'm proud to be a part of this initiative.",
      src: '../../assets/male.png',
    },
    {
      name: 'Askin',
      role: 'Shelter Manager',
      testimonial:
        "The surplus food donation website is a game-changer! It's simple, efficient, and connects donors with those in need seamlessly. Kudos to the team behind this brilliant idea.",
      src: '../../assets/male.png',
    },
    {
      name: 'Maria',
      role: 'Restraunt Owner',
      testimonial:
        "I was skeptical at first, but this website exceeded my expectations. The process of donating surplus food is straightforward, and the impact it creates is heartwarming. I'm a proud supporter!",
      src: '../../assets/female.png',
    },
    {
      name: 'Berlin',
      role: 'Community Volunteer',
      testimonial:
        "As a recipient of surplus food donations, I can't express my gratitude enough. This platform has brought hope and nourishment to our community, and I'm thankful for every meal received.",
      src: '../../assets/male.png',
    },
  ];
  constructor() {}

  ngOnInit() {
    this.startAutoSlide();
    this.currentTestimonial = this.testimonials[0];
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }
  goToTestimonial(index: number) {
    this.currentTestimonial = this.testimonials[index];
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      const currentIndex = this.testimonials.indexOf(this.currentTestimonial);
      const nextIndex = (currentIndex + 1) % this.testimonials.length;
      this.goToTestimonial(nextIndex);
    }, 5000);
  }
  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  onClick() {}
}
