import React, { useEffect, useState } from "react";
import axios from "axios";
import { coffeeList } from "../constants";
import Section1FlavourDisplay from "../Components/Section1FlavourDisplay";
import Section2FlavourList from "../Components/Section2FlavourList";
import Section3CustomizeForm from "../Components/Section3CustomizeForm";

let currentStep = "Idle";
let isCancelled = false;

export const setBrewStep = (req, res) => {
  const { step } = req.body;
  console.log(`Received step: ${step}`);

  if (step === "Connecting to ESP32") {
    isCancelled = false;
  }

  if (isCancelled) {
    console.log("Ignored step due to cancellation:", step);
    return res.status(400).json({ message: "Brewing cancelled" });
  }

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

const Prepare = () => {
  const [step, setStep] = useState("Idle");
  const [polling, setPolling] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [progress, setProgess] = useState(0);
  const [cupCheckPending, setCupCheckPending] = useState(false);

  const [selectedCoffee, setSelectedCoffee] = useState({
    name: "Latte",
    img: "Latte.webp",
    description: "Start your day with the smooth richness of freshly brewed Latte.",
  });

  useEffect(() => {
    let pollInterval;
    if (polling) {
      pollInterval = setInterval(async () => {
        try {
          const res = await axios.get("http://localhost:3000/api/brew/status");
          const newStep = res.data.status;

          // Handle cup missing
          if (cupCheckPending && newStep === "Idle") {
            alert("❌ Cup not detected. Brewing cancelled.");
            setPolling(false);
            setProgess(0);
            setCupCheckPending(false);
          }

          setStep(newStep);
        } catch (error) {
          console.error("Error polling status:", error);
        }
      }, 1000);
    }
    return () => clearInterval(pollInterval);
  }, [polling, cupCheckPending]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleBrew = async () => {
    setPolling(true);
    setCancelled(false);
    setProgess(0);

    const safePost = async (stepName) => {
      if (cancelled) {
        console.log("Step skipped due to cancel:", stepName);
        return;
      }
      await axios.post("/api/brew/step", { step: stepName });
    };

    await safePost("Connecting to ESP32");
    await delay(3000);
    if (cancelled) return;

    await safePost("Brewing");

    // Start progress bar during brewing
    let progressVal = 0;
    const brewInterval = setInterval(() => {
      progressVal += 2;
      setProgess(progressVal);
      if (progressVal >= 100) {
        clearInterval(brewInterval);
      }
    }, 200);
    await delay(10000);
    if (cancelled) return;

    await safePost("Checking cup");
    setCupCheckPending(true);
    await delay(5000); // give ESP time to check IR sensor
    if (cancelled) return;

    setCupCheckPending(false);

    await safePost("Take coffee");
  };

  const handleDone = async () => {
    await axios.post("/api/brew/step", { step: "Idle" });
    setPolling(false);
    setProgess(0);
    setStep("Idle");
    setCupCheckPending(false);
  };

  const handleCancel = async () => {
    setCancelled(true);
    setPolling(false);
    setProgess(0);
    setStep("Idle");
    setCupCheckPending(false);

    try {
      await axios.post("/api/brew/step", { step: "Idle" });
    } catch (err) {
      console.error("Failed to cancel:", err);
    }
  };

  return (
    <div className="bg-[#FCF3DE] min-h-screen p-6">
      <Section1FlavourDisplay
        step={step}
        selectedCoffee={selectedCoffee}
        progress={progress}
        polling={polling}
        handleBrew={handleBrew}
        handleCancel={handleCancel}
        handleDone={handleDone}
      />

      <Section2FlavourList
        coffeeList={coffeeList}
        selectedCoffee={selectedCoffee}
        setSelectedCoffee={setSelectedCoffee}
      />

      <Section3CustomizeForm />
    </div>
  );
};

export default Prepare;
