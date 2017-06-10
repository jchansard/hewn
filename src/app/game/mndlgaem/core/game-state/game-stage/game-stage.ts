import { Point } from '../../../shared';

enum playerType {
  player,
  enemy
}

const playerCenter:Point = { x: 175, y: 550 }; // todo: use game width + height
const playerOffset:Point = { x: 75, y: 75 };

export class GameStage {
  private playerSlots: Point[];
  private enemySlots: Point[];

  constructor(levelData?:any) { // todo: levelData
    levelData = levelData || {};
    this.playerSlots = levelData.playerSlots || this.defaultPlayerSlots();
    this.enemySlots = levelData.enemySlots || [{ x: 700, y: 550}];
  }

  public playerSlot(index:number):Point {
    return this.getSlot(playerType.player, index)
  }

  public enemySlot(index:number):Point {
    return this.getSlot(playerType.enemy, index)
  }

  public get playerSlotCount():number { return this.playerSlots.length; }
  public get enemySlotCount():number { return this.enemySlots.length; }

  private getSlot(type:playerType, index:number) {
    let point:Point;
    let slots:Point[] = (type === playerType.player) ? this.playerSlots : this.enemySlots;

    try { point = slots[index]; }
    catch(e) { return null; }
    return point;
  }

  private defaultPlayerSlots():Point[] {
    return  [
      {
        x: playerCenter.x - playerOffset.x,
        y: playerCenter.y
      },
      {
        x: playerCenter.x,
        y: playerCenter.y - playerOffset.y
      },
      {
        x: playerCenter.x + playerOffset.x,
        y: playerCenter.y
      },
      {
        x: playerCenter.x,
        y: playerCenter.y + playerOffset.y
      }
    ]
  }
}
