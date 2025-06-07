export const brewCoffee=async(req,res)=>{

}
let currentStep="Idle";//global variable
export const setBrewStep = (req, res) => {
  const { step } = req.body;
  console.log(`Received step: ${step}`);
  currentStep=step;
  res.json({message:"step updated"})

  // Example logic
  // switch (step) {
  //   case 'CONNECT_TO_ESP32':
  //     brewStatus = 'Connecting to ESP32...';
  //     break;
  //   case 'START_BREWING':
  //     brewStatus = 'Brewing...';
  //     break;
  //   case 'WAIT_FOR_CUP':
  //     brewStatus = 'Waiting for cup...';
  //     break;
  //   case 'TAKE_COFFEE':
  //     brewStatus = 'Coffee ready, take it!';
  //     break;
  //   default:
  //     brewStatus = 'Idle';
  // }

  // res.json({ status: brewStatus });
};

export const getBrewStatus=async(req,res)=>{
  res.json({ status: currentStep});
}