export class Todo
{
  public text : string;
  public category : string;
  public priority : string;
  public completed : boolean;
  public toBeCompletedBy : Date;


  constructor(text:string, category:string, priority:string, completed:boolean, toBeCompletedBy:Date)
  {
    this.text=text;
    this.category=category;
    this.priority=priority;
    this. completed=completed;
    this.toBeCompletedBy=toBeCompletedBy

  }
}
