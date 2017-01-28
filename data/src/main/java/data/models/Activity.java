package data.models;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class Activity {
	
	private int id;
	private int cityId;
	private String city;
	private String description;
	private String address;
	private String photoLink;
	private DbConnection con = new DbConnection();
	
	public Activity() {
		
	}
	
	public Activity(int id, int cityId, String city, String description, String address, String photoLink) {
		this.id = id;
		this.cityId = cityId;
		this.city = city;
		this.description = description;
		this.address = address;
		this.photoLink = photoLink;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCityId() {
		return cityId;
	}
	public void setCityId(int cityId) {
		this.cityId = cityId;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhotoLink() {
		return photoLink;
	}
	public void setPhotoLink(String photoLink) {
		this.photoLink = photoLink;
	}
	
	public static void save(int id, int cityId, String city, String description, String address, String photoLink) {
		DbConnection con = new DbConnection();
		String sql = "INSERT INTO photos (id, city_id, name, description, address, photo_link) VALUES(" + id +  ", " + cityId + "," + city + ", " + description + "," + address + ", " + photoLink + ");";
		con.executeSet(sql);
	}
	
	public void save() {
		String sql = "INSERT INTO photos (city_id, name, description, address, photo_link) VALUES(" + this.cityId + "," + this.city + ", " + this.description + "," + this.address + ", " + this.photoLink + ");";
		this.con.executeSet(sql);
	}
	
	public Activity getById(int id) {
		ResultSet rs = null;
		Activity activity = null;
		String sql = "SELECT * FROM activities1 Where id =" + id;
		rs = this.con.executeGet(sql);
		try {
			  activity = new Activity(rs.getInt("id"), rs.getInt("city_id"), rs.getString("name"), rs.getString("description"), rs.getString("address"), rs.getString("photo_link"));
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		
		return activity;
	}
	
	public ArrayList<Activity> getByCityId(int cityId) {
		ResultSet rs = null;
		String sql = "SELECT * FROM activities Where id =" + cityId;
		rs = this.con.executeGet(sql);
		ArrayList<Activity> activities = new ArrayList<Activity>();
		try {
			while(rs.next()) {
				 Activity activity = new Activity(rs.getInt("id"), rs.getInt("city_id"), rs.getString("name"), rs.getString("description"), rs.getString("address"), rs.getString("photo_link"));
			     activities.add(activity);
			}
		} catch (SQLException e) {
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		return activities;
	}
	
	public ArrayList<Activity> getByCity(String city) {
	   ResultSet rs = null;
	   ArrayList<Activity> activities = new ArrayList<Activity>();
	   String sql = "SELECT * FROM activities1 Where name =" + city;
	   rs = this.con.executeGet(sql);
	   try {
		   while(rs.next()) {
			   Activity activity = new Activity(rs.getInt("id"), rs.getInt("city_id"), rs.getString("name"), rs.getString("description"), rs.getString("address"), rs.getString("photo_link"));
			   activities.add(activity);
		   }
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
	   return activities;
	}
	
	public ArrayList<Activity> getAll() {
		ResultSet rs = null;
		ArrayList<Activity> activities = new ArrayList<Activity>();
	    String sql = "SELECT * FROM activities1";
	    rs = this.con.executeGet(sql);
		try {
			while(rs.next()) {
			  Activity activity = new Activity(rs.getInt("id"), rs.getInt("city_id"), rs.getString("name"), rs.getString("description"), rs.getString("address"), rs.getString("photo_link"));
			  activities.add(activity);
			}
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		return activities;
	}
	
	public void updateById(int id, int cityId, String city, String description, String address, String photoLink) {
		String sql = "UPDATE activities1 Set cityId = " + cityId + ", name = " + city + ", description = "
			      + description + ", address = " + address + ", photo_link = " + photoLink +
			      "WHERE id = " + id;
		this.con.executeSet(sql);
	}
	
	public void update() {
		String sql = "UPDATE activities1 Set cityId = " + this.cityId + ", name = " + this.city + ", description = "
				      + this.description + ", address = " + this.address + ", photo_link = " + this.photoLink +
				      "WHERE id = " + this.id;
		this.con.executeSet(sql);
	}
	
	public void deleteById(int id) {
	    String sql = "DELETE FROM activities1 WHERE id = " + id;
	    this.con.executeSet(sql);
	}
	
	public void delete() {
		String sql = "DELETE FROM activities1 WHERE id = " + this.id;
		this.con.executeSet(sql);
	}
	
	public void deleteAll() {
		String sql = "DELETE FROM activities1";
		this.con.executeSet(sql);
	}

}
