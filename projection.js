/******************************************************************************
*                       Copyright (c) 2011 - 2012 by                          *
*                               Simon Pratt                                   *
*                         (All rights reserved)                               *
*******************************************************************************
*                                                                             *
* FILE:    projection.js                                                      *
*                                                                             *
* MODULE:  Projection                                                         *
*                                                                             *
* NOTES:   This is the library file to include when using projection.         *
*                                                                             *
******************************************************************************/

function DrawableObject(x,y,z,img_src) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.img_src = img_src;
    this.planes = [];
    this.images = [];
}

function inArray(item,array) {
    for(var i in array) {
	if(array[i] == item) return i;
    }
    return -1;
}

DrawableObject.prototype.draw_xz = function(xz_plane) {
    console.log("Drawing xz...");
    var i = inArray(xz_plane,this.planes);
    if(i < 0) {
	var img = new Image();
	img.src = this.img_src;
	xz_plane.appendChild(img);
	i = this.planes.length;
	this.planes[i] = xz_plane;
	this.images[i] = img;
    }
    console.log("Done drawing xz.");
}

DrawableObject.prototype.draw_yz = function(yz_plane) {
    console.log("Drawing yz...");
    var i = inArray(yz_plane,this.planes);
    if(i < 0) {
	var img = new Image();
	img.src = this.img_src;
	yz_plane.appendChild(img);
	i = this.planes.length;
	this.planes[i] = yz_plane;
	this.images[i] = img;
    }
    console.log("Done drawing yz.");
}