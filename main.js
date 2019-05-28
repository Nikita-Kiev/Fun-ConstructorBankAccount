function Person(name, date, money) {
    this.name = name;
    this.money = money;
    this.date = date;
    this.history = [];
  
    this.getAge = (date) => {
      const birth = this.date.split('.').reverse();
      const dateofBirth = new Date(birth);
      const ageDifMs = Date.now() - dateofBirth.getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  
    this.addMoney= (summ, text) => {
      this.money += summ;
      this.history.push(`${summ}$: ${text}`);
    }
  
    this.withdrawMoney = (summ, text) => {
      this.money -= summ;
      this.history.push(`${text}: -${summ}$`);
    }
  
    this.getInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.getAge()}, Amount: ${this.money}$`)
    }
  
    this.getAccountHistory = () => {
      console.log(this.history);
    }
}
  
const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
