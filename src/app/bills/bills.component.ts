import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {
  prices: { [key: number]: number } = {
    
    5001: 20,
    5002: 25,
    5003: 30,
    5004: 40,
    5005: 50
  };
  price:{}={}

  AddedItems: {
    items: number,
    quantity: number,
    itemcost: number,
    totalBill: number
  }[] = []
  discountItems = [5004, 5005];
  totalBill = 0;
  errormessage = ""
  errormessage1 = ""
  isShowBill = false
  amount!: number

  remindtopay!: number

  // isDataAvail = this.prices[]
  add(form: NgForm) {
    const inputItemId = document.getElementById('userinput') as HTMLInputElement
    const inputItemNumber = parseInt(inputItemId.value);
    if (!this.prices[inputItemNumber]) {
      this.errormessage1 = "id not found"

    }
    // const quantity = parseInt(prompt("Enter quantity:")!);
    const quantity = document.getElementById('inputQuantity') as HTMLInputElement
    const inputquantity = parseInt(quantity.value);
    if (inputquantity < 1) {
      this.errormessage = "Atleast enter 1 item"
      return

    }

    if (this.prices[inputItemNumber]) {
      let itemCost = this.prices[inputItemNumber] * inputquantity;



      if (this.discountItems.includes(inputItemNumber)) {
        itemCost = itemCost * 0.8;
      }


      this.totalBill += itemCost;

      this.AddedItems.push({
        items: inputItemNumber,
        quantity: inputquantity,
        itemcost: itemCost,
        totalBill: this.totalBill


      })
    } else {
      console.log("Invalid item id entered!");
    }
    if (this.totalBill > 1000) {
      this.totalBill = this.totalBill * 0.8
    }
    console.log(`Total Bill: ${this.totalBill}`);




    form.form.reset()


  }
  balanceamount() {
    const valid = document.getElementById('validateamount') as HTMLInputElement
    this.amount = parseInt(valid.value);
    if (this.amount > this.totalBill) {
      this.remindtopay = (this.amount - this.totalBill)

    }

  }

  showBill() {
    this.isShowBill = true
  }
  searchQuery: string = '';
//   filteredProducts() {
//     if (!this.searchQuery) {
//       return this.AddedItems;
//     }
//     const query = this.searchQuery.toLowerCase();
//     return this.AddedItems.filter(product =>
//       product.id.includes(query) || product.id.toString().includes(query)
//     );
//   }
// }
}