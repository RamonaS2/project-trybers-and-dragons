import Race from './Race';

export default class Elf extends Race {
  protected static _instances = 0;
  protected _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instances += 1;
    this._maxLifePoints = 99;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints; 
  }
  
  public static createdRacesInstances(): number {
    return Elf._instances;
  }
}