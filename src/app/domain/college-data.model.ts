export interface CollegeDataModel {
  name: string;
  address__city: string;
  address__state: string;
  address__longitude: number;
  address__latitude: number;
  image_url: string;
  distance?: number; // Quick and dirty type added. This should go into a new type.
}
