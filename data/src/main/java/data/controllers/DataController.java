package data.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import java.util.ArrayList;
import service.InspirationMapping;
import data.models.Inspiration;


@RestController
@RequestMapping(DataController.DATA_BASE_URI)
public class DataController {
	
  
	public static final String DATA_BASE_URI = "travel-guide/data";
	
	@RequestMapping(value = "/test")
	public String test() {
		InspirationMapping im = new InspirationMapping();
		ArrayList<Inspiration> inspirations = im.mapAllInspirations();
	
		Gson gson = new Gson();

		String inspirationsJson = gson.toJson(inspirations);
		
		return  inspirationsJson;
	}
}