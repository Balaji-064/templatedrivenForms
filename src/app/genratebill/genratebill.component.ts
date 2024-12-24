import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-genratebill',
  templateUrl: './genratebill.component.html',
  styleUrls: ['./genratebill.component.css']
})
export class GenratebillComponent {
//   searchQuery: string = '';  // This will hold the search query
//   products = [
//     { itemid: 5001, cost: 'Rs.20' },
//     { itemid: 5002, cost: 'Rs.25' },
//     { itemid: 5003, cost: 'Rs.30' }
//   ];
//   discountedProducts = [
//     { itemid: 5004, cost: 'Rs.40', discount: '20%' },
//     { itemid: 5005, cost: 'Rs.50', discount: '20%' }
//   ];
//   AddedItems = [
//     { items: 5001, quantity: 2, itemcost: 'Rs.40' },
//     { items: 5002, quantity: 1, itemcost: 'Rs.25' }
//   ];
//   totalBill: number = 0;

//   // Filtered products based on the search query
//   filteredProducts() {
//     return this.products.filter(product =>
//       product.itemid.toString().includes(this.searchQuery) || 
//       product.cost.toLowerCase().includes(this.searchQuery.toLowerCase())
//     );
//   }

//   // Filtered discounted products based on the search query
//   filteredDiscountedProducts() {
//     return this.discountedProducts.filter(discountedProduct =>
//       discountedProduct.itemid.toString().includes(this.searchQuery) || 
//       discountedProduct.cost.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
//       discountedProduct.discount.toLowerCase().includes(this.searchQuery.toLowerCase())
//     );
//   }

//   // Method to calculate the total bill (this is just an example, adjust as needed)
//   calculateTotalBill(forms:NgForm) {
//     this.totalBill = 0;
//     this.AddedItems.forEach(item => {
//       // Assuming each item's itemcost is a string in 'Rs.XX' format, remove the 'Rs.' part and convert to number
//       const cost = parseFloat(item.itemcost.replace('Rs.', ''));
//       this.totalBill += cost * item.quantity;
//     });
//   }
// }

products = [
      { itemid: 5001, cost: 'Rs.20' },
      { itemid: 5002, cost: 'Rs.25' },
      { itemid: 5003, cost: 'Rs.30' }
    ];
    discountedProducts = [
          { itemid: 5004, cost: 'Rs.40', discount: '20%' },
          { itemid: 5005, cost: 'Rs.50', discount: '20%' }
        ];

price: {} = {}

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
  if (!this.products[inputItemNumber]) {
    this.errormessage1 = "id not found"

  }
  
  const quantity = document.getElementById('inputQuantity') as HTMLInputElement
  const inputquantity = parseInt(quantity.value);
  if (inputquantity < 1) {
    this.errormessage = "Atleast enter 1 item"
    return

  }

  if (this.products[inputItemNumber]) {
    let itemCost= inputItemNumber * inputquantity;



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
  const valid = document.getElementById('amount') as HTMLInputElement
  
  this.amount = parseInt(valid.value);
  console.log(this.amount,typeof(this.amount));
 if (this.amount > this.totalBill) {
    this.remindtopay = (this.amount - this.totalBill)

  }

}

showBill() {
  this.isShowBill = true
}
searchQuery: string = '';
filteredProducts() {
      return this.products.filter(product =>
        product.itemid.toString().includes(this.searchQuery) || 
        product.cost.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  
    // Filtered discounted products based on the search query
    filteredDiscountedProducts() {
      return this.discountedProducts.filter(discountedProduct =>
        discountedProduct.itemid.toString().includes(this.searchQuery) || 
        discountedProduct.cost.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        discountedProduct.discount.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  
    // Method to calculate the total bill (this is just an example, adjust as needed)
    calculateTotalBill(forms:NgForm) {
      this.totalBill = 0;
      this.AddedItems.forEach(item => {
        // Assuming each item's itemcost is a string in 'Rs.XX' format, remove the 'Rs.' part and convert to number
        const cost = Number(item.itemcost);
        this.totalBill += cost * item.quantity;
      });
    }
  }
