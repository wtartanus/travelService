package data.models;

import java.util.ArrayList;

public class Inspiration {
	
	private City city;
	private ArrayList<Activity> activities = new ArrayList<Activity>();
	private Weather weather;
	private ArrayList<Photo> photos = new ArrayList<Photo>();
	
	public Inspiration() {
		
	}
	
	public Inspiration(City city, ArrayList<Activity> activities, Weather weather, ArrayList<Photo> photos) {
		this.city = city;
		this.activities = activities;
		this.weather = weather;
		this.photos = photos;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public ArrayList<Activity> getActivities() {
		return activities;
	}

	public void setActivities(ArrayList<Activity> activities) {
		this.activities = activities;
	}

	public Weather getWeather() {
		return weather;
	}

	public void setWeather(Weather weather) {
		this.weather = weather;
	}

	public ArrayList<Photo> getPhotos() {
		return photos;
	}

	public void setPhotos(ArrayList<Photo> photos) {
		this.photos = photos;
	}

}
