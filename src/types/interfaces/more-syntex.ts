interface Moter {
  name: string;
  yom: Date;
  broken: boolean;
  summary(): string;
}

const hondaCab = {
  name: 'honda-c',
  yom: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printHondaCab = (moter: Moter): void => {
  console.log(moter.summary());
};

printHondaCab(hondaCab);
