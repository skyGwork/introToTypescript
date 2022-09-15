interface Reportable {
  summary(): string;
}

const suzuki = {
  name: 'suzuki',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const suzikiSummary = (item: Reportable): void => {
  console.log(item.summary());
};

suzikiSummary(suzuki);
