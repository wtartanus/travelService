package data.models;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class Photo {
	private int id;
	private int cityId;
	private String link;
	private DbConnection con = new DbConnection();
	
	public Photo(){

	}
	
	public Photo(int id, int cityId, String link) {
		this.id = id;
		this.cityId = cityId;
		this.link = link;
	}
	
	public int getId() {
		return this.id;
	}
	
	public void setCityId(int id) {
		this.cityId = id;
	}
	
	public int getCityId() {
		return this.cityId;
	}
	
	public void setLink(String link) {
		this.link = link;
	}
	
	public String getLink() {
		return this.link;
	}
	
	public void save() {
		String sql = "INSERT INTO photos (city_id, link) VALUES(" + this.cityId + "," + this.link + ") WHERE id = " + this.id + ";";
		this.con.executeSet(sql);
	}
	
	public static void save(int id, int cityId, String link) {
		DbConnection con = new DbConnection();
		String sql = "INSERT INTO photos (city_id, link) VALUES(" + cityId + "," + link + ") WHERE id = " + id + ";";
		con.executeSet(sql);
	}
	
	public Photo getById(int id) {
		ResultSet rs = null;
		Photo photo = null;
		String sql = "SELECT * FROM photos Where id =" + id;
		rs = this.con.executeGet(sql);
		try {
		    photo = new Photo(rs.getInt("id"), rs.getInt("city_id"), rs.getString("link"));
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		
		return photo;
	}
	
	public ArrayList<Photo> getByCityId(int cityId) {
		ResultSet rs = null;
		String sql = "SELECT * FROM photos Where id =" + cityId;
		rs = this.con.executeGet(sql);
		ArrayList<Photo> photos = new ArrayList<Photo>();
		try {
			while(rs.next()) {
			  Photo photo = new Photo(rs.getInt("id"), rs.getInt("city_id"), rs.getString("link"));
			  photos.add(photo);
			}
		} catch (SQLException e) {
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		return photos;
	}
	
	public ArrayList<Photo> getByCity(String city) {
	   ResultSet rs = null;
	   ArrayList<Photo> photos = new ArrayList<Photo>();
	   String sql = "SELECT * FROM photos Where name =" + city;
	   rs = this.con.executeGet(sql);
	   try {
		   while(rs.next()) {
			 Photo photo = new Photo(rs.getInt("id"), rs.getInt("city_id"), rs.getString("link"));
			 photos.add(photo);
		   }
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
	   return photos;
	}
	
	public ArrayList<Photo> getAll() {
		ResultSet rs = null;
		ArrayList<Photo> photos = new ArrayList<Photo>();
	    String sql = "SELECT * FROM photos";
	    rs = this.con.executeGet(sql);
		try {
			while(rs.next()) {
			  int id = rs.getInt("id");
			  int cityId = rs.getInt("city_id");
			  String link = rs.getString("link");
			  Photo photo = new Photo(id, cityId, link);
			  photos.add(photo);
			}
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		return photos;
	}
	
	public void updateById(int photoId, String link) {
		String sql = "UPDATE photos Set link = " + link + " WHERE id = " + photoId;
		this.con.executeSet(sql);
	}
	
	public void update() {
		String sql = "UPDATE photos Set link = " + this.link + " WHERE id = " + this.id;
		this.con.executeSet(sql);
	}
	
	public void deleteById(int photoId) {
	    String sql = "DELETE FROM photos WHERE id = " + photoId;
	    this.con.executeSet(sql);
	}
	
	public void delete() {
		String sql = "DELETE FROM photos WHERE id = " + this.id;
		this.con.executeSet(sql);
	}
	
	public void deleteAll() {
		String sql = "DELETE FROM photos";
		this.con.executeSet(sql);
	}
}
