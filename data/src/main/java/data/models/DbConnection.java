package data.models;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import org.postgresql.*;


public class DbConnection {
    Connection connection;
    Statement statement;
    
	public DbConnection() {
	}
	
	public void connect() {
		  try {
		      Class.forName("org.postgresql.Driver");
		      this.connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/travel","postgres", "spierdalaj");
		  } catch (Exception e) {
		      e.printStackTrace();
		      System.err.println(e.getClass().getName()+": "+e.getMessage());
		      System.exit(0);
		  }
		  System.out.println("Opened database successfully");
	}
	
	public void executeSet(String sql) {
		this.connect();
		  try{
		     this.statement = this.connection.createStatement();
	         this.statement.executeUpdate(sql);
	         this.statement.close();
	         this.connection.commit();
	         this.connection.close();
	       } catch ( Exception e ) {
	         System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	         System.exit(0);
	       }
	}
	
	public ResultSet executeGet(String sql) {
		ResultSet rs = null;
		this.connect();
		  try{
			 this.statement = this.connection.createStatement();
		     rs = this.statement.executeQuery(sql);
		     //this.statement.close();
		     //this.connection.close();
		  } catch ( Exception e ) {
		      System.err.println( e.getClass().getName()+": "+ e.getMessage() );
		      System.exit(0);
		  }
		  return rs;
	}
}

