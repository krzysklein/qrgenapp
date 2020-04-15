import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bankAccountNumber = '';
  amount = 1;
  name = '';
  title = '';
  qrCodeValue = '';

  generateQrCode() {
    this.qrCodeValue = `||${this.bankAccountNumber}|${this.amount * 100}|${this.name}|${this.title}|||`;
  }
}
