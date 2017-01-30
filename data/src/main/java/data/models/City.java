package data.models;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class City {

	private int id;
	private String city;
	private String description;
	private String history;
	private DbConnection con = new DbConnection();
	
	public City() {
		
	}
	
	public City(int id, String city, String description, String history) {
		this.id = id;
		this.city = city;
		this.description = description;
		this.history = history;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public String getHistory() {
		return history;
	}
	public void setHistory(String history) {
		this.history = history;
	}
	public DbConnection getCon() {
		return con;
	}
	public void setCon(DbConnection con) {
		this.con = con;
	}
	
	public static void save(int id, String city, String description, String history) {
		DbConnection con = new DbConnection();
		String sql = "INSERT INTO cities (id, city, description, history) VALUES(" + id +  ", " + city + ","  + description + "," + history + ");";
		con.executeSet(sql);
	}
	
	public void save() {
		String sql = "INSERT INTO cities (id, city, description, history) VALUES(" + this.id + "," + this.city + ", " + this.description + "," + this.history + ");";
		this.con.executeSet(sql);
	}
	
	public City getById(int id) {
		ResultSet rs = null;
		City city = null;
		String sql = "SELECT * FROM cities Where id =" + id;
		rs = this.con.executeGet(sql);
		try {
			  city = new City(rs.getInt("id"), rs.getString("city"), rs.getString("description"), rs.getString("history"));
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		
		return city;
	}
	
	public ArrayList<City> getByCityId(int cityId) {
		ResultSet rs = null;
		String sql = "SELECT * FROM cities Where id =" + cityId;
		rs = this.con.executeGet(sql);
		ArrayList<City> cities = new ArrayList<City>();
		try {
			while(rs.next()) {
				City city = new City(rs.getInt("id"), rs.getString("city"), rs.getString("description"), rs.getString("history"));
				cities.add(city);
			}
		} catch (SQLException e) {
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		return cities;
	}
	
	public ArrayList<City> getByCity(String city) {
	   ResultSet rs = null;
	   ArrayList<City> cities = new ArrayList<City>();
	   String sql = "SELECT * FROM cities Where city =" + city;
	   rs = this.con.executeGet(sql);
	   try {
		   while(rs.next()) {
			   City cityN = new City(rs.getInt("id"), rs.getString("city"), rs.getString("description"), rs.getString("history"));
			   cities.add(cityN);
		   }
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
	   return cities;
	}
	
	public ArrayList<City> getAll() {
		
		ResultSet rs = null;
		ArrayList<City> cities = new ArrayList<City>();
	    String sql = "SELECT * FROM cities";
	    rs = this.con.executeGet(sql);
		try {
			while(rs.next()) {
			  City city = new City(rs.getInt("id"), rs.getString("city"), rs.getString("description"), rs.getString("history"));
			  cities.add(city);
			}
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		return cities;
	}
	
	public void updateById(int id, String city, String description, String history) {
		String sql = "UPDATE cities Set city = " + city + ", description = " + description + ", history = "
			      + history + "WHERE id = " + id;
		this.con.executeSet(sql);
	}
	
	public void update() {
		String sql = "UPDATE cities Set city = " + this.city + ", description = " + this.description + ", history = "
				      + this.history + "WHERE id = " + this.id;
		this.con.executeSet(sql);
	}
	
	public void deleteById(int id) {
	    String sql = "DELETE FROM cities WHERE id = " + id;
	    this.con.executeSet(sql);
	}
	
	public void delete() {
		String sql = "DELETE FROM cities WHERE id = " + this.id;
		this.con.executeSet(sql);
	}
	
	public void deleteAll() {
		String sql = "DELETE FROM cities";
		this.con.executeSet(sql);
	}
	
}
