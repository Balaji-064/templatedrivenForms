import { Component } from '@angular/core';

@Component({
  selector: 'app-genratebill',
  templateUrl: './genratebill.component.html',
  styleUrls: ['./genratebill.component.css']
})
export class GenratebillComponent {
  products = [
    { name: 'Lays', id: 5001, cost: 20 },
    { name: 'Bingo', id: 5002, cost: 25 },
    { name: 'Kurkure', id: 5003, cost: 30 },
    { name: 'Kitkat', id: 5004, cost: 40 },
    { name: 'DairyMilk', id: 5005, cost: 50 }
  ];

  // Variables for form inputs
  itemId!: number;
  quantity!: number;
  AddedItems: any[] = [];
  totalBill: number = 0;
  amount: number = 0;
  remindtopay: number = 0;

  // Error messages
  errormessage: string = '';
  errormessage1: string = '';

  // Show bill toggle
  isShowBill: boolean = false;

  // Search query
  searchQuery: string = '';

  // Method to filter products based on the search query
  filteredProducts() {
    if (!this.searchQuery) {
      return this.products;
    }
    const query = this.searchQuery.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(query) || product.id.toString().includes(query)
    );
  }

  // Add item to the cart
  add(forms: any) {
    const selectedProduct = this.products.find(product => product.id === this.itemId);

    if (!selectedProduct) {
      this.errormessage1 = 'Invalid Item ID';
      return;
    }

    if (this.quantity <= 0 || this.quantity > 100) {
      this.errormessage = 'Quantity should be between 1 and 100';
      return;
    }

    this.AddedItems.push({
      items: this.itemId,
      quantity: this.quantity,
      itemcost: selectedProduct.cost * this.quantity
    });

    this.errormessage1 = '';
    this.errormessage = '';

    this.itemId = 0;
    this.quantity = 0;
  }

  // Show the total bill after adding items
  showBill() {
    this.totalBill = this.AddedItems.reduce((total, item) => total + item.itemcost, 0);
    this.isShowBill = true;
  }

  // Calculate balance amount after payment
  balanceamount() {
    if (this.amount >= this.totalBill) {
      this.remindtopay = 0;
    } else {
      this.remindtopay = this.totalBill - this.amount;
    }
  }
}


