// ITERATION 1

function updateSubtotal(product) {
  console.log(product)

  let precio = product.querySelector('.price span').innerHTML;

  let cantidad = product.querySelector('.quantity input').value;

  let subTotal = product.querySelector('.subtotal span');
  
  subTotal.innerText = cantidad*precio
  return subTotal
 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // console.log(singleProduct)
  // updateSubtotal(singleProduct);

  let productos = document.getElementsByClassName('product'); 
  let arrayProducto = Array.from(productos)

  let precios =arrayProducto.map((eleme) => {
    
    return updateSubtotal(eleme)
  })
    
  let updatePrice = Array.from(precios)
  console.log(updatePrice)

  let suma = 0;
   updatePrice.map((precio)=> suma=suma+Number(precio.innerHTML))
  
  let total = document.querySelector('#total-value span')
  total.innerText=suma
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const abuelo = target.parentNode.parentNode
  console.log(abuelo)
  abuelo.remove()
  let value = abuelo.querySelector('.subtotal span').innerText
	

	let total = document.querySelector('#total-value span')
	let newValue = total.innerText - value


	console.log(newValue)
	total.innerText = newValue



 
}


// ITERATION 5

function createProduct(event) {   
	const target=event.currentTarget
	const abuelo = target.parentNode.parentNode
	let values = abuelo.querySelectorAll('.create-product td input')
	console.log(values)
	let newRow = document.createElement("tr")
	const newTrStr = `
	<tr class="product">
	<td class="name">
	<span>${values[0].value}</span>
	</td>
	<td class="price">$<span>${values[1].value}</span></td>
	<td class="quantity">
	<input type="number" value="0" min="0" placeholder="Quantity" />
	</td>
	<td class="subtotal">$<span>0</span></td>
	<td class="action">
	<button class="btn btn-remove">Remove</button>
	</td>
	</tr>`
	newRow.innerHTML = newTrStr;
	console.log(newRow)
	let tBody = document.getElementsByTagName("tbody")[0];
	console.log(tBody)

	tBody.appendChild(newRow);	
	
	


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const btnsRemove = document.querySelectorAll('.btn-remove');
  for (const button of btnsRemove) {
    console.log(button)
    button.addEventListener('click', removeProduct)
	}
	

	const createElement = document.getElementById('create');
	createElement.addEventListener('click',createProduct)
	console.log(createElement)
  

  //... your code goes here
});



