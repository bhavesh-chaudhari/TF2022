export interface TimelineType {
  timeline: [
    {
      id: number;
      title: string;
      date: Date;
      start?: Date;
      end?: Date;
    }
  ];
}
