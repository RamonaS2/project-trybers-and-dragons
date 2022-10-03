import Race from './Race';

export default class Halfling extends Race {
  protected static _instances = 0;
  protected _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instances += 1;
    this._maxLifePoints = 60;
  }
  
  public get maxLifePoints() {
    return this._maxLifePoints; 
  }
  
  public static createdRacesInstances(): number {
    return Halfling._instances;
  }
}