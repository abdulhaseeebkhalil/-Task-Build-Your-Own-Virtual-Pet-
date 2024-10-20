// Create the Pet object
let pet = {
    // Properties of the pet
    name: prompt("Enter your pet's name:"),
    type: prompt("Enter your pet's type (e.g., dog, cat):"),
    age: parseInt(prompt("Enter your pet's age (as a number):"), 10),
    happiness: parseInt(prompt("Enter your pet's happiness level (0-100):"), 10),
    hunger: parseInt(prompt("Enter your pet's hunger level (0-100):"), 10),
    
    // Method to feed the pet
    feed: function() {
      this.hunger = Math.max(0, this.hunger - 20);  // Ensure hunger doesn't go below 0
      alert(this.name + " has been fed! Hunger: " + this.hunger + "/100.");
    },
    
    // Method to play with the pet
    play: function() {
      this.happiness = Math.min(100, this.happiness + 20);  // Ensure happiness doesn't exceed 100
      alert(this.name + " played! Happiness: " + this.happiness + "/100.");
    },
    
    // Method to age the pet
    agePet: function() {
      this.age += 1;
      this.happiness = Math.max(0, this.happiness - 5);  // Ensure happiness doesn't go below 0
      this.hunger = Math.min(100, this.hunger + 10);     // Ensure hunger doesn't exceed 100
      alert(this.name + " is now " + this.age + " years old! Happiness: " + this.happiness + "/100, Hunger: " + this.hunger + "/100.");
    },
    
    // Method to interact with the pet
    interact: function() {
      let action = prompt("What would you like to do with " + this.name + "? Choose an action: feed, play, age, or quit");
      
      switch(action.toLowerCase()) {
        case "feed":
          this.feed();
          break;
        case "play":
          this.play();
          break;
        case "age":
          this.agePet();
          break;
        case "quit":
          alert("Thanks for playing with " + this.name + "!");
          return;  // Exit the function if the user chooses to quit
        default:
          alert("Invalid action. Please choose 'feed', 'play', 'age', or 'quit'.");
      }
      
      // Recursively call the function to allow continuous interaction
      this.interact();
    }
  };
  
  // Start the interaction
  alert("Meet your pet " + pet.name + "! Type: " + pet.type + ". Age: " + pet.age + ". Happiness: " + pet.happiness + "/100. Hunger: " + pet.hunger + "/100.");
  pet.interact();
  