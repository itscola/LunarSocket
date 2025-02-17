import Player from '../Player';

export default class Command {
  public readonly command: string;
  public help: string;

  private handler: CommandHandlerFn;

  public constructor(command: string) {
    this.command = command;
  }

  public trigger(player: Player, raw: string): void {
    const args = raw.split(' ');
    const command = args[0];
    args.shift();
    this.handler(player, command, args);
  }

  public setHandler(handler: CommandHandlerFn): void {
    this.handler = handler;
  }
}

type CommandHandlerFn = (
  player: Player,
  command: string,
  args: string[]
) => void;
