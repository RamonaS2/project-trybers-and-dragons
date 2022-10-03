import Race from './Race';

export default class Halfling extends Race {
  private static _instances = 0;
  private _maxLifePoints: number;
  
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