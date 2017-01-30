package data.models;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

public class Weather {

	
	@SuppressWarnings("rawtypes")
	private HashMap temperatures = new HashMap();
	private DbConnection con = new DbConnection();
	
	public Weather(){

	}
	
	@SuppressWarnings("unchecked")
	public Weather(int id, int cityId, int jan, int feb, int mar, int apr, int may, int june, int july, int aug, int sept, int oct, int nov, int dec) {
		ArrayList<Integer> values = new ArrayList<Integer>();
		values.add(jan);
		values.add(feb);
		values.add(mar);
		values.add(apr);
		values.add(may);
		values.add(june);
		values.add(july);
		values.add(aug);
		values.add(sept);
		values.add(oct);
		values.add(nov);
		values.add(dec);
		this.temperatures.put("id", id);
		this.temperatures.put("cityId", cityId);
		this.temperatures.put("values", values);
	}
	
	public int getId() {
		return (Integer) this.temperatures.get("id");
	}
	
	public int getCityId() {
		return (Integer) this.temperatures.get("cityId");
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Integer> getTemperatures() {
		return  (ArrayList<Integer>) this.temperatures.get("Values");
	}
	
	@SuppressWarnings("unchecked")
	public int getByMonth(int index) {
		ArrayList<Integer> values = (ArrayList<Integer>) this.temperatures.get("values");
		int value = values.get(index);
		return value;
	}
	
	@SuppressWarnings("unchecked")
	public void setTemperatures(int jan, int feb, int mar, int apr, int may, int june, int july, int aug, int sept, int oct, int nov, int dec) {
		ArrayList<Integer> values = new ArrayList<Integer>();
		values.add(jan);
		values.add(feb);
		values.add(mar);
		values.add(apr);
		values.add(may);
		values.add(june);
		values.add(july);
		values.add(aug);
		values.add(sept);
		values.add(oct);
		values.add(nov);
		values.add(dec);
		this.temperatures.remove("values");
		this.temperatures.put("values", values);
	}
	
	@SuppressWarnings("unchecked")
	public void setTemperature(int index, int temperature) {
		ArrayList<Integer> values = this.getTemperatures();
		values.set(index, temperature);
		this.temperatures.replace("values", values);
	}
	
	public void save() {
		ArrayList<Integer> values = this.getTemperatures();
		String sql = "INSERT INTO weather (city_id, jan, feb, mar, apr, may, june, july, aug, sept, oct, nov, dec)) VALUES(" 
		+ this.getCityId() + "," + values.get(0) + "," + values.get(1) + "," + values.get(2) + "," + values.get(3) + "," + values.get(4) + ","
		+ values.get(5) + "," + values.get(6) + "," + values.get(7) + "," + values.get(8) + "," + values.get(9) + "," + values.get(10) + ","
		+ values.get(11) + ")WHERE id = " + this.getId() + ";";
		this.con.executeSet(sql);
	}
	
	public static void save(int id, int cityId, int jan, int feb, int mar, int apr, int may, int june, int july, int aug, int sept, int oct, int nov, int dec) {
		DbConnection con = new DbConnection();
		String sql = "INSERT INTO weather (city_id, jan, feb, mar, apr, may, june, july, aug, sept, oct, nov, dec)) VALUES(" 
		+ cityId + "," + jan + "," + feb + "," + mar + "," + apr + "," + may + ","
		+ june + "," + july + "," + aug + "," + sept + "," + oct + "," + nov + ","
		+ dec + ")WHERE id = " + id + ";";
		con.executeSet(sql);
	}
	
	public Weather getById(int id) {
		ResultSet rs = null;
		Weather weather = null;
		String sql = "SELECT * FROM weather Where id =" + id;
		rs = this.con.executeGet(sql);
		try {
		    weather = new Weather(rs.getInt("id"), rs.getInt("city_id"), rs.getInt("jan"), rs.getInt("feb"),rs.getInt("mar"), rs.getInt("apr"), rs.getInt("may"), rs.getInt("june"), rs.getInt("july"), rs.getInt("aug"), rs.getInt("sept"), rs.getInt("oct"), rs.getInt("nov"), rs.getInt("dec"));
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		
		return weather;
	}
	
	public ArrayList<Weather> getByCityId(int cityId) {
		ResultSet rs = null;
		String sql = "SELECT * FROM weather Where id = " + cityId;
		rs = this.con.executeGet(sql);
		ArrayList<Weather> weatherList = new ArrayList<Weather>();
		try {
			while(rs.next()) {
			  Weather weather = new Weather(rs.getInt("id"), rs.getInt("city_id"), rs.getInt("jan"), rs.getInt("feb"),rs.getInt("mar"), rs.getInt("apr"), rs.getInt("may"), rs.getInt("june"), rs.getInt("july"), rs.getInt("aug"), rs.getInt("sept"), rs.getInt("oct"), rs.getInt("nov"), rs.getInt("dec"));
			  weatherList.add(weather);
			}
		} catch (SQLException e) {
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		return weatherList;
	}
	
	public ArrayList<Weather> getByCity(String city) {
	   ResultSet rs = null;
	   ArrayList<Weather> weatherList = new ArrayList<Weather>();
	   String sql = "SELECT * FROM weather Where name = " + city;
	   rs = this.con.executeGet(sql);
	   try {
		   while(rs.next()) {
			 Weather weather = new Weather(rs.getInt("id"), rs.getInt("city_id"), rs.getInt("jan"), rs.getInt("feb"),rs.getInt("mar"), rs.getInt("apr"), rs.getInt("may"), rs.getInt("june"), rs.getInt("july"), rs.getInt("aug"), rs.getInt("sept"), rs.getInt("oct"), rs.getInt("nov"), rs.getInt("dec"));
			 weatherList.add(weather);
		   }
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
	   return weatherList;
	}
	
	public ArrayList<Weather> getAll() {
		ResultSet rs = null;
		ArrayList<Weather> weatherList = new ArrayList<Weather>();
	    String sql = "SELECT * FROM weather";
	    rs = this.con.executeGet(sql);
		try {
			while(rs.next()) {
			  Weather weather = new Weather(rs.getInt("id"), rs.getInt("city_id"), rs.getInt("jan"), rs.getInt("feb"),rs.getInt("mar"), rs.getInt("apr"), rs.getInt("may"), rs.getInt("june"), rs.getInt("july"), rs.getInt("aug"), rs.getInt("sept"), rs.getInt("oct"), rs.getInt("nov"), rs.getInt("dec"));
			  weatherList.add(weather);
			}
		} catch (SQLException e) {
	        System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	        System.exit(0);
			e.printStackTrace();
		}
		return weatherList;
	}
	
	public void updateById(int id, String month, int value) {
		String sql = "UPDATE weather Set " + month + " = " + value + " WHERE id = " + id;
		this.con.executeSet(sql);
	}
	
	public void update() {
		ArrayList<Integer> values = this.getTemperatures();
		String sql = "UPDATE weather Set city_id = " + this.getCityId() + ", jan = " + values.get(0) + ", feb = " + values.get(1)
		+ ", mar = " + values.get(2) + ", apr = " + values.get(3) + ", may = " + values.get(4) + ", june = " + values.get(5)
		+ ", july = " + values.get(6) + ", aug = " + values.get(7) + ", sept = " + values.get(8) + ", oct = " + values.get(9)
		+ ", nov = " + values.get(10) + ", dec = " + values.get(11) + "WHERE id = " + this.getId();
		this.con.executeSet(sql);
	}
	
	public void deleteById(int id) {
	    String sql = "DELETE FROM weather WHERE id = " + id;
	    this.con.executeSet(sql);
	}
	
	public void delete() {
		String sql = "DELETE FROM weather WHERE id = " + this.getId();
		this.con.executeSet(sql);
	}
	
	public void deleteAll() {
		String sql = "DELETE FROM weather";
		this.con.executeSet(sql);
	}
}
