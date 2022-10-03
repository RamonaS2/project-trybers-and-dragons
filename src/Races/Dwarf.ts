import Race from './Race';

export default class Dwarf extends Race {
  private static _instances = 0;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instances += 1;
    this._maxLifePoints = 80;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints; 
  }
  
  public static createdRacesInstances(): number {
    return Dwarf._instances;
  }
}