//ac
/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const data = {}
  for(const tra of transactions){
    const {category,price} = tra;
    if(!data[category]){
      data[category]=0;
    }
    data[category] += price;

  }
  const result = [];
  for(const cat in data){
    result.push({category:cat,totalSpent:data[cat]});
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
