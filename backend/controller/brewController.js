export const brewCoffee=async(req,res)=>{

}

let currentStep = "Idle";
let isCancelled = false;

export const setBrewStep = (req, res) => {
  const { step } = req.body;
  console.log(`Received step: ${step}`);

  // Reset cancel flag on new brewing cycle
  if (step === "Connecting to ESP32") {
    isCancelled = false;
  }

  // If cancellation happened previously, block further steps
  if (isCancelled) {
    console.log("Ignored step due to cancellation:", step);
    return res.status(400).json({ message: "Brewing cancelled" });
  }

  // If user clicked Done or Cancel
  if (step === "Idle") {
    isCancelled = true;
    currentStep = "Idle";
    return res.json({ message: "Stopped" });
  }

  currentStep = step;
  res.json({ message: "Step updated" });
};

export const getBrewStatus = async (req, res) => {
  res.json({ status: currentStep });
};