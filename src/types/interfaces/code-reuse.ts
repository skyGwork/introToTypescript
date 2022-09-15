interface Reportable {
  summary(): string;
}

const mintra = {
  name: 'suzuki',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const mintraSummary = (item: Reportable): void => {
  console.log(item.summary());
};

const coke = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

mintraSummary(mintra);
mintraSummary(coke);
