class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  plugIn() {
    this.pluggedIn = true;
    console.log(`${this.name} включен(а) в розетку.`);
  }

  unplug() {
    this.pluggedIn = false;
    console.log(`${this.name} выключен(а) из розетки.`);
  }
}

class DeskLamp extends ElectricalAppliance {
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }

  changeBrightness(newBrightness) {
    this.brightness = newBrightness;
    console.log(`Яркость настольной лампы ${this.name} изменена на ${newBrightness}.`);
  }
}

class Computer extends ElectricalAppliance {
  constructor(name, power, operatingSystem) {
    super(name, power);
    this.operatingSystem = operatingSystem;
  }

  installSoftware(softwareName) {
    console.log(`Установка программного обеспечения ${softwareName} на компьютер ${this.name}.`);
  }
}

const deskLamp = new DeskLamp("SunShine", 50, "Яркий");
const computer = new Computer("MacBook", 500, "MacOS");

deskLamp.plugIn();
deskLamp.changeBrightness("Тусклый");
deskLamp.unplug();

computer.plugIn();
computer.installSoftware("HomeBrew");
computer.unplug();
