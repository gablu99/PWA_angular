if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js').then(registration => {
  	console.log('ServiceWorker registration successful with scope: ', registration.scope);
	}, err => {
  	console.log('ServiceWorker registration failed: ', err);
	});
  });

	@Component({
  selector: 'PWA',
  templateUrl: './PWA.index.html',
  styleUrls: ['./PWA.style.css']
})
export class SquareCalculatorComponent {
  number: number | null = null; // User input
  result: number | null = null; // Result of the calculation

  calculateSquare() {
    if (this.number !== null) {
      this.result = this.number * this.number;
    }
  }
}
}
