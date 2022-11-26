interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: string;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skills";
  image: Image;
  progress: string;
  title: string;
}

export interface Skills extends SanityBody {
  _type: "skills";
  image: Image;
  progress: string;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _id: Key | null | undefined;
  _type: "social";
  title: string;
  url: string;
}

// export interface Social {
//   _createdAt: Date;
//   _id: string;
//   _rev: string;
//   _type: string;
//   _updatedAt: Date;
//   title: string;
//   url: string;
// }
