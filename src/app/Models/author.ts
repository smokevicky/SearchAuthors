export interface AuthorDetails {
  birth_date: string;
  id: number;
  key: string;
  last_modified: LastModified;
  name: string;
  personal_name: string;
  revision: number;
  type: Type;
  death_date?: string;
}

export interface LastModified {
  type: string;
  value: string;
}

export interface Type {
  key: string;
}

export interface AuthorData {
  authors: [{type: Type, author: Type}];
  created: LastModified;
  first_publish_date: string;
  id: number;
  key: string;
  last_modified: LastModified;
  latest_revision: number;
  lc_classifications: string[];
  revision: number;
  subjects: string[];
  title: string;
  type: Type;
}

export interface AuthorWorks {
  entries: AuthorData[];
  links: {self: string, author: string};
  size: number;
}
