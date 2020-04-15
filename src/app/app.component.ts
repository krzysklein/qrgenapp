import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  localStorageKey = 'saved-data';
  bankAccountNumber = '';
  amount = 1;
  name = '';
  title = '';
  qrCodeValue = '';

  ngOnInit(): void {
    const dataJson = localStorage.getItem(this.localStorageKey);
    if (dataJson) {
      const data = JSON.parse(dataJson);
      if (data) {
        this.bankAccountNumber = data.bankAccountNumber;
        this.amount = data.amount;
        this.name = data.name;
        this.title = data.title;

        this.generateQrCode(false);
      }
    }
  }

  generateQrCode(saveData: boolean = true): void {
    this.qrCodeValue = `||${this.bankAccountNumber}|${this.amount * 100}|${this.name}|${this.title}|||`;

    if (saveData) {
      const data = {
        bankAccountNumber: this.bankAccountNumber,
        amount: this.amount,
        name: this.name,
        title: this.title
      };
      const dataJson = JSON.stringify(data);
      localStorage.setItem(this.localStorageKey, dataJson);
      }
  }
}
