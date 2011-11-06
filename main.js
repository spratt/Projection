/******************************************************************************
*                       Copyright (c) 2011 - 2012 by                          *
*                               Simon Pratt                                   *
*                         (All rights reserved)                               *
*******************************************************************************
*                                                                             *
* FILE:    main.js                                                            *
*                                                                             *
* MODULE:  Projection                                                         *
*                                                                             *
* NOTES:   This is the code specific to the proof of concept.                 *
*                                                                             *
******************************************************************************/

var p, xz_plane, yz_plane;

function main() {
    p = new DrawableObject(10,10,10,"ship.png");
    xz_plane = document.getElementById("xz_plane");
    yz_plane = document.getElementById("yz_plane");
    setInterval(draw,1000);
}

function draw() {
    p.draw_yz(yz_plane);
    p.draw_xz(xz_plane);
}

window.onload=main;