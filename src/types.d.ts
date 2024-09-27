export type Likes = "Service" | "Cleanliness" | "Atmosphere" | "Food quality";

type Waiter = {
  name: string;
  avatar: string;
  role: string;
  id: number;
};

export interface Experience {
  experience: number;
  service: number;
  likes: Likes[];
  message: string;
}
