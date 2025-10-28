const calculateBtn = document.getElementById("calculate-cost-btn");

  
      calculateBtn.addEventListener("click", function () {
        const serviceCost = prompt("Enter the estimated service cost in $:");

        if (serviceCost && !isNaN(serviceCost)) {
          const tax = 0.15; 
          const totalCost = parseFloat(serviceCost) * (1 + tax);
          alert(`The total cost including 15% tax is $${totalCost.toFixed(2)}`);
        } else {
          alert("Please enter a valid number!");
        }
      });

      document.addEventListener("DOMContentLoaded", function () {
      
        const getStartedBtn = document.querySelector(
          "button.bg-[#DD9142].w-[140px]"
        );

        
        const appointmentSection = document.getElementById(
          "appointment-section"
        );

  
        if (getStartedBtn && appointmentSection) {
          getStartedBtn.addEventListener("click", function () {
          
            appointmentSection.scrollIntoView({ behavior: "smooth" });
          });
        }
      });