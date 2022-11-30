
// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};

	markerContent(): string;
	color: string;

}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(mapDiv: HTMLElement) {
		this.googleMap = new google.maps.Map(mapDiv, {
			zoom: 14,
			center: {
				lat: 32.18000,
				lng: 34.90500,
			},
		});
	}

	addMarker(mappable: Mappable): void {
		const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
		const marker = new google.maps.Marker({
			map: this.googleMap,
			// icon: image,
			label: "E",
			animation: google.maps.Animation.DROP,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});

		marker.addListener('click', () => {
			const infoWin = new google.maps.InfoWindow({
				content: mappable.markerContent()
			});

			infoWin.open(this.googleMap, marker);
		});

	}

}
