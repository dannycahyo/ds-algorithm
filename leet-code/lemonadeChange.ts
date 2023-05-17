/*

At a lemonade stand, each lemonade costs $5. 
Customers are standing in a queue to buy from you
and order one at a time (in the order specified by bills). 
Each customer will only buy one lemonade and 
pay with either a $5, $10, or $20 bill. 
You must provide the correct change to each customer 
so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] 
is the bill the ith customer pays, return true if 
you can provide every customer with the correct change, or false otherwise.

Examples:
Input: bills = [5,5,5,10,20]
Output: true
Money: 20
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.

Money: 20;
Harga Barang = 5;
Input: bills = [5,5,10,10,20]
Output: false
Explanation: 
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can not give the change of $15 back because we only have two $10 bills.
Since not every customer received the correct change, the answer is false.
*/

function isLemonadeChange(bills: number[]): boolean {
  let money = 0;
  let price = 5;
  let change = 0;
  let change5 = 0;
  let change10 = 0;

  for (let i = 0; i < bills.length; i++) {
    money = bills[i];
    change = money - price;

    if (change === 0) {
      change5++;
    } else if (change === 5) {
      if (change5 > 0) {
        change5--;
        change10++;
      } else {
        return false;
      }
    } else if (change === 15) {
      if (change10 > 0 && change5 > 0) {
        change10--;
        change5--;
      } else if (change5 >= 3) {
        change5 -= 3;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

console.log(isLemonadeChange([5, 5, 5, 5, 10, 20]));
