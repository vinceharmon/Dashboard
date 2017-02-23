export class SettingItem {
  public name: string;
  public value: string;

  constructor(name: string, value: string) { 
    this.name = name;
    this.value = value;
  }

}

export class Settings {

  public items : SettingItem[];

  constructor(settings: SettingItem[]) { 
    this.items = settings;
  }

}

export class SettingRS {

  public name: string;
  public success: boolean;
  public msg: string;
}