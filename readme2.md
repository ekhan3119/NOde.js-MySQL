//capturing the user input and creating a variable from the customer's selected ID 
                userChoiceID = parseInt(answer.item_id);
                //capturing the user input and creating a variable from the customer's desired quantity
                quantity = parseInt(answer.quantity);
                //show user Id and price of the product
                userPrice = res[userChoiceID - 1].price;
                //calculate customer total cost and quantity
                totalQuantity = res[userChoiceID - 1].stock_quantity - quantity;
                //console.log(totalQuantity);

                //update product table using id
                getQuantityProduct(userChoiceID);


                       /* for (var i = 0; i < res.length; i++) {
            console.log("---------------------------------------------------");
            console.log('\n item_id:' + res[i].item_id + ' || ' + 'product_name:' + res[i].product_name + ' || ' + 'price: $' + res[i].price);
            console.log('----------------------------------------------------')
        } */