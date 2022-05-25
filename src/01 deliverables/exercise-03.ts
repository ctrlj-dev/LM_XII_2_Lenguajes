console.log("************** DELIVERABLE 03 *********************");

console.log("=== CLONE ===");

interface ISwords {
  steel: boolean;
  silver: boolean;
}

interface ISignals {
  Aard: boolean;
  Yrden: boolean;
  Igni: boolean;
  Quen: boolean;
  Axia: boolean;
}

interface IWitcher {
  name: string;
  weapons: ISwords;
  horse: string;
  signals: ISignals;
  spells: false;
}

const witcher: IWitcher = {
  name: "Geralt",
  weapons: { steel: true, silver: true },
  horse: "Roach",
  signals: { Aard: true, Yrden: true, Igni: true, Quen: true, Axia: true },
  spells: false,
};

const clone = (source: IWitcher): object => {
  const { ...cloneSource } = source;
  return cloneSource;
};

console.log(clone(witcher));

interface IHuman {
    name: string,
    occupation: string,
    country: string,
}

interface ISorceres {
    name: string,
    occupation: string,
    sons: boolean
}

const human: IHuman = { name: "Jaskier", occupation: 'juggler', country: "Redania" };
const sorceres: ISorceres = { name: "Yennefer", occupation: 'counselor', sons: false };

console.log("=== MERGE ===");

const merge = (source: Object, target: Object): object => {
    const mergeObject = {...target, ...source}
    return mergeObject
}

console.log(merge(human, sorceres))