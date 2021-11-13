export interface GetChannelStreamSchedule {
  data: Data;
  pagination: Pagination;
}

export interface Data {
  segments?: SegmentsEntity[] | null;
  broadcaster_id: string;
  broadcaster_name: string;
  broadcaster_login: string;
  vacation?: Vacation | null;
}

export interface Vacation {
  start_time: string;
  end_time: string;
}

export interface SegmentsEntity {
  id: string;
  start_time: string;
  end_time: string;
  title: string;
  canceled_until?: null;
  category: Category;
  is_recurring: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export interface Pagination {
  cursor?: string;
}
