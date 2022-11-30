import { CustomMap } from './CustomMap';
/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

console.log(user);
// console.log(company);

const mapDiv = document.getElementById('map');

const customMap = new CustomMap(mapDiv);
customMap.addMarker(user);
customMap.addMarker(company);

let lat: string;
let lng: string;

navigator.geolocation.getCurrentPosition((position) => {
	lat = position.coords.latitude.toFixed(2);
	lng = position.coords.longitude.toFixed(2);
})

console.log(lat, lng);

