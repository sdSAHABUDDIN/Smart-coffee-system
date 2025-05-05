export const placeOrder = async (req, res) => { 
  const { coffeeType, milkType, sugarAmount } = req.body;
  if (!coffeeType || !milkType || !sugarAmount) {
    return res.status(400).json({ message: 'Please provide all required fields: coffeeType, milkType, sugarAmount' });
  }
  console.log(`Brewing ${coffeeType} with ${milkType} and ${sugarAmount} sugar`);

  // Simulate brewing time
  setTimeout(() => {
    res.status(200).json({ message: `${coffeeType} with ${milkType} and ${sugarAmount} sugar is ready!` });
  }, 3000);
}