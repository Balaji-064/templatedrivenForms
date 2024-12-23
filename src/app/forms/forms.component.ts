import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  status!: string;

  totalBill: number = 0;

  calculateTotalBill(form: NgForm) {
    const prices: { [key: number]: number } = {
      5001: 20,
      5002: 25,
      5003: 30,
      5004: 40,
      5005: 50
    };

    this.status = form.form.value
    console.log(this.status);

    const discountItems = [5004, 5005];
    this.totalBill = 0;
    let addMore = "Y";

    while (addMore.toUpperCase() === "Y") {
      // const itemId = parseInt(prompt("Enter item id:")!);
       const inputItemId=document.getElementById('userinput') as HTMLInputElement 
       const inputItemNumber=parseInt(inputItemId.value);

      console.log(this.AddedItems)
      // const quantity = parseInt(prompt("Enter quantity:")!);
      const quantity=document.getElementById('inputQuantity') as HTMLInputElement 
      const inputquantity=parseInt(quantity.value);
      console.log(this.AddedItems)

      if (prices[inputItemNumber]) {
        let itemCost = prices[inputItemNumber] * inputquantity;
        this.AddedItems.push({
          items: inputItemNumber,
          quantity: inputquantity,
          itemcost:itemCost
      
        })


        if (discountItems.includes(inputItemNumber)) {
          itemCost = itemCost * 0.8;
        }

        this.totalBill += itemCost;
      } else {
        console.log("Invalid item id entered!");
      }

      console.log(`Total Bill: ${this.totalBill}`);
      const addMoreInput = document.getElementById('addMoreItem') as HTMLInputElement;

      addMore=addMoreInput.value
    }



  }
  AddedItems: {
    items: number,
    quantity: number,
    itemcost:number

  }[] = []

}










