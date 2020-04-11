const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get('/', (req, res)=> {
	res.render("landing");
});

//Array of photo objects
var photos = [
		{title : "paints", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fsfp%2Fimage%2Fupload%2Fw_200%2Cf_auto%2Fcprd%2Fimages%2Fste%2F0e59ca77-6ae7-4f72-94eb-d50f9dc9ca19.png&f=1&nofb=1"},
		{title : "water paints", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.xooimage.com%2Ffiles57%2F4%2F5%2F2%2F499-447e602.png&f=1&nofb=1"},
		{title : "wall paint", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc2.staticflickr.com%2F4%2F3391%2F3233046074_34a63d9696_m.jpg&f=1&nofb=1"},
		{title : "paints", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fsfp%2Fimage%2Fupload%2Fw_200%2Cf_auto%2Fcprd%2Fimages%2Fste%2F0e59ca77-6ae7-4f72-94eb-d50f9dc9ca19.png&f=1&nofb=1"},
		{title : "water paints", image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.xooimage.com%2Ffiles57%2F4%2F5%2F2%2F499-447e602.png&f=1&nofb=1"},
		{title : "wall paint", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc2.staticflickr.com%2F4%2F3391%2F3233046074_34a63d9696_m.jpg&f=1&nofb=1"}
	];


//Gallery route
app.get('/gallery', (req,res) =>{
	res.render("gallery", {photos: photos});
});

//Post to gallery
app.post('/gallery', function(req, res){

	var title = req.body.Title;
	var url = req.body.image;
	var newPhoto = {title: title, image: url};
	photos.push(newPhoto);
	//redirect to gallery
	res.redirect("/gallery");
});

//Form route
app.get('/gallery/new', function(req,res){
	res.render("new.ejs");
});

app.listen(6000, ()=> {	
	console.log("Server is running");
});