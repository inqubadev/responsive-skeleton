var Loader = function(images, progress, complete)
{
	this.loader = new PxLoader();
}

Loader.prototype.add_images = function(images)
{
	for( pos in images )
	{
		this.add_image(images[pos]);
	}
};

Loader.prototype.add_image = function(image)
{
	this.loader.add(new PxLoaderImage(image));
};

Loader.prototype.progress = function(callback)
{
	this.loader.addProgressListener(function(e){
		var percentage = Math.ceil(( e.completedCount / e.totalCount ) * 100);
		callback(percentage);
	});	
};

Loader.prototype.complete = function(callback)
{
	this.loader.addCompletionListener(function(e){
		callback();
	});
};

Loader.prototype.start = function()
{
	this.loader.start();
};