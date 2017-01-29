package service;

import java.util.ArrayList;
import java.util.Collection;

import data.models.*;

public class InspirationMapping {
      
	private Inspiration inspiration = new Inspiration();
	private City city;
	private Activity activity = new Activity();
	private Weather weather = new Weather();
	private Photo photo = new Photo();
	
	private ArrayList<Inspiration> inspirations;
	private ArrayList<City> cities;
	private ArrayList<Activity> activities;
	private ArrayList<Weather>  weathers;
	private ArrayList<Photo> photos;
	
	public InspirationMapping() {
		this.inspirations = new ArrayList<Inspiration>();
		this.city = new City();
		this.cities = this.city.getAll();
		this.activities = this.activity.getAll();
		this.weathers = this.weather.getAll();
		this.photos = this.photo.getAll();
	}
	
	public ArrayList<Inspiration> mapAllInspirations() {
		for(City c : cities) {
			ArrayList<Activity> a = new ArrayList<Activity>();
			ArrayList<Photo> p = new ArrayList<Photo>();
			Weather w = null;
			for(Activity value : activities) {
				if(value.getCityId() == c.getId() ) {
					a.add(value);
				}
			}
			
			for(Weather value : weathers ) {
				if(value.getId() == c.getId()) {
					w = value;
				}
			}
			
			for(Photo value : this.photos) {
                int we = value.getCityId();
				if(value.getCityId() == c.getId()) {
					 p.add(value);
				}
			}
			
			Inspiration i = new Inspiration(c, a, w, p);
			inspirations.add(i);
		}
		
		return this.inspirations;
	}
}
