document.addEventListener("DOMContentLoaded", () => {
  const levelElement = document.querySelector(".level");
  const percentElement = document.querySelector(".percent");

  // Check if the Battery API is supported
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      // Set initial battery level
      updateBatteryStatus(battery);

      // Update battery status whenever it changes
      battery.addEventListener("levelchange", () => updateBatteryStatus(battery));
    });
  } else {
    percentElement.textContent = "Battery API not supported!";
  }

  function updateBatteryStatus(battery) {
    const level = battery.level * 100; // Battery level is between 0 and 1
    levelElement.style.width = `${level}%`;
    percentElement.textContent = `${level}%`;

    // Change color based on battery level
    if (level > 60) {
      levelElement.style.backgroundColor = "lightgreen";
    } else if (level > 30) {
      levelElement.style.backgroundColor = "orange";
    } else {
      levelElement.style.backgroundColor = "red";
    }
  }
});
