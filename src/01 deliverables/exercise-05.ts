console.log("************** DELIVERABLE 05 *********************");

class slotMachine {
  coins: number;

  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const prize = this.coins;
    const randomyzer = () => Math.random() < 0.5;
    const reels = [randomyzer(), randomyzer(), randomyzer()];

    const checkFalseReels = reels.every((reel) => reel);

    if (checkFalseReels) {
      this.coins = 0;
      return `Congratulations!!! You won ${prize} coins`;
    } else {
      return `"Good luck next time!! (play with moderation)"`;
    }
  }
}

const slotMachineOne = new slotMachine();

console.log(slotMachineOne.play());
console.log(slotMachineOne.play());
console.log(slotMachineOne.play());
console.log(slotMachineOne.play());
console.log(slotMachineOne.play());
console.log(slotMachineOne.play());
console.log(slotMachineOne.play());
