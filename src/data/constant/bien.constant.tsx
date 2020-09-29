export interface Bien {
  id: string;
  addresse: string;
  disponibilités: Dispo[];
}

export interface Dispo {
  start: Date;
  end: Date;
  recurrent: boolean;
  title?: string;
  display?: string;
}

export interface newDispo {
  start: Date;
  end: Date;
  id: string;
}
