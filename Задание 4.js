function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

ElectricalAppliance.prototype.plugIn = function() {
  this.pluggedIn = true;
  console.log(`${this.name} включен(а) в розетку.`);
}

ElectricalAppliance.prototype.unplug = function() {
  this.pluggedIn = false;
  console.log(`${this.name} выключен(а) из розетки.`);
}

function DeskLamp(name, power, brightness) {
  ElectricalAppliance.call(this, name, power);
  this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.changeBrightness = function(newBrightness) {
  this.brightness = newBrightness;
  console.log(`Яркость настольной лампы ${this.name} изменена на ${newBrightness}.`);
}

function Computer(name, power, operatingSystem) {
  ElectricalAppliance.call(this, name, power);
  this.operatingSystem = operatingSystem;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.installSoftware = function(softwareName) {
  console.log(`Установка программного обеспечения ${softwareName} на компьютер ${this.name}.`);
}

const deskLamp = new DeskLamp("SunShine", 50, "Яркий");
const computer = new Computer("MacBook", 500, "MacOS");

deskLamp.plugIn(); 
deskLamp.changeBrightness("Тусклый"); 
deskLamp.unplug(); 

computer.plugIn(); 
computer.installSoftware("HomeBrew"); 
computer.unplug(); 
