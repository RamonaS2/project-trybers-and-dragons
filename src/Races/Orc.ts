import Race from './Race';

export default class Orc extends Race {
  protected static _instances = 0;
  protected _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instances += 1;
    this._maxLifePoints = 74;
  }

  public get maxLifePoints() {
    return this._maxLifePoints; 
  }

  public static createdRacesInstances(): number {
    return Orc._instances;
  }
}