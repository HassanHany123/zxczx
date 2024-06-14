var products = [
    { title: 'Laptop', description: 'A high-performance laptop for work and play.', price: 999.99 },
    { title: 'Smartphone', description: 'A smartphone with all the latest features.', price: 699.99 },
    { title: 'Desk Chair', description: 'An ergonomic chair for your office.', price: 150.00 },
    { title: 'Book', description: 'A thrilling mystery novel.', price: 19.99 },
    { title: 'Tablet', description: 'A tablet for browsing and entertainment.', price: 299.99 }
  ];
  
  const search = prompt('Enter a term to search for products:').toLowerCase();
  
  function returnProducts(product) {
    return product.title.toLowerCase().includes(search) ||
           product.description.toLowerCase().includes(search);
  }
  
  var filteredProducts = products.filter(returnProducts);
  
  if (filteredProducts.length > 0) {
    filteredProducts.forEach(function(product) {
        console.log('Title: ' + product.title);
        console.log('Description: ' + product.description);
        console.log('Price: $' + product.price.toFixed(2));
        console.log('--------------------------');
    });
  } else {
    console.log('No products found matching your search term.');
  }