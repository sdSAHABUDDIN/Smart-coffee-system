// src/pages/Prepare.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { coffeeList } from "../constants";
import Section1FlavourDisplay from "../Components/Section1FlavourDisplay";
import Section2FlavourList from "../Components/Section2FlavourList";
import Section3CustomizeForm from "../Components/Section3CustomizeForm"

const Prepare = () => {
  const [step, setStep] = useState("Idle");
  const [polling, setPolling] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [progress, setProgess] = useState(0);
  const [selectedCoffee, setSelectedCoffee] = useState({
    name: "Latte",
    img: "coffee2.jpg",
    description: "Start your day with the smooth richness of freshly brewed Latte.",
  });

  useEffect(() => {
    let pollInterval;
    if (polling) {
      pollInterval = setInterval(async () => {
        try {
          const res = await axios.get("http://localhost:3000/api/brew/status");
          setStep(res.data.status);
        } catch (error) {
          console.error("Error polling status:", error);
        }
      }, 1000);
    }
    return () => clearInterval(pollInterval);
  }, [polling]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleBrew = async () => {
    setPolling(true);
    setCancelled(false);

    const safePost = async (stepName) => {
      if (cancelled) return;
      await axios.post("/api/brew/step", { step: stepName });
    };

    await safePost("Connecting to ESP32");
    await delay(5000);
    if (cancelled) return;

    await safePost("Brewing");
    await delay(5000);
    if (cancelled) return;

    await safePost("Waiting for cup");
    setProgess(0);
    let progInterval = setInterval(() => {
      setProgess((prev) => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(progInterval);
        }
        return next;
      });
    }, 250);
    await delay(5000);
    if (cancelled) return;

    await safePost("Take coffee");
  };

  const handleDone = async () => {
    await axios.post("/api/brew/step", { step: "Idle" });
    setPolling(false);
    setProgess(0);
    setStep("Idle");
  };

  const handleCancel = async () => {
    setCancelled(true);
    await axios.post("/api/brew/step", { step: "Idle" });
    setPolling(false);
    setProgess(0);
    setStep("Idle");
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
